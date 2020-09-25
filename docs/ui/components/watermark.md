# Watermark 水印组件

在页面打上水印文本标识。 文档 <api-link href="components/sp-watermark">spWatermark</api-link>

## 代码演示

## 基础用法

:::demo
```html
<template>
  <sp-watermark text="水印文本">
     <div style="height:400px;"></div>
  </sp-watermark>
</template>
```
:::

### 多行文本

:::demo
```html
<template>
  <sp-watermark :text="text" :width="200" :height="200">
     <div style="height:400px;"></div>
  </sp-watermark>
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


