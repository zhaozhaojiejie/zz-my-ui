# Capture 抓屏工具

抓屏工具 文档 <api-link href="components/sp-capture"> spCapture </api-link>

## 基础用法

:::demo(基本用法)

```html
<template>
  <div>
    <h1> hello world </h1>
    <p>capture控件默认以document.body作为目标dom进行截图</p>
    <sp-capture></sp-capture>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  
</style>

```

:::

## 自定义抓屏

- capture 通过定义 “before-capture”参数（返回promise）,可以进行截图前的预处理；
- capture 提供 “on-capture” / "on-output" / "on-failed" 三个事件；
- capture 通过 “dom”属性 可以自定义抓取dom对象；
- capture 可以通过配置 width / height 控制输出图片 宽高；
- capture 可以通过 options 属性 配置 “html2canvas” 的功能；
  
:::demo(自定义用法)

```html
<template>
  <div>
    <div  class="warp">
      <ul ref="target">
        <li v-for="i in 60" :key="i">{{i}}</li>
      </ul>
    </div>
    <sp-capture :dom="targetDom" 
      @on-capture="startCapHandle"
      :before-capture="beforeCaptureHandle"
      @on-output="successHandle" :options="options">
      <el-button slot="button" type="primary" :loading="loading" :disabled="loading">列表截图</el-button>
    </sp-capture>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        targetDom: null,
        startTime: null,
        loading: false,
        options: {}
      }
    },
    methods: {
      beforeCaptureHandle() {
        let cloneDom = this.$refs.target.cloneNode(true)
        cloneDom.style.width = this.$refs.target.clientWidth + 'px'
        cloneDom.style.height = this.$refs.target.clientHeight + 'px'
        cloneDom.style.position = 'fixed'
        cloneDom.style.left = '0'
        cloneDom.style.top = '0'
        cloneDom.style.zIndex = 20
        cloneDom.style.transform = 'translateX(-200%)'

        document.body.appendChild(cloneDom)
        this.targetDom = cloneDom
        this.options = {
          width: this.targetDom.clientWidth,
          height: this.targetDom.clientHeight,
          scrollY: 0,
          scrollX: 0
        }
        return Promise.resolve()
      },
      startCapHandle() {
        this.loading = true
      },
      successHandle() {
        this.loading = false
        document.body.removeChild(this.targetDom)
        this.targetDom = null
      }
    }
  }
</script>

<style lang="scss" scoped>
.warp{
  width: 200px;
  height: 200px;
  border: 1px solid red;
  overflow: auto;
}
</style>

```

:::