import factory from '$ui/charts/utils/factory'
import {columnsToStandard, createDataset} from '$ui/charts/utils/dataset'
import {cloneDeep} from '$ui/utils/util'

const props = {
  // 指示设置
  indicator: {
    type: [Array, Number],
    default() {
      return 100
    }
  },
  // 构造序列数据项辅助函数
  dataHelper: [Object, Function]
}

function createIndicator({dimensions}, {indicator}) {
  const items = dimensions.slice(1)
  
  return items.map((n, index) => {
    const item = Array.isArray(indicator) ? indicator[index] : indicator
    return {
      name: n.displayName || n.name,
      ...(typeof item === 'object' ? item : {max: item})
    }
  })
}

function createSeries({source}, {dataHelper}) {
  const rows = source.slice(1)
  const isHelperFunction = typeof dataHelper === 'function'
  const data = rows.map(row => {
    const item = isHelperFunction ? dataHelper(row) : dataHelper
    return {
      name: row[0],
      value: row.slice(1),
      ...item
    }
  })
  return {
    type: 'radar',
    data: data
  }
}

export default function ({data, settings}) {
  // 克隆数据
  const dataCopy = cloneDeep(data)
  
  // 转换成标准的列配置
  const standardColumns = columnsToStandard(dataCopy)
  
  // 获取私有配置的值
  const settingsValue = factory(props, settings)
  
  // 构建dataset
  const dataset = createDataset(standardColumns, dataCopy, settingsValue)
  
  // 构建指标
  const indicator = createIndicator(dataset, settingsValue)
  
  return {
    tooltip: {},
    radar: {
      indicator: indicator
    },
    series: createSeries(dataset, settingsValue)
  }
}
