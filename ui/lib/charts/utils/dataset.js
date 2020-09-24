import isObject from 'lodash/isObject'


/**
 * 构造 source 数据表格
 * @param {Object[]} standardColumns 标准列配置
 * @param {Array[]|Object[]} rows 行数据
 * @param {object} settings 配置
 * @return {Array} 二维数组
 */
function createSource(standardColumns = [], rows = [], settings = {}) {

  // 构造二维数据表头
  const headerRow = standardColumns.map(col => (col.displayName || col.name))

  // 初始化资源数据
  const source = headerRow.length ? [headerRow] : []

  // 找到需要做数据转换的列索引
  const indexes = getNeedTransformColumnIndexes(standardColumns)

  // 列数据
  const dataRows = []

  // 把行数据填充到二维数据表
  rows.forEach(row => {
    const newRow = Array.isArray(row)
      ? row
      : standardColumns.map(col => {
        return row[col.name]
      })
    // 转换数据
    transformData(standardColumns, indexes, newRow)
    dataRows.push(newRow)
  })

  // 找到第一个设置了排序的列
  const sortColumnIndex = standardColumns.findIndex(col => col.sort)
  // 如果有设置排序，对数据进行从大到小排序
  if (sortColumnIndex >= 0) {
    // 要判断类别所在的轴，横和竖的排序方式不同
    const direction = settings.direction
    dataRows.sort((first, second) => {
      return direction === 'x'
        ? second[sortColumnIndex] - first[sortColumnIndex]
        : first[sortColumnIndex] - second[sortColumnIndex]

    })
  }


  return source.concat(dataRows)
}

/**
 * 获取需要进行数据格式转换列的索引
 * @param {Object[]} standardColumns 标准列配置
 * @return {*}
 */
function getNeedTransformColumnIndexes(standardColumns) {
  const indexes = []
  standardColumns.forEach((col, index) => {
    if (col.unit || col.precision >= 0) {
      indexes.push(index)
    }
  })
  return indexes
}

/**
 * 对行数据进行数据转换
 * @param {Object[]} standardColumns 标准列配置
 * @param {number[]} indexes 需要转换列的索引
 * @param {*} row 数据行
 */
function transformData(standardColumns, indexes, row) {
  indexes.forEach(index => {
    const column = standardColumns[index]
    let value = row[index]
    const unit = column.unit || 'n'
    const precision = column.precision || 0
    switch (unit.toLowerCase()) {
      case 'k':
        value = value / 1000
        break;
      case 'w':
        value = value / 10000
        break;
      case 'p':
        value = value * 100
        break;
    }
    row[index] = formatValue(value, precision)
  })
}

/**
 * 保留几位小数
 * @param {number} value 原始值
 * @param {number} precision 精度
 * @return {number}
 */
function formatValue(value, precision) {
  return Number.parseFloat(value.toFixed(precision))
}

/**
 * 构造 维度 dimensions
 * @param {string} layout 用行还是列对应到系列上，即 echarts 的配置seriesLayoutBy, 可选：column | row ，默认：column
 * @param {Object[]} standardColumns 标准列配置
 * @param {Array[]} source 二维数据表
 * @return {Object[]}
 */
function createDimensions(layout, standardColumns, source) {
  return layout === 'column' ? standardColumns : source.map(row => row[0])
}

/**
 * 构建限制类目数的行数据
 * @param standardColumns 标准列
 * @param rows 行数据
 * @param limit 限制条数
 * @return {*}
 */
function getLimitRows(standardColumns, rows, limit) {
  if (!limit || rows.length <= limit || !standardColumns[1]) {
    return rows
  }

  const valueColumn = standardColumns[1]
  const columnName = valueColumn.name

  // 按维度从大到小排序
  rows.sort((first, second) => {
    // 纬度值取默认第二列
    const firstValue = Array.isArray(first) ? first[1] : first[columnName]
    const secondValue = Array.isArray(second) ? second[1] : second[columnName]
    return secondValue - firstValue
  })
  // 计算需要合并到其他类目的值总和
  const otherTotal = rows.filter((n, index) => index >= limit).reduce((total, item) => {
    return total + (Array.isArray(item) ? item[1] : item[columnName])
  }, 0)
  const other = ['其他', otherTotal]
  const limitRows = rows.slice(0, limit)
  limitRows.push(other)
  return limitRows
}


/**
 * 把用户的列配置转换成标准的配置格式
 * @param {string|object[]} columns
 * @return {*}
 *
 * @example
 *
 * 用户的配置有以下格式
 * 1、数据项是字符串，如：['月份', '销量']
 * 2、数据项是对象形式，如：
 *   [
 *    {name:'month',displayName:'月份'},
 *    {name:'value', displayName:'销量', type:'int', unit:'k', precision:0, sort:true}
 *   ]
 *   其中 name、displayName、type是echarts自带功能， unit、precision 是自扩展功能
 *   type 表示数据类型，通常不需要设置，echarts 会自动识别，可选值：number | ordinal | float | float | time
 *   unit 表示转换数据单位，需要对数据进行转换时设置，可选值：k（千） | w（万） | p（百分比）
 *   precision 转换数据精度，保留几位小数，默认：0
 *   sort 排序，从大到小
 *
 * 该函数的作用是统一把用户配置都转换成标准的对象配置形式
 */
export function columnsToStandard({columns = []}) {
  return columns.map(col => {
    return isObject(col) ? col : {name: col}
  })
}

/**
 * 构造 dataset
 * @param {Object[]} standardColumns 标准列配置
 * @param {string} id
 * @param {string[]|Object[]} columns 列配置
 * @param {array[]|object[]} rows 行数据
 * @param {string} layout 用行还是列对应到系列上，即 echarts 的配置seriesLayoutBy, 可选：column | row ，默认：column
 * @param {boolean} header 数据是否包含列头，默认echarts自动判断
 * @param {object} settings 配置
 * @return {Object}
 */
export function createDataset(standardColumns, {id, rows, layout = 'column', header}, settings) {
  const limitRows = getLimitRows(standardColumns, rows, settings.limit)
  const source = createSource(standardColumns, limitRows, settings)
  const dimensions = createDimensions(layout, standardColumns, source)

  return {
    id: id,
    dimensions: dimensions,
    source: source,
    sourceHeader: header
  }
}
