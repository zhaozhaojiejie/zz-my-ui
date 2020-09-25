# Number 数字

格式化数值的组件。
组件文档 <api-link href="components/sp-number">spNumber</api-link>

## 何时使用

常用在数据卡片中，用于突出展示某个业务数据。

## 代码示例

### 基础用法

:::demo
```html
<template>
 <sp-number value="3234"></sp-number>
</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>

```
:::

### 设置默认值

如果值无法转换成数字类型，就会用默认值代替

:::demo
```html
<template>
 <sp-number value="null" default-value="0"></sp-number>
</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>

```
:::

### 显示趋势

:::demo
```html
<template>
 <div>
     <sp-number value="3345" trend="up"></sp-number>
     <sp-number value="1234" trend="down"></sp-number>
     <sp-number value="2002" trend="-"></sp-number>
 </div>

</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>

```
:::

### 分隔符


:::demo
```html
<template>
 <div>
     <sp-number value="3345123" separator=","></sp-number>
     <sp-number value="3345123" separator=""></sp-number>
     <sp-number value="3345123" separator="-"></sp-number>
 </div>

</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>

```
:::

### 精度

:::demo
```html
<template>
 <div>
     <sp-number value="3345.2474914" :precision="1"></sp-number>
     <sp-number value="3345.2474914" :precision="2"></sp-number>
     <sp-number value="3345.2474914" :precision="3"></sp-number>
 </div>

</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>

```
:::

### 前缀后缀

:::demo
```html
<template>
 <div>
     <sp-number value="3345.2474914" :precision="2" prefix="￥" suffix="万"></sp-number>
 </div>

</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>

```
:::

### 百分比显示

:::demo
```html
<template>
 <div>
    <sp-number value="0.23233322" percentage></sp-number>
    <sp-number value="0.23233322" percentage :precision="2"></sp-number>
 </div>

</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>

```
:::

### 颜色

:::demo
```html
<template>
 <div>
    <sp-number value="12345"></sp-number>
    <sp-number value="12345" type="primary"></sp-number>
    <sp-number value="12345" type="success"></sp-number>
    <sp-number value="12345" type="warning"></sp-number>
    <sp-number value="12345" type="danger"></sp-number>
    <sp-number value="12345" type="info"></sp-number>
 </div>

</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>

```
:::

### 动效

:::demo
```html
<template>
 <div>
   <el-button @click="start">开始动画</el-button>
    <sp-number :value="value" count-up></sp-number>
    <sp-number :value="value" type="primary" :count-up="{startVal: 1000}"></sp-number>
    <sp-number :value="value" type="success" :count-up="{duration: 5}"></sp-number>
 </div>

</template>

<script>
import {spNumber} from '$ui'
export default {
  components: {
    spNumber
  },
  data() {
    return {
      value: 12343
    }
  },
  methods: {
    start() {
      this.value = Math.random()* 10000
    }
  }
}
</script>

<style lang="scss" scoped>
.sp-number {
 font-size: 20px;
 margin: 20px;
}
</style>
