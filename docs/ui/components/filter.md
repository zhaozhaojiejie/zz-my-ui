# Filter 筛选条件表单

筛选条件表单是从`spForm`派生出来，支持`spForm`的全部特性。并提供一个特有用于排版的`columns`参数，支持响应式设置。

文档 <api-link href="components/sp-filter">spFilter</api-link> 

## 代码示例

### 基础用法

:::demo
```html
<template>
  <sp-filter label-width="60px" @submit="handleSubmit">
    <sp-input name="keyword" label="关键字" placeholder="请输入关键字"></sp-input>
    <sp-select name="category" label="类别" :options="categories"></sp-select>
  </sp-filter>
</template>

<script>

  export default {
    data() {
      return {
        categories: [
          {label: '选项一', value: 1},
          {label: '选项二', value: 2},
          {label: '选项三', value: 3}
        ],
        model: {}
      }
    },
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      }
    }
  }
</script>
```
:::

### 可展开

:::demo
```html
<template>
  <sp-filter label-width="60px" collapsible @submit="handleSubmit">
    <sp-input name="keyword" label="关键字" placeholder="请输入关键字"></sp-input>
    <sp-select name="category" label="类别" :options="categories"></sp-select>
    <sp-input label="标题" name="title" collapsible></sp-input>
    <sp-range label="范围" mode="date" name="range" collapsible></sp-range>
  </sp-filter>
</template>

<script>

  export default {
    data() {
      return {
        categories: [
          {label: '选项一', value: 1},
          {label: '选项二', value: 2},
          {label: '选项三', value: 3}
        ],
        model: {}
      }
    },
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      }
    }
  }
</script>

```
:::
