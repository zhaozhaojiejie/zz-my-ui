# TagInput 标签输入框

输入标签， 文档  <api-link href="components/my-tag-input">MyTagInput</api-link>

## 代码示例

### 基础用法

输入完成，Enter确定

:::demo
```html
<template>
  <my-form @submit="handleSubmit">
    <my-tag-input name="tags" label="标签"></my-tag-input>
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


### 折叠

:::demo
```html
<template>
  <my-form @submit="handleSubmit" :model="model">
    <my-tag-input name="tags" label="标签" :props="{collapseTags:true}"></my-tag-input>
  </my-form>
</template>

<script>
  export default {
    data() {
      return {
        model: {
          tags: ['苹果', '香蕉']
        }
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
