# Number 数字

格式化数值的组件。
组件文档 <api-link href="components/my-number">MyNumber</api-link>

## 何时使用

常用在数据卡片中，用于突出展示某个业务数据。

## 代码示例

### 基础用法

:::demo
```html
<template>
 <my-number value="3234"></my-number>
</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
  }
}
</script>

<style lang="scss" scoped>
.my-number {
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
 <my-number value="null" default-value="0"></my-number>
</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
  }
}
</script>

<style lang="scss" scoped>
.my-number {
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
     <my-number value="3345" trend="up"></my-number>
     <my-number value="1234" trend="down"></my-number>
     <my-number value="2002" trend="-"></my-number>
 </div>

</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
  }
}
</script>

<style lang="scss" scoped>
.my-number {
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
     <my-number value="3345123" separator=","></my-number>
     <my-number value="3345123" separator=""></my-number>
     <my-number value="3345123" separator="-"></my-number>
 </div>

</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
  }
}
</script>

<style lang="scss" scoped>
.my-number {
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
     <my-number value="3345.2474914" :precision="1"></my-number>
     <my-number value="3345.2474914" :precision="2"></my-number>
     <my-number value="3345.2474914" :precision="3"></my-number>
 </div>

</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
  }
}
</script>

<style lang="scss" scoped>
.my-number {
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
     <my-number value="3345.2474914" :precision="2" prefix="￥" suffix="万"></my-number>
 </div>

</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
  }
}
</script>

<style lang="scss" scoped>
.my-number {
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
    <my-number value="0.23233322" percentage></my-number>
    <my-number value="0.23233322" percentage :precision="2"></my-number>
 </div>

</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
  }
}
</script>

<style lang="scss" scoped>
.my-number {
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
    <my-number value="12345"></my-number>
    <my-number value="12345" type="primary"></my-number>
    <my-number value="12345" type="success"></my-number>
    <my-number value="12345" type="warning"></my-number>
    <my-number value="12345" type="danger"></my-number>
    <my-number value="12345" type="info"></my-number>
 </div>

</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
  }
}
</script>

<style lang="scss" scoped>
.my-number {
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
    <my-number :value="value" count-up></my-number>
    <my-number :value="value" type="primary" :count-up="{startVal: 1000}"></my-number>
    <my-number :value="value" type="success" :count-up="{duration: 5}"></my-number>
 </div>

</template>

<script>
import {MyNumber} from '$ui'
export default {
  components: {
    MyNumber
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
.my-number {
 font-size: 20px;
 margin: 20px;
}
</style>
