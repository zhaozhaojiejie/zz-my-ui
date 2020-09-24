import Vue from 'vue'

/**
 * 私有图表的参数验证处理
 * @param props
 * @param settings
 * @return {Object}
 */
export default function (props, settings = {}) {
  const Component = Vue.extend({
    props
  })
  const vm = new Component({
    propsData: settings
  })
  return vm.$props
}
