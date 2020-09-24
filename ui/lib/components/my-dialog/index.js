import Vue from 'vue'
import {install} from '$ui/utils/helper'
import Module from './src/Dialog'

/**
 * 创建窗体服务函数
 * @param {Object} options MyDialog 组件参数
 * @param {VNode|string} vnode 虚拟DOM
 * @return {*}
 */
Module.create = function (options, vnode) {
  const vm = new Vue({
    render(h) {
      return h(Module, {
        ref: 'dialog',
        props: options
      }, [vnode])
    }
  })
  vm.$mount()
  return vm.$refs.dialog
}


export default install(Module)
