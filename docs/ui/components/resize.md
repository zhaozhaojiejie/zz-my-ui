# Resize 缩放

## 何时使用

通过鼠标拖拽右边或底边的边框到所需的宽度或高度。
组件文档 <api-link href="components/my-resize">MyResize</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <my-resize class="box"></my-resize>
</template>

<script>
import {MyResize} from '$ui'
export default {
  components: {
    MyResize
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 200px;
  width: 300px;
  background: #d9f7be;
}
</style>

```
:::

### 指定缩放方向

:::demo
```html
<template>
<el-row>
  <el-col :span="12">
    <my-resize class="box" axis="v">垂直方向</my-resize>
  </el-col>
  <el-col :span="12">
     <my-resize class="box" axis="h">水平方向</my-resize>
  </el-col>
</el-row>

</template>

<script>
import {MyResize} from '$ui'
export default {
  components: {
    MyResize
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 200px;
  width: 300px;
  background: #d9f7be;
}
</style>

```
:::

### 辅助 和 动画 

:::demo
```html
<template>
  <my-resize class="box" helper animate></my-resize>
</template>

<script>
import {MyResize} from '$ui'
export default {
  components: {
    MyResize
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 200px;
  width: 300px;
  background: #d9f7be;
}
</style>

```
:::


### 最大值 与 最小值

:::demo
```html
<template>
  <my-resize class="box" helper animate 
             :min-width="100" 
             :max-width="300" 
             :min-height="100" 
             :max-height="300"></my-resize>
</template>

<script>
import {MyResize} from '$ui'
export default {
  components: {
    MyResize
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 200px;
  width: 200px;
  background: #d9f7be;
}
</style>

```
:::
