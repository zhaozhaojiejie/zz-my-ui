# Pointer 指示器

用作提取经纬度。文档<api-link href="map/my-map-pointer"> MyMapPointer</api-link>

## 基础用法
:::demo
```html
<template>
  <my-map>
    <my-map-pointer></my-map-pointer>
  </my-map>
</template>
```
:::

## 设置精度

:::demo
```html
<template>
  <my-map>
    <my-map-pointer :precision="10"></my-map-pointer>
  </my-map>
</template>
```
:::


## 主题和位置
:::demo
```html
<template>
  <my-map>
    <my-map-pointer placement="right-bottom" theme="dark"></my-map-pointer>
  </my-map>
</template>
```
:::