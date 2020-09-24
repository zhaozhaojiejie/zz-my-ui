import factory from '$ui/charts/utils/factory'
import {columnsToStandard, createDataset} from '$ui/charts/utils/dataset'
import {cloneDeep} from '$ui/utils/util'

const props = {
  // map scatter effectScatter lines
  type: {
    type: [Object, String],
    default: 'map'
  },
  // 是否开启Geo
  geo: {
    type: Boolean,
    default: true
  },
  // 构造序列数据项辅助函数
  dataHelper: [Object, Function]
}

function createVisualMap({source}, {type}) {
  const sourceData = source.slice(1)
  if (!sourceData.length) return null
  const visualColumnIndex = 1
  sourceData.sort((a, b) => a[visualColumnIndex] - b[visualColumnIndex])
  return {
    type: 'continuous',
    show: type !== 'lines',
    min: sourceData[0][visualColumnIndex],
    max: sourceData[sourceData.length - 1][visualColumnIndex],
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],
    calculable: true,
    seriesIndex: 0
  }
}

function createCoords(coordinates, coords) {
  if (!Array.isArray(coords)) return []
  return coords.map(item => {
    if (Array.isArray(item)) {
      return item
    } else {
      return coordinates[item] || null
    }
  }).filter(n => n)
}

function createData(column, columnIndex, type, source, coordinates, dataHelper = {}, dataIndex) {
  const dataArray = source.slice(1)
  const isHelperFunction = typeof dataHelper === 'function'
  switch (type) {
    case 'map':
      return dataArray.map(row => {
        const item = isHelperFunction ? dataHelper(row, dataIndex) : dataHelper
        return {
          name: row[0],
          value: row[columnIndex + 1],
          ...item
        }
      })
    case 'scatter':
    case 'effectScatter':
      return dataArray.map(row => {
        const name = row[0]
        const coords = coordinates[name] || [undefined, undefined]
        const item = isHelperFunction ? dataHelper(row, dataIndex) : dataHelper
        return {
          name: name,
          value: coords.concat(row[columnIndex + 1]),
          ...item
        }
      })
    case 'lines':
      return dataArray.map(row => {
        const name = row[0]
        const item = isHelperFunction ? dataHelper(row, dataIndex) : dataHelper
        const coords = row[columnIndex + 1]
        if (!coords) return null
        return {
          name: name,
          coords: createCoords(coordinates, coords),
          ...item
        }
      }).filter(n => n && n.coords.length)
    
  }
  
  return []
}

function createSeries(map, dataset, standardColumns, {type, dataHelper}, coordinates, dataIndex) {
  // 第一列是位置名称，从第二列开始是维度数据
  const columns = standardColumns.slice(1)
  if (!columns.length) return []
  return columns.map((column, columnIndex) => {
    const chartType = typeof type === 'object'
      ? (type[column.name] || 'map')
      : type
    return {
      type: chartType,
      name: column.displayName || column.name,
      map: chartType === 'map' ? map : undefined,
      geoIndex: 0,
      coordinateSystem: 'geo',
      data: createData(column, columnIndex, chartType, dataset.source, coordinates, dataHelper, dataIndex)
    }
  })
}

function createTooltip() {
  return {
    formatter: function ({seriesName, name, value}) {
      if (value) {
        return `${name}<br/> ${seriesName}: ${Array.isArray(value) ? value[value.length - 1] : value}`
      }
      return `${name}`
    }
  }
}

export default function ({data, settings, map, coordinates}) {
  
  // 克隆数据
  const dataCopy = cloneDeep(data)
  
  const dataArray = [].concat(dataCopy)
  
  // 获取私有配置的值
  const settingsValue = factory(props, settings)
  
  let series = []
  let firstDataset = null
  
  dataArray.forEach((item, index) => {
    // 转换成标准的列配置
    const standardColumns = columnsToStandard(item)
    
    // 构建dataset
    const dataset = createDataset(standardColumns, item, settingsValue)
    
    series = series.concat(createSeries(map, dataset, standardColumns, settingsValue, coordinates, index))
    
    if (index === 0) {
      firstDataset = dataset
    }
    
  })

  return {
    tooltip: createTooltip(),
    geo: settingsValue.geo ? {
      map: map
    } : undefined,
    visualMap: createVisualMap(firstDataset, settingsValue),
    series: series
  }
}
