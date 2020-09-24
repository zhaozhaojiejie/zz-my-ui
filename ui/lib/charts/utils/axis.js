import {SERIES_LABEL_POSITION} from '$ui/charts/utils/constant'
import isObject from 'lodash/isObject'
import {getLabelFormatter} from './util'


/**
 * 构建 坐标轴配置
 * @param direction
 * @param valueAxis
 * @param dimensions
 * @return {{yAxis: *, xAxis: *}}
 */
export function createAxis({direction, valueAxis}, {dimensions}) {
  
  // 默认维度的第一个是放置在类别轴
  const categoryAxis = dimensions[0] ? [{type: 'category'}] : undefined
  
  // 默认维度第二个开始是放置在值轴
  const defaultValueAxis = dimensions[1] || {}
  
  // 用户配置的值轴，支持多个值轴，最多只有2个
  const configValueAxis = valueAxis ? [].concat(valueAxis) : []
  
  // 用来存放最终的值轴配置
  let mergeValueAxis = [{type: 'value', axisLabel: getLabelFormatter(defaultValueAxis)}]
  
  // 用户配置了值轴
  if (configValueAxis.length) {
    // 用户配置与自动按维度生成的值轴合并
    mergeValueAxis = configValueAxis.map((item, index) => {
      // 用户配置的值轴，可以是字符串、对象、数组
      const axisOptions = isObject(item) ? item : {name: item}
      // 值轴的名称找到对应的维度配置
      const dimension = dimensions.find(n => [n.name, n.displayName].includes(axisOptions.name)) || {}
      // 用户配置的优先
      return {
        type: 'value',
        position: SERIES_LABEL_POSITION[direction][index],
        axisLabel: getLabelFormatter(dimension),
        ...axisOptions,
        // 兼容 name 和 displayName的设置
        name: dimension.displayName || dimension.name || axisOptions.name
      }
    })
  }
  // 按排列方向构建 x、y轴配置
  const isXCategory = direction === 'x'
  return {
    xAxis: isXCategory ? categoryAxis : mergeValueAxis,
    yAxis: !isXCategory ? categoryAxis : mergeValueAxis
  }
}

