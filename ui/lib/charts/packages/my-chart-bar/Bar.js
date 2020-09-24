import cartesian2d from '$ui/charts/utils/cartesian2d'

/**
 * 组件私有参数
 * @property {object} settings 柱状图配置参数
 * @property {string} [settings.direction=x] 排列方向，即类目在哪个轴上，可选：x、y
 * @property {string|object|array} [label] 数据项的标签设置，字符类型设置position， 对象与原生series.label设置一致
 * @property {string|object|array} [valueAxis] 值类型轴配置, 字符串设置名称，对象与echarts xAxis、yAxis配置项一致，数组和设置多个轴
 * @property {Object|String[]} [stack] 堆叠柱，如 ['name1', 'name2']  或  {'name': ['name1', 'name2']}
 * @property {boolean|number} [smooth=0.5] 线条平滑，只对折线图有效
 */
export const props = {
  // 排列方向，即类别在哪个轴上
  direction: {
    type: String,
    default: 'x',
    validator(val) {
      return ['x', 'y'].includes(val)
    }
  },
  // 数据项的标签设置，字符类型设置position， 对象与原生series.label设置一致
  label: [String, Object, Array],
  
  // 值类型轴配置
  valueAxis: [String, Object, Array],
  
  // 堆叠柱，如 ['name1', 'name2']  或  {'name': ['name1', 'name2']}
  stack: [Object, Array],
  
  // 改成线条显示的系列
  lines: [String, Array],
  
  // 线条平滑，只对折线图有效
  smooth: {
    type: [Boolean, Number],
    default: 0.5
  }
  
  
}


export default function (vm) {
  return cartesian2d(vm, 'bar', props)
}
