# Description 描述数据

常用卡片 和 详情页中.

组件文档 <api-link href="components/my-description">MyDescription</api-link>

## 基础用法

:::demo
```html
<template>
  <my-description title="标题">数据项内容</my-description>
</template>

```
:::

## 标题区宽度和对齐方式

:::demo
```html
<template>
  <el-row>
    <el-col :span="8">
      <my-description title="标题左对齐" :width="100">数据项内容</my-description>  
    </el-col>
    <el-col :span="8">
      <my-description title="标题居中" :width="100" align="center">数据项内容</my-description> 
    </el-col>
    <el-col :span="8">
      <my-description title="标题右对齐" :width="100" align="right">数据项内容</my-description> 
    </el-col>
  </el-row>
 
</template>

```
:::

## 标题在顶部

:::demo
```html
<template>
  <el-row>
    <el-col :span="8">
      <my-description title="标题左对齐" :width="100" top>
        <my-title :level="3">253个</my-title>
      </my-description>  
    </el-col>
    <el-col :span="8">
      <my-description title="标题居中" :width="100" align="center" top>
       <my-title :level="3">253个</my-title>
     </my-description> 
    </el-col>
    <el-col :span="8">
      <my-description title="标题右对齐" :width="100" align="right" top>
       <my-title :level="3">253个</my-title>
      </my-description> 
    </el-col>
  </el-row>
 
</template>

```
:::

## 定义标题
:::demo
```html
<template>
  <el-row>
    <el-col :span="12">
      <my-description title="标题左对齐" :width="100">
       <el-image slot="title" src="/my/img/avatar.jpeg"></el-image>
      文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
      </my-description>  
    </el-col>
    <el-col :span="12">
      <my-description title="标题居中" :width="100" top>
       <el-image slot="title" src="/my/img/avatar.jpeg" fit="cover" style="height:100px"></el-image>
      文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
     </my-description> 
    </el-col>
  </el-row>

</template>
<script>
export default {

}
</script>
```
:::
