# Cron 表达式

这是一个cron表达式生成组件

## 基础用法

:::demo
```html
<template>
<my-form :model="model" @submit="handleSubmit">
   <my-cron name="cron"></my-cron>
</my-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        cron: ''
      }
    }
  },
  methods: {
    handleSubmit(model) {
      this.$message.info(model.cron)
    }
  }
}
</script>

```
:::
