# Skeleton 骨架屏
在需要等待加载内容的位置提供一个占位图形组合。
<api-link href="components/my-skeleton">MySkeleton</api-link>

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只适合用在第一次加载数据的场景。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码演示

### 基本用法

最简单的占位效果。

:::demo
```html
<template>
  <my-skeleton loading></my-skeleton>
</template>

<script>
import {MySkeleton} from '$ui'
export default {
  components: {
    MySkeleton
  }
}
</script>

```
:::


### 复制的组合

最简单的占位效果。

:::demo
```html
<template>
  <my-skeleton avatar :paragraph="{rows:4}" loading></my-skeleton>
</template>

<script>
import {MySkeleton} from '$ui'
export default {
  components: {
    MySkeleton
  }
}
</script>

```
:::


### 动画效果

:::demo
```html
<template>
  <my-skeleton avatar active loading></my-skeleton>
</template>

<script>
import {MySkeleton} from '$ui'
export default {
  components: {
    MySkeleton
  }
}
</script>

```
:::

### 包含子组件

加载占位图包含子组件。

:::demo
```html
<template>
  <div>
    <my-skeleton active :loading="loading">
      <my-title level="3">前端框架 MyWeb 4.0</my-title>
      <my-paragraph>MyWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。</my-paragraph>
    </my-skeleton>
    <el-button @click="show" style="margin-top: 20px">显示骨架屏</el-button>
  </div>
</template>

<script>
import {MySkeleton, MyTitle, MyParagraph} from '$ui'
export default {
  components: {
    MySkeleton,
    MyTitle,
    MyParagraph
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    show() {
      this.loading = true
      setTimeout(()=>{
        this.loading = false
      }, 3000)
    }
  }
}
</script>

```
:::
