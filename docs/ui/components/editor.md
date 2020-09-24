# Editor 富文本编辑器

基于 `CKEditor5`实现的富文本编辑器, 文档 <api-link href="components/my-editor">MyEditor</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <my-form @submit="handleSubmit">
    <my-editor name="content"></my-editor>
  </my-form>
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
  <my-form @submit="handleSubmit">
    <my-editor name="content" :height="300"></my-editor>
  </my-form>
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
  <my-form @submit="handleSubmit" label-width="80px">
    <my-editor name="content1" label="默认经典"></my-editor>
    <my-editor name="content2" label="简约工具" toolbar="simple"></my-editor>
    <my-editor name="content3" label="全功能" toolbar="all"></my-editor>
    <my-editor name="content4"  label="自定义" :toolbar="['bold', 'italic']"></my-editor>
  </my-form>
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
