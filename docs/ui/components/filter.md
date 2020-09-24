# Filter 筛选条件表单

筛选条件表单是从`MyForm`派生出来，支持`MyForm`的全部特性。并提供一个特有用于排版的`columns`参数，支持响应式设置。

文档 <api-link href="components/my-filter">MyFilter</api-link> 

## 代码示例

### 基础用法

:::demo
```html
<template>
  <my-filter label-width="60px" @submit="handleSubmit">
    <my-input name="keyword" label="关键字" placeholder="请输入关键字"></my-input>
    <my-select name="category" label="类别" :options="categories"></my-select>
  </my-filter>
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
  <my-filter label-width="60px" collapsible @submit="handleSubmit">
    <my-input name="keyword" label="关键字" placeholder="请输入关键字"></my-input>
    <my-select name="category" label="类别" :options="categories"></my-select>
    <my-input label="标题" name="title" collapsible></my-input>
    <my-range label="范围" mode="date" name="range" collapsible></my-range>
  </my-filter>
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
