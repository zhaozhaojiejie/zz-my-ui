# 内置实例扩展

在Vue实例有以下常用的扩展功能，可以在任意Vue实例中调用。

## $loading(options)

用服务的形式动态显示加载中效果。

改扩展由ElementUI实现， [文档](../element/loading.md#服务)

:::demo
```html
<template>
  <el-button @click="show">显示loading</el-button>
</template>
<script>
export default {
  methods: {
    show() {
      const loading = this.$loading()
      setTimeout(() => loading.close(), 3000)
    }
  }
}
</script>


```
:::

## $msgbox(options)

## $alert(message, title, options)

## $confirm(message, title, options)

## $prompt(message, title, options)

## $message(options)

## $notify(options)

## $axios(options)

## $log(msg)
