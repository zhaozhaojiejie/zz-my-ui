<template>
  <div class="sp-micro-app">
    <div v-if="matchApp" :id="id" class="sp-micro-app__content">
      <div class="sp-micro-app__loading">
        <slot name="loading">
          <sp-spin loading></sp-spin>
        </slot>
      </div>
    </div>
    <slot v-else name="404">
      <sp-result status="404"
                 title="404"
                 subtitle="抱歉！您访问的页面不存在。">
      </sp-result>
    </slot>
  </div>
</template>

<script>
  /**
   * 微应用容器
   * @module $ui/components/sp-micro-app
   */

  /**
   * 插槽
   * @member slots
   * @property {string} loading 定义加载中内容
   * @property {string} [404] 定义404内容
   */

  export default {
    name: 'spMicroApp',
    inject: {
      // 主应用根组件实例
      masterApp: {
        default: null
      }
    },
    props: {
      id: {
        type: String,
        default: 'sp-micro-app'
      }
    },
    computed: {
      // 当前匹配的子应用
      matchApp() {
        return this.masterApp && this.masterApp.matchApp
      }
    }
  }
</script>

