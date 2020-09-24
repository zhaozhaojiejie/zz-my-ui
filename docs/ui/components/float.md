#  Float 浮动布局组件

## 概述

基础布局组件，在需要对元素、容器进行左右排版时使用。
组件包含 <api-link href="components/my-float">MyFloat</api-link>  和 <api-link href="components/my-float-item">MyFloatItem</api-link> 两个组件

## 基本用法

:::demo
```html
<template>
  <my-float>
     <my-float-item>左边内容</my-float-item>
     <my-float-item float="right">右边内容</my-float-item>
  </my-float>
</template>

<script>
import {MyFloat, MyFloatItem} from '$ui'
export default {
  components: {
    MyFloat,
    MyFloatItem
  }
}
</script>

```
:::

## 高度适配父容器

通过 设置 `fit` 属性实现高度100%

:::demo 
```html
<template>
  <div class="wrapper">
    <my-float fit>
       <my-float-item class="left">左边内容</my-float-item>
       <my-float-item class="right" float="right">右边内容</my-float-item>
    </my-float>
  </div>
</template>

<script>
import {MyFloat, MyFloatItem} from '$ui'
export default {
  components: {
    MyFloat,
    MyFloatItem
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 200px;
    min-height:100%;
  }
  
  .left {
    background: #3e999f;
  }
  
  .right {
     background: #c2e7b0;
  }
</style>

```
:::

## 左右翻转

通过 设置 `reverse` 属性实现左右翻转

:::demo 
```html
<template>
  <div class="wrapper">
    <my-float fit reverse>
       <my-float-item class="left">左边内容</my-float-item>
       <my-float-item class="right" float="right">右边内容</my-float-item>
    </my-float>
  </div>
</template>

<script>
import {MyFloat, MyFloatItem} from '$ui'
export default {
  components: {
    MyFloat,
    MyFloatItem
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 200px;
    min-height:100%;
  }
  
  .left {
    background: #3e999f;
  }
  
  .right {
     background: #c2e7b0;
  }
</style>

```
:::

