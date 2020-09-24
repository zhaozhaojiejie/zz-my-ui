# Zoom 缩放

缩放工具控件。文档<api-link href="map/my-map-zoom"> MyMapZoom </api-link>

## 基础用法
:::demo
```html
<template>
  <my-map>
    <my-map-zoom></my-map-zoom>
  </my-map>
</template>
```
:::

## 停靠位置

:::demo
```html
<template>
  <my-map height="600px">
    <my-map-zoom theme="light" placement="right-bottom"></my-map-zoom>
    <my-map-zoom theme="light" placement="right-top"></my-map-zoom>
    <my-map-zoom theme="light" placement="left-top"></my-map-zoom>
    <my-map-zoom theme="light" placement="left-bottom"></my-map-zoom>
  </my-map>
</template>
```
:::


## 深色主题

:::demo
```html
<template>
  <my-map height="600px" invert>
    <my-map-zoom theme="dark" placement="right-bottom"></my-map-zoom>
    <my-map-zoom theme="dark" placement="right-top"></my-map-zoom>
    <my-map-zoom theme="dark" placement="left-top"></my-map-zoom>
    <my-map-zoom theme="dark" placement="left-bottom"></my-map-zoom>
  </my-map>
</template>
```
:::