# TagSelect 标签选择器

 文档 <api-link href="components/my-tag-select">MyTagSelect</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
  <my-form @submit="handleSubmit" :model="model">
    <my-tag-select name="tag" :options="fruit"></my-tag-select>
  </my-form>
</template>

<script>
  export default {
    data() {
      return {
        fruit: ['苹果', '香蕉', '雪梨', '草莓', '水蜜桃', '桔子', '椰子'].map(n => ({label: n, value: n})),
        model: {
          tag: '雪梨'
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
  <my-form @submit="handleSubmit" :model="model">
    <my-tag-select name="tag"
                   :options="fruit"
                   :props="{multiple:true}"></my-tag-select>
  </my-form>
</template>

<script>
  export default {
    data() {
      return {
        fruit: ['苹果', '香蕉', '雪梨', '草莓', '水蜜桃', '桔子', '椰子'].map(n => ({label: n, value: n})),
        model: {
          tag: ['雪梨']
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

### 折叠

:::demo
```html
<template>
    <div style="width: 600px">
      <my-form @submit="handleSubmit" :model="model">
        <my-tag-select name="tag"
                       :options="fruit"
                       :props="{multiple:true, checkAll:true, collapsible:true}"></my-tag-select>
      </my-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        fruit: ['苹果', '香蕉', '雪梨', '草莓',
          '水蜜桃', '桔子', '椰子',
          '葡萄', '海棠', '枇杷', '山楂', '樱桃'].map(n => ({label: n, value: n})),
        model: {
          tag: ['雪梨']
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

### 标签风格和尺寸

:::demo
```html
<template>
  <div style="width: 600px">
    <my-form @submit="handleSubmit">
      <my-tag-select name="tag1"
                     :options="fruit"
                     :props="{tag:true, collapsible:true}"></my-tag-select>

      <my-tag-select name="tag2"
                     size="medium"
                     :options="fruit"
                     :props="{tag:true, collapsible:true}"></my-tag-select>

      <my-tag-select name="tag3"
                     size="small"
                     :options="fruit"
                     :props="{tag:true, collapsible:true}"></my-tag-select>
      <my-tag-select name="tag4"
                     size="mini"
                     :options="fruit"
                     :props="{tag:true, collapsible:true}"></my-tag-select>
    </my-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fruit: ['苹果', '香蕉', '雪梨', '草莓',
          '水蜜桃', '桔子', '椰子',
          '葡萄', '海棠', '枇杷', '山楂', '樱桃'].map(n => ({label: n, value: n}))
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


