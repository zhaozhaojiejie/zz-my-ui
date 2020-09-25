# Editor 富文本编辑器

基于 `CKEditor5`实现的富文本编辑器, 文档 <api-link href="components/sp-editor">spEditor</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <sp-form @submit="handleSubmit">
    <sp-editor name="content"></sp-editor>
  </sp-form>
</template>

<script>
  export default {
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      }
    }
  }
</script>

```
:::

### 固定高度

:::demo
```html
<template>
  <sp-form @submit="handleSubmit">
    <sp-editor name="content" :height="300"></sp-editor>
  </sp-form>
</template>

<script>
  export default {
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      }
    }
  }
</script>


```
:::

### 定义工具条

:::demo
```html
<template>
  <sp-form @submit="handleSubmit" label-width="80px">
    <sp-editor name="content1" label="默认经典"></sp-editor>
    <sp-editor name="content2" label="简约工具" toolbar="simple"></sp-editor>
    <sp-editor name="content3" label="全功能" toolbar="all"></sp-editor>
    <sp-editor name="content4"  label="自定义" :toolbar="['bold', 'italic']"></sp-editor>
  </sp-form>
</template>

<script>
  export default {
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      }
    }
  }
</script>


```
:::
