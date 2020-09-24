<template>
  <Demo toggleText="安装命令">
    <div class="page-loader">
      <ClientOnly>
        <component v-if="component" :is="component"></component>
        <div class="page-loader__loading" v-if="!component">正在努力加载中...</div>
      </ClientOnly>
    </div>
    <template v-slot:desc>
      npm run page {{page}} {{local}}
    </template>
  </Demo>
</template>

<script>
  export default {
    name: 'PageLoader',
    props: {
      page: String,
      local: String
    },
    data() {
      return {
        component: null
      }
    },
    mounted() {
      import(`$ui/pages/${this.page}.vue`).then(res => {
        this.component = res.default
      })
    }
  }
</script>

<style scoped>

</style>
