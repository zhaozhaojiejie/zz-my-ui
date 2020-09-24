import factory from '$ui/charts/utils/factory'
import {columnsToStandard, createDataset} from '$ui/charts/utils/dataset'
import {cloneDeep} from '$ui/utils/util'

const props = {
  dataHelper: {
    type: [Object, Function]
  },
  autoColor: {
    type: Boolean,
    default: true
  }
}

function createData({source}, {dataHelper}) {
  const rows = source.slice(1)
  const isHelperFunction = typeof dataHelper === 'function'
  return rows.map(row => {
    const item = isHelperFunction ? dataHelper(row) : dataHelper
    return {
      name: row[0],
      value: row[1] || Math.random(),
      ...item
    }
  })
}

function createTextStyle({autoColor}) {
  if (!autoColor) return null
  return {
    normal: {
      color: function () {
        // Random color
        return 'rgb(' + [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160)
        ].join(',') + ')';
      }
    },
    emphasis: {
      fontWeight: 'bold'
    }
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
  
  return {
    series: [{
      type: 'wordCloud',
      textStyle: createTextStyle(settingsValue),
      data: createData(dataset, settingsValue)
    }]
  }
}
