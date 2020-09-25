# Fixed 定位布局组件

## 概述

定位布局组件。头部、底部可固定位置，不跟随滚动条移动。组件文档 <api-link href="components/sp-fixed">spFixed</api-link> 

## 基本用法

固定头部

:::demo
```html
<template>
   <sp-fixed>
      <template v-slot:header>
       <div class="header">Header</div>
     </template>
    
      <div class="body">
         <p v-for="n in 30" :key="n">占位文字 {{n}}</p>
      </div>

   </sp-fixed>
</template>

<script>
import {spFixed} from '$ui'
export default {
  components: {
    spFixed
  }
}
</script>

<style lang="scss" scoped>


.sp-fixed {
  height: 400px;
  min-height: 100%;
  background: #ddd;
}

.header {
    height: 60px;
    background: #0a51a3;
    box-sizing: border-box;
    padding: 20px;
    color: #fff;
}
.body {
    padding: 0 20px;
}
</style>

```
:::


## 固定头部和底部

:::demo
```html
<template>
   <sp-fixed>
      <template v-slot:header>
       <div class="header">Header</div>
     </template>

      <div class="body">
         <p v-for="n in 30" :key="n">占位文字 {{n}}</p>
      </div>
      
      <template v-slot:footer>
        <div class="footer">Footer</div>
     </template>

   </sp-fixed>
</template>

<script>
import {spFixed} from '$ui'
export default {
  components: {
    spFixed
  }
}
</script>

<style lang="scss" scoped>

.sp-fixed {
  height: 400px;
  min-height: 100%;
  background: #ddd;
}

.header {
    height: 60px;
    background: #0a51a3;
    box-sizing: border-box;
    padding: 20px;
    color: #fff;
}
.body {
    padding: 0 20px;
}
.footer {
    height: 40px;
    background: #999;
    box-sizing: border-box;
    padding: 10px;
}
</style>

```
:::

