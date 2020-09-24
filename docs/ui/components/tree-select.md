# TreeSelect 下拉树

文档 <api-link href="components/my-tree-select">MyTreeSelect</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree" label="下拉树" :options="options"></my-tree-select>
  </my-form>
</template>

<script>
  import tree from '$docs/data/tree.json'

  export default {
    data() {
      return {
        options: tree,
        model: {
          tree: 'yizhi'
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


### 多选

:::demo
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
    <my-tree-select name="tree"
                    label="下拉树"
                    :options="options"
                    :props="{multiple: true, collapseTags: true}"></my-tree-select>
  </my-form>
</template>

<script>
  import tree from '$docs/data/tree.json'
  
  export default {
    data() {
      return {
        options: tree,
        model: {
          tree: ['layout', 'color']
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
