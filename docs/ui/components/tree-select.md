# TreeSelect 下拉树

文档 <api-link href="components/sp-tree-select">spTreeSelect</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <sp-form :model="model" @submit="handleSubmit">
    <sp-tree-select name="tree" label="下拉树" :options="options"></sp-tree-select>
  </sp-form>
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
  <sp-form :model="model" @submit="handleSubmit">
    <sp-tree-select name="tree"
                    label="下拉树"
                    :options="options"
                    :props="{multiple: true, collapseTags: true}"></sp-tree-select>
  </sp-form>
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
