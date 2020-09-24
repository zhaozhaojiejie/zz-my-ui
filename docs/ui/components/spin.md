# Spin 加载中

用于页面和区块的加载中状态。
<api-link href="components/my-spin">my-spin</api-link> 文档

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

### 基础用法

一个简单的 loading 状态。

:::demo
```html
<template>
  <my-spin loading></my-spin>
</template>

<script>
import {MySpin} from '$ui'
export default {
  components: {
    MySpin
  }
}
</script>

```
:::

### 各种尺寸

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

:::demo
```html
<template>
 <div>
     <my-spin size="small" loading></my-spin>
     <my-spin loading></my-spin>
     <my-spin size="large" loading></my-spin>
 </div>

</template>

<script>
import {MySpin} from '$ui'
export default {
  components: {
    MySpin
  }
}
</script>

<style lang="scss" scoped>
.my-spin {
  margin-right: 20px;
}
</style>

```
:::

### 容器

放入一个容器中。

:::demo
```html
<template>
  <div class="container">
      <my-spin loading fit></my-spin>
  </div>

</template>

<script>
import {MySpin} from '$ui'
export default {
  components: {
    MySpin
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 200px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
</style>

```
:::


### 卡片加载中

可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

:::demo
```html
<template>
  <my-spin loading>
    <my-panel title="标题">
      占位内容
    </my-panel>
  </my-spin>
</template>

<script>
import {MySpin, MyPanel} from '$ui'
export default {
  components: {
    MySpin,
    MyPanel
  }
}
</script>

```
:::

### 自定义描述文案

:::demo
```html
<template>
  <my-spin loading tip="正在努力加载...">
    <my-panel title="标题">
      占位内容
    </my-panel>
  </my-spin>
</template>

<script>
import {MySpin, MyPanel} from '$ui'
export default {
  components: {
    MySpin,
    MyPanel
  }
}
</script>

```
:::

### 适配父容器

:::demo
```html
<template>
  <div class="container">
    <my-spin loading fit tip="loading...">
      <my-panel title="标题" fit>
        占位内容
      </my-panel>
    </my-spin>
  </div>
</template>

<script>
import {MySpin, MyPanel} from '$ui'
export default {
  components: {
    MySpin,
    MyPanel
  }
}
</script>


<style lang="scss" scoped>
.container {
  height: 200px;
}
</style>

```
:::

