# Text 文本

Text覆盖物。文档<api-link href="map/my-map-text"> MyMapText </api-link>

## 基础用法

:::demo
```html
<template>
  <my-map>
    <my-map-text :coordinate="[113.261999, 23.130592]" text="文本样例" font="20px"></my-map-text>
  </my-map>
</template>
```
:::

## 样式

:::demo
```html
<template>
  <my-map>
    <my-map-text :coordinate="[113.261999, 23.130592]" v-bind="text"></my-map-text>
  </my-map>
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
