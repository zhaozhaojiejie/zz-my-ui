# Text 文本

Text覆盖物。文档<api-link href="map/sp-map-text"> spMapText </api-link>

## 基础用法

:::demo
```html
<template>
  <sp-map>
    <sp-map-text :coordinate="[113.261999, 23.130592]" text="文本样例" font="20px"></sp-map-text>
  </sp-map>
</template>
```
:::

## 样式

:::demo
```html
<template>
  <sp-map>
    <sp-map-text :coordinate="[113.261999, 23.130592]" v-bind="text"></sp-map-text>
  </sp-map>
</template>
<script>
  export default {
    data() {
      return {
        text: {
          text: '文本样例',
          font: '30px',
          fill: '#fff',
          stroke: {
            width: 3,
            color: '#409eff'
          },
          rotation: -0.5,
          backgroundFill: 'rgba(0,0,0,0.3)',
          padding: [10, 10, 5, 10],
          backgroundStroke: {
            width: 5,
            color: '#409eff'
          }
        }
      }
    }
  }
</script>
```
:::
