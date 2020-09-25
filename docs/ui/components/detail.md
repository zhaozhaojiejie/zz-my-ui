# Detail 数据详情描述列表

成组展示多个只读字段，包含两个组件：
<api-link href="components/sp-detail">spDetail</api-link>、
<api-link href="components/sp-detail-item">spDetailItem</api-link>

## 何时使用

常见于详情页的信息展示。

## 代码示例

:::warning
该组件的时用Table实现，样式与Docs的表格有冲突, table-origin 的作用是清除docs的table样式
:::

### 基础用法

:::demo
```html
<template>
  <div class="table-origin">
   <sp-detail title="用户信息">
      <sp-detail-item label="名称">张三</sp-detail-item>
      <sp-detail-item label="电话">020-88888888</sp-detail-item>
      <sp-detail-item label="籍贯">广东 广州</sp-detail-item>
      <sp-detail-item label="备注">无</sp-detail-item>
      <sp-detail-item label="地址">广东省广州市越秀区东风东路</sp-detail-item>
   </sp-detail>
   </div>
</template>

<script>
import {spDetail, spDetailItem} from '$ui'
export default {
  components: {
    spDetail,
    spDetailItem
  }
}
</script>

```
:::

### 带边框

带边框和背景颜色列表。

:::demo
```html
<template>
  <div class="table-origin">
     <sp-detail title="用户信息" border>
        <sp-detail-item label="名称">张三</sp-detail-item>
        <sp-detail-item label="电话">020-88888888</sp-detail-item>
        <sp-detail-item label="籍贯">广东 广州</sp-detail-item>
        <sp-detail-item label="备注">无</sp-detail-item>
        <sp-detail-item label="地址">广东省广州市越秀区东风东路</sp-detail-item>
     </sp-detail>
   </div>
</template>

<script>
import {spDetail, spDetailItem} from '$ui'
export default {
  components: {
    spDetail,
    spDetailItem
  }
}
</script>

```
:::

### 自定义尺寸

自定义尺寸，适应在各种容器中展示。

:::demo
```html
<template>
  <div class="table-origin">
    <el-radio-group v-model="size" style="margin: 20px 0;">
       <el-radio label="default">default</el-radio>
       <el-radio label="middle">middle</el-radio>
       <el-radio label="small">small</el-radio>
     </el-radio-group>
     <sp-detail title="用户信息" border :size="size">
        <sp-detail-item label="名称">张三</sp-detail-item>
        <sp-detail-item label="电话">020-88888888</sp-detail-item>
        <sp-detail-item label="籍贯">广东 广州</sp-detail-item>
        <sp-detail-item label="备注">无</sp-detail-item>
        <sp-detail-item label="地址">广东省广州市越秀区东风东路</sp-detail-item>
     </sp-detail>
   </div>
</template>

<script>
import {spDetail, spDetailItem} from '$ui'
export default {
  components: {
    spDetail,
    spDetailItem
  },
  data() {
    return {
      size: 'default'
    }
  }
}
</script>

```
:::


### 垂直布局

垂直带边框和背景颜色的列表。

:::demo
```html
<template>
  <div class="table-origin">
     <sp-detail title="用户信息" border layout="vertical">
        <sp-detail-item label="名称">张三</sp-detail-item>
        <sp-detail-item label="电话">020-88888888</sp-detail-item>
        <sp-detail-item label="籍贯">广东 广州</sp-detail-item>
        <sp-detail-item label="备注">无</sp-detail-item>
        <sp-detail-item label="地址">广东省广州市越秀区东风东路</sp-detail-item>
     </sp-detail>
   </div>
</template>

<script>
import {spDetail, spDetailItem} from '$ui'
export default {
  components: {
    spDetail,
    spDetailItem
  }
}
</script>

```
:::

### 对齐方式

:::demo
```html
<template>
  <div class="table-origin">
     <sp-detail title="用户信息" border label-align="right">
        <sp-detail-item label="名称">张三</sp-detail-item>
        <sp-detail-item label="电话">020-88888888</sp-detail-item>
        <sp-detail-item label="籍贯">广东 广州</sp-detail-item>
        <sp-detail-item label="备注">无</sp-detail-item>
        <sp-detail-item label="地址">广东省广州市越秀区东风东路</sp-detail-item>
     </sp-detail>
   </div>
</template>

<script>
import {spDetail, spDetailItem} from '$ui'
export default {
  components: {
    spDetail,
    spDetailItem
  }
}
</script>

```
:::

