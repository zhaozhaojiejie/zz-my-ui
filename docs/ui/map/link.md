# Link 连线

两点之间的连线。文档<api-link href="map/sp-map-link"> spMapLink </api-link>

## 基础用法

:::demo
```html
<template>
  <sp-map>
    <sp-map-link :from="[112.810186, 23.267921]" :to="[113.577856, 23.277534]"></sp-map-link>
  </sp-map>
</template>
```
:::


## 样式
:::demo
```html
<template>
  <sp-map>
    <sp-map-link :from="[112.810186, 23.267921]" 
                 :to="[113.577856, 23.277534]"
                 color="red"
                 :width="8"></sp-map-link>
  </sp-map>
</template>
```
:::

## 曲线

:::demo
```html
<template>
  <sp-map>
    <sp-map-link :from="[112.810186, 23.267921]" :to="[113.577856, 23.277534]"  :radius="0.3" :angle="-90"></sp-map-link>
  </sp-map>
</template>
```
:::

## 箭头

:::demo
```html
<template>
  <sp-map>
    <sp-map-link :from="[112.810186, 23.267921]" 
                 :to="[113.577856, 23.277534]" 
                 :radius="0.3" 
                 :angle="-90"
                 to-arrow 
                 from-arrow></sp-map-link>
  </sp-map>
</template>
```
:::

## 文本

:::demo
```html
<template>
  <sp-map>
    <sp-map-link :from="[112.810186, 23.267921]" 
                 :to="[113.577856, 23.277534]" 
                 :radius="0.3" 
                 :angle="-90"
                 to-arrow 
                 from-arrow
                 :text="{text:'示例文本',font:'16px', offsetY: -14}"></sp-map-link>
  </sp-map>
</template>
```
:::
