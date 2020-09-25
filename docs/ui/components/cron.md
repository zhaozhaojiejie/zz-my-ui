# Cron 表达式

这是一个cron表达式生成组件

## 基础用法

:::demo
```html
<template>
<sp-form :model="model" @submit="handleSubmit">
   <sp-cron name="cron"></sp-cron>
</sp-form>
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
