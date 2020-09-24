# Polygon 多边形

多边形覆盖物。文档<api-link href="map/my-map-polygon"> MyMapPolygon</api-link>

## 基础用法

:::demo

```html
<template>
  <my-map :center="[120, 33]" :zoom="6" >
    <my-map-polygon :coordinates="line"></my-map-polygon>
  </my-map> 
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
  <my-map :center="[120, 33]" :zoom="6" >
    <my-map-polygon :coordinates="line" :fill="fill" :stroke="stroke"></my-map-polygon>
  </my-map>
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
  <my-map :center="[120, 33]" :zoom="6" >
    <my-map-polygon :coordinates="line" :text="text"></my-map-polygon>
  </my-map> 
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
