# Zoom 缩放

缩放工具控件。文档<api-link href="map/sp-map-zoom"> spMapZoom </api-link>

## 基础用法
:::demo
```html
<template>
  <sp-map>
    <sp-map-zoom></sp-map-zoom>
  </sp-map>
</template>
```
:::

## 停靠位置

:::demo
```html
<template>
  <sp-map height="600px">
    <sp-map-zoom theme="light" placement="right-bottom"></sp-map-zoom>
    <sp-map-zoom theme="light" placement="right-top"></sp-map-zoom>
    <sp-map-zoom theme="light" placement="left-top"></sp-map-zoom>
    <sp-map-zoom theme="light" placement="left-bottom"></sp-map-zoom>
  </sp-map>
</template>
```
:::


## 深色主题

:::demo
```html
<template>
  <sp-map height="600px" invert>
    <sp-map-zoom theme="dark" placement="right-bottom"></sp-map-zoom>
    <sp-map-zoom theme="dark" placement="right-top"></sp-map-zoom>
    <sp-map-zoom theme="dark" placement="left-top"></sp-map-zoom>
    <sp-map-zoom theme="dark" placement="left-bottom"></sp-map-zoom>
  </sp-map>
</template>
```
:::