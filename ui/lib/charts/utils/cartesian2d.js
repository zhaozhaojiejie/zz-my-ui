import {cloneDeep} from '$ui/utils/util'
import {columnsToStandard, createDataset} from '$ui/charts/utils/dataset'
import factory from '$ui/charts/utils/factory'
import {createAxis} from '$ui/charts/utils/axis'
import {createSeries} from '$ui/charts/utils/series'
import setExtend from '$ui/charts/utils/extend'

/**
 * 构建二维的直角坐标系图表options，line 或 bar
 * @param data
 * @param settings
 * @param options
 * @param type
 * @param props
 */
export default function ({data, settings}, type, props) {
  // 克隆数据
  const dataCopy = cloneDeep(data)

  // 转换成标准的列配置
  const standardColumns = columnsToStandard(dataCopy)

  // 获取私有配置的值
  const settingsValue = factory(props, settings)

  // 构建dataset
  const dataset = createDataset(standardColumns, dataCopy, settingsValue)

  // 构建轴配置
  const axis = createAxis(settingsValue, dataset)

  // 构建系列
  const series = createSeries({
    type: type,
    layout: dataCopy.layout,
    dimensions: dataset.dimensions,
    settings: settingsValue
  })

  // 原生 option
  const options = {
    tooltip: {},
    legend: {},
    ...axis,
    series: series,
    dataset: dataset
  }

  // 扩展配置
  setExtend(options, {
    series: {
      smooth: settingsValue.smooth
    },
    xAxis: {
      boundaryGap: true,
      axisTick: {
        alignWithLabel: true
      }
    },
    yAxis: {
      boundaryGap: true,
      axisTick: {
        alignWithLabel: true
      }
    }
  })

  return options
}
