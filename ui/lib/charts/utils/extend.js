import set from 'lodash/set'
import merge from 'lodash/merge'
import isObject from 'lodash/isObject'

/**
 * 扩展原生ECharts option 选项函数
 * @param options
 * @param extend
 */
export default function (options, extend) {
  Object.entries(extend).forEach(([key, value]) => {
    // 按路径设置
    if (key.includes('.')) {
      set(options, key, value)
      // 函数设置
    } else if (typeof value === 'function') {
      options[key] = value(options[key])
    } else if (value === null) {
      options[key] = value
    } else {
      const attrs = options[key]
      // 设置数组中各项
      if (Array.isArray(attrs) && isObject(value)) {
        attrs.forEach(attr => {
          merge(attr, value)
        })
      } else if (isObject(attrs)) {
        merge(attrs, value)
      } else {
        options[key] = value
      }
    }
  })
}


