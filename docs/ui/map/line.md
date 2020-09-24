# Line 线

线覆盖物。文档<api-link href="map/my-map-line"> MyMapLine </api-link>

## 基础用法

:::demo
```html
<template>
  <my-map>
    <my-map-line :coordinates="coordinates"></my-map-line>
  </my-map>
</template>
<script>
  export default {
    data() {
      return {
        coordinates: [
          [112.810186, 23.267921],
          [113.577856, 23.277534],
          [113.164495, 23.009742],
          [113.811415, 22.958749]
        ]
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
  <my-map>
    <my-map-line :coordinates="coordinates"
                 :width="5"
                 :lineDash="[10]"
                 color="red"></my-map-line>
  </my-map>
</template>
<script>
  export default {
    data() {
      return {
        coordinates: [
          [112.810186, 23.267921],
          [113.577856, 23.277534],
          [113.164495, 23.009742],
          [113.811415, 22.958749]
        ]
      }
    }
  }
</script>

```
:::

## 箭头

:::demo
```html
<template>
  <my-map>
    <my-map-line :coordinates="coordinates" arrow></my-map-line>
  </my-map>
</template>
<script>
  export default {
    data() {
      return {
        coordinates: [
          [112.810186, 23.267921],
          [113.577856, 23.277534],
          [113.164495, 23.009742],
          [113.811415, 22.958749]
        ]
      }
    }
  }
</script>

```
:::

## 连续箭头

:::demo
```html
<template>
  <my-map>
    <my-map-line :coordinates="coordinates"  :arrow="{color:'#000'}" arrow-each></my-map-line>
  </my-map>
</template>
<script>
  export default {
    data() {
      return {
        coordinates: [
          [112.810186, 23.267921],
          [113.577856, 23.277534],
          [113.164495, 23.009742],
          [113.811415, 22.958749]
        ]
      }
    }
  }
</script>

```
:::

## 曲线

:::demo
```html
<template>
  <my-map>
    <my-map-line :coordinates="coordinates" arrow bezier></my-map-line>
  </my-map>
</template>
<script>
  export default {
    data() {
      return {
        coordinates: [
          [112.810186, 23.267921],
          [113.577856, 23.277534],
          [113.164495, 23.009742]
        ]
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
  <my-map>
    <my-map-line :coordinates="coordinates" bezier  text="文本示例一"></my-map-line>
    <my-map-line :coordinates="[[112.810186, 23.267921],[113.577856, 23.277534]]" :text="text"></my-map-line>
  </my-map>
</template>
<script>
  export default {
    data() {
      return {
        coordinates: [
          [112.810186, 23.267921],
          [113.577856, 23.277534],
          [113.164495, 23.009742]
        ],
       text: {
           font: '16px',
           fill: 'red',
           offsetY: -12,
           text: '文本示例二'
        }
      }
    }
  }
</script>

```
:::