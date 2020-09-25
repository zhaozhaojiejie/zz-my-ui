#  Float 浮动布局组件

## 概述

基础布局组件，在需要对元素、容器进行左右排版时使用。
组件包含 <api-link href="components/sp-float">spFloat</api-link>  和 <api-link href="components/sp-float-item">spFloatItem</api-link> 两个组件

## 基本用法

:::demo
```html
<template>
  <sp-float>
     <sp-float-item>左边内容</sp-float-item>
     <sp-float-item float="right">右边内容</sp-float-item>
  </sp-float>
</template>

<script>
import {spFloat, spFloatItem} from '$ui'
export default {
  components: {
    spFloat,
    spFloatItem
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
    <sp-float fit>
       <sp-float-item class="left">左边内容</sp-float-item>
       <sp-float-item class="right" float="right">右边内容</sp-float-item>
    </sp-float>
  </div>
</template>

<script>
import {spFloat, spFloatItem} from '$ui'
export default {
  components: {
    spFloat,
    spFloatItem
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
    <sp-float fit reverse>
       <sp-float-item class="left">左边内容</sp-float-item>
       <sp-float-item class="right" float="right">右边内容</sp-float-item>
    </sp-float>
  </div>
</template>

<script>
import {spFloat, spFloatItem} from '$ui'
export default {
  components: {
    spFloat,
    spFloatItem
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

