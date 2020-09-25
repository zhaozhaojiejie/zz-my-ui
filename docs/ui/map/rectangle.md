# Rectangle 矩形

矩形覆盖物组件。文档<api-link href="map/sp-map-rectangle"> spMapRectangle </api-link>

## 基础用法

:::demo

```html
<template>
  <sp-map  :center="center" :zoom="7"   >  
    <sp-map-rectangle :coordinate="center" :width="100000" :height="50000" ></sp-map-rectangle>
  </sp-map>
</template>
<script>
export default {
  data() {
    return {
      center: [120, 30]
    }
  }
}
</script>
```

:::

## 样式

:::demo

```html
<template>
  <sp-map  :center="center" :zoom="7"   >  
    <sp-map-rectangle :coordinate="center" :width="100000" :height="50000" :fill="fill" :stroke="stroke"></sp-map-rectangle>
  </sp-map>
</template>
<script>
export default {
  data() {
    return {
      center: [120, 30],
      fill: 'transparent',
      stroke: {
        width: 3,
        color: 'red'
      }
    }
  }
}
</script>
```
