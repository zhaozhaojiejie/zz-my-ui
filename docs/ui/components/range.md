# Range 范围输入框

基于 `el-input-number` `el-date-picker` `el-time-select` 实现的范围输入框组件，
 可以录入数字、日期、时间范围的数据。 文档 <api-link href="components/my-range">MyRange</api-link>

## 代码示例

### 数字范围
:::demo
```html
<template>
  <my-form @submit="handleSubmit" :model="model">
    <my-range label="范围" name="range"></my-range>
  </my-form>
</template>

<script>
  export default {
    data() {
      return {
        model: {
          range: [1, 100]
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

### 日期范围

:::demo
```html
<template>
  <my-form @submit="handleSubmit" :model="model">
    <my-range label="范围" name="range" mode="date" :props="{valueFormat:'yyyy-MM-dd'}"></my-range>
  </my-form>
</template>

<script>
  export default {
    data() {
      return {
        model: {
          // range: [1, 100]
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


### 时间范围

:::demo
```html
<template>
  <my-form @submit="handleSubmit">
    <my-range label="范围" name="range" mode="time"></my-range>
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
