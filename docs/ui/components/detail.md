# Detail 数据详情描述列表

成组展示多个只读字段，包含两个组件：
<api-link href="components/my-detail">MyDetail</api-link>、
<api-link href="components/my-detail-item">MyDetailItem</api-link>

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
   <my-detail title="用户信息">
      <my-detail-item label="名称">张三</my-detail-item>
      <my-detail-item label="电话">020-88888888</my-detail-item>
      <my-detail-item label="籍贯">广东 广州</my-detail-item>
      <my-detail-item label="备注">无</my-detail-item>
      <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
   </my-detail>
   </div>
</template>

<script>
import {MyDetail, MyDetailItem} from '$ui'
export default {
  components: {
    MyDetail,
    MyDetailItem
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
     <my-detail title="用户信息" border>
        <my-detail-item label="名称">张三</my-detail-item>
        <my-detail-item label="电话">020-88888888</my-detail-item>
        <my-detail-item label="籍贯">广东 广州</my-detail-item>
        <my-detail-item label="备注">无</my-detail-item>
        <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
     </my-detail>
   </div>
</template>

<script>
import {MyDetail, MyDetailItem} from '$ui'
export default {
  components: {
    MyDetail,
    MyDetailItem
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
     <my-detail title="用户信息" border :size="size">
        <my-detail-item label="名称">张三</my-detail-item>
        <my-detail-item label="电话">020-88888888</my-detail-item>
        <my-detail-item label="籍贯">广东 广州</my-detail-item>
        <my-detail-item label="备注">无</my-detail-item>
        <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
     </my-detail>
   </div>
</template>

<script>
import {MyDetail, MyDetailItem} from '$ui'
export default {
  components: {
    MyDetail,
    MyDetailItem
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
     <my-detail title="用户信息" border layout="vertical">
        <my-detail-item label="名称">张三</my-detail-item>
        <my-detail-item label="电话">020-88888888</my-detail-item>
        <my-detail-item label="籍贯">广东 广州</my-detail-item>
        <my-detail-item label="备注">无</my-detail-item>
        <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
     </my-detail>
   </div>
</template>

<script>
import {MyDetail, MyDetailItem} from '$ui'
export default {
  components: {
    MyDetail,
    MyDetailItem
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
     <my-detail title="用户信息" border label-align="right">
        <my-detail-item label="名称">张三</my-detail-item>
        <my-detail-item label="电话">020-88888888</my-detail-item>
        <my-detail-item label="籍贯">广东 广州</my-detail-item>
        <my-detail-item label="备注">无</my-detail-item>
        <my-detail-item label="地址">广东省广州市越秀区东风东路</my-detail-item>
     </my-detail>
   </div>
</template>

<script>
import {MyDetail, MyDetailItem} from '$ui'
export default {
  components: {
    MyDetail,
    MyDetailItem
  }
}
</script>

```
:::

