# Pointer 指示器

用作提取经纬度。文档<api-link href="map/sp-map-pointer"> spMapPointer</api-link>

## 基础用法
:::demo
```html
<template>
  <sp-map>
    <sp-map-pointer></sp-map-pointer>
  </sp-map>
</template>
```
:::

## 设置精度

:::demo
```html
<template>
  <sp-map>
    <sp-map-pointer :precision="10"></sp-map-pointer>
  </sp-map>
</template>
```
:::


## 主题和位置
:::demo
```html
<template>
  <sp-map>
    <sp-map-pointer placement="right-bottom" theme="dark"></sp-map-pointer>
  </sp-map>
</template>
```
:::