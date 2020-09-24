# Link 连线

两点之间的连线。文档<api-link href="map/my-map-link"> MyMapLink </api-link>

## 基础用法

:::demo
```html
<template>
  <my-map>
    <my-map-link :from="[112.810186, 23.267921]" :to="[113.577856, 23.277534]"></my-map-link>
  </my-map>
</template>
```
:::


## 样式
:::demo
```html
<template>
  <my-map>
    <my-map-link :from="[112.810186, 23.267921]" 
                 :to="[113.577856, 23.277534]"
                 color="red"
                 :width="8"></my-map-link>
  </my-map>
</template>
```
:::

## 曲线

:::demo
```html
<template>
  <my-map>
    <my-map-link :from="[112.810186, 23.267921]" :to="[113.577856, 23.277534]"  :radius="0.3" :angle="-90"></my-map-link>
  </my-map>
</template>
```
:::

## 箭头

:::demo
```html
<template>
  <my-map>
    <my-map-link :from="[112.810186, 23.267921]" 
                 :to="[113.577856, 23.277534]" 
                 :radius="0.3" 
                 :angle="-90"
                 to-arrow 
                 from-arrow></my-map-link>
  </my-map>
</template>
```
:::

## 文本

:::demo
```html
<template>
  <my-map>
    <my-map-link :from="[112.810186, 23.267921]" 
                 :to="[113.577856, 23.277534]" 
                 :radius="0.3" 
                 :angle="-90"
                 to-arrow 
                 from-arrow
                 :text="{text:'示例文本',font:'16px', offsetY: -14}"></my-map-link>
  </my-map>
</template>
```
:::
