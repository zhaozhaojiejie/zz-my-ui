# Affix 图钉

将页面元素钉在可视范围。组件文档 <api-link href="components/sp-affix">spAffix</api-link>

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 代码演示

### 基础用法

最简单的用法

:::demo
```html
<template>
  <sp-affix :offset-top="80">
       <el-button type="primary">固定顶部 80px </el-button>
  </sp-affix>
</template>
<script>
import {spAffix} from '$ui'
export default {
  components: {
    spAffix
  }
}
</script>

```
:::

### 滚动容器

用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

:::demo
```html
<template>
  <div class="container" ref="container">
   <p v-for="n in 10" :key="`t-${n}`">占位文字</p>
    <sp-affix :offset-top="10" :offset-bottom="10" :target="getTarget">
         <el-button type="primary">固定顶部 和 底部 </el-button>
    </sp-affix>
    <p v-for="n in 10" :key="`b-${n}`">占位文字</p>
  </div>
</template>

<script>
import {spAffix} from '$ui'
export default {
  components: {
    spAffix
  },
  methods: {
    getTarget() {
      return this.$refs.container
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~$ui/styles/common/_var.scss";
.container {
  height: 400px;
  background: $--color-background;
  overflow: auto;

}
</style>

```
:::

注意：Affix 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 Affix 为绝对定位：

```html
<sp-affix :style="{ position: 'absolute', top: y, left: x}">
  ...
</sp-affix>
```
