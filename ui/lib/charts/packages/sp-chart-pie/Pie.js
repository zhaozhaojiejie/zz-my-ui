import factory from '$ui/charts/utils/factory'
import {columnsToStandard, createDataset} from '$ui/charts/utils/dataset'
import {createPieSeries} from '$ui/charts/utils/series'
import setExtend from '$ui/charts/utils/extend'
import {cloneDeep} from '$ui/utils/util'


const props = {
  // 中心点
  center: {
    type: Array,
    default() {
      return ['50%', '50%']
    }
  },
  
  // 饼图的半径
  radius: {
    type: [String, Number, Array],
    default() {
      return [0, '75%']
    }
  },
  // 图例
  legend: {
    type: [String, Object],
    default: 'horizontal',
    validator(val) {
      return ['horizontal', 'vertical'].includes(val) || typeof val === 'object'
    }
  },
  
  // 玫瑰图
  roseType: {
    type: [Boolean, String],
    default: false,
    validator(val) {
      return [true, false, 'radius', 'area'].includes(val)
    }
  },
  
  // 限制个数，超出的合并成其他
  limit: Number,
  
  // 层级 实现 多圆饼图, 二维数组
  level: Array,
  
  // 层级饼图的分隔大小（占比百分比）
  levelGap: {
    type: Number,
    default: 10
  }
  
}

function getLegend(legend) {
  if (legend === 'horizontal') {
    return {
      orient: 'horizontal'
    }
  } else if (legend === 'vertical') {
    return {
      orient: 'vertical',
      right: 0,
      top: 30
    }
  } else {
    return legend
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
  
  // 构建系列
  const series = createPieSeries({
    dimensions: dataset.dimensions,
    settings: settingsValue,
    source: dataset.source
  })
  
  const options = {
    tooltip: {},
    legend: getLegend(settingsValue.legend),
    series: series,
    dataset: dataset
  }
  setExtend(options, {})
  return options
}
