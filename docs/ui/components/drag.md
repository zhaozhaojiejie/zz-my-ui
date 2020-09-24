# Drag 拖拽

## 何时使用

需要实现对DOM元素拖拽移动时， 组件文档 <api-link href="components/my-drag">MyDrag</api-link> 

## 代码示例

### 基础用法

:::demo
```html
<template>
  <div class="wrapper">
      <my-drag class="demo"></my-drag>
  </div>
</template>

<script>
import {MyDrag} from '$ui'
export default {
  components: {
    MyDrag
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 200px;
}

.demo {
  width: 80px;
  height: 80px;
  padding: 0;
  background: red;
}

</style>

```
:::

### 指定拖拽句柄

`handle` 支持选择器、元素对象、函数设置

:::demo
```html
<template>
  <div class="wrapper">
      <my-drag class="demo" handle=".el-card__header">
        <my-panel title="Title">内容内容内容内容</my-panel>
      </my-drag>
  </div>
</template>

<script>
import {MyDrag, MyPanel} from '$ui'
export default {
  components: {
    MyDrag,
    MyPanel
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 200px;
}


</style>

```
:::

### 限制拖拽方向

:::demo
```html
<template>
 
    <el-row>
      <el-col :span="12">
       <div class="wrapper">
          <my-drag class="demo" axis="h"">
            <my-panel title="Title">水平方向</my-panel>
          </my-drag>
       </div>
      </el-col>
      <el-col :span="12">
       <div class="wrapper">
          <my-drag class="demo" axis="v">
            <my-panel title="Title">垂直方向</my-panel>
          </my-drag>
         </div>
      </el-col>
    </el-row>

</template>

<script>
import {MyDrag, MyPanel} from '$ui'
export default {
  components: {
    MyDrag,
    MyPanel
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  height: 300px;
}


</style>

```
:::


### 锁定拖拽范围

`target` 支持选择器、元素对象、函数设置

:::demo
```html
<template>
  <div class="wrapper" id="target">
    <my-drag target="#target">
        <my-panel title="Title">锁定访问</my-panel>
    </my-drag>
  </div>
</template>

<script>
import {MyDrag, MyPanel} from '$ui'
export default {
  components: {
    MyDrag,
    MyPanel
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 300px;
  border:2px solid #0c5cb3;
}


</style>

```
:::

### 克隆与复原

:::demo
```html

<template>

   <my-drag clone revert append-body>
      <my-panel title="Title">克隆自己</my-panel>
   </my-drag>
   

</template>

<script>
import {MyDrag, MyPanel} from '$ui'
export default {
  components: {
    MyDrag,
    MyPanel
  }
}
</script>

```
:::


