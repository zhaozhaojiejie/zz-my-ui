# Watermark 水印组件

在页面打上水印文本标识。 文档 <api-link href="components/my-watermark">MyWatermark</api-link>

## 代码演示

## 基础用法

:::demo
```html
<template>
  <my-watermark text="水印文本">
     <div style="height:400px;"></div>
  </my-watermark>
</template>
```
:::

### 多行文本

:::demo
```html
<template>
  <my-watermark :text="text" :width="200" :height="200">
     <div style="height:400px;"></div>
  </my-watermark>
</template>

<script>
export default {
  data() {
    return {
      text: [
          '第一行文本',
          '第二行文本'
      ]
    }
  }
}
</script>

```
:::


