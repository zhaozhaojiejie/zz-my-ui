# Polygon 多边形

多边形覆盖物。文档<api-link href="map/sp-map-polygon"> spMapPolygon</api-link>

## 基础用法

:::demo

```html
<template>
  <sp-map :center="[120, 33]" :zoom="6" >
    <sp-map-polygon :coordinates="line"></sp-map-polygon>
  </sp-map> 
</template>
<script>
export default {
  data() {
    return {
      center: [120, 30],
      line: [[120, 30], [126, 35], [130, 33], [120, 30]]
    }
  }
}
</script>
```

:::

## 设置样式

:::demo
```html
<template>
  <sp-map :center="[120, 33]" :zoom="6" >
    <sp-map-polygon :coordinates="line" :fill="fill" :stroke="stroke"></sp-map-polygon>
  </sp-map>
</template>
<script>
export default {
  data() {
    return {
      center: [120, 30],
      line: [[120, 30], [126, 35], [130, 33], [120, 30]],
      fill: 'yellow',
      stroke: {
        width: 3,
        color: 'red',
        lineDash: [5, 5]
      }
    }
  }
}
</script>
```
:::

## 文本

:::demo
```html
<template>
  <sp-map :center="[120, 33]" :zoom="6" >
    <sp-map-polygon :coordinates="line" :text="text"></sp-map-polygon>
  </sp-map> 
</template>
<script>
export default {
  data() {
    return {
      center: [120, 30],
      line: [[120, 30], [126, 35], [130, 33], [120, 30]],
      text: {
        text: '文本样例',
        font: '16px'
      }
    }
  }
}
</script>
```
:::
