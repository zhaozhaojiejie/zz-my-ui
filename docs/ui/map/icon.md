# Icon 图标
基于HTML的Icon覆盖物。文档<api-link href="map/sp-map-html"> spMapHTML </api-link>

仅适用暂时数量较少的情况，如需显示大量数据，请使用spMapMarker组件。

## 基础用法

:::demo
```html
<template>
  <sp-map>
    <sp-map-icon :position="[113.261999, 23.130592]" 
                 :size="40"
                 name='el-icon-location'></sp-map-icon>
  </sp-map>
</template>
```
:::

## 设置外观

:::demo
```html
<template>
  <sp-map>
    <sp-map-icon :position="[113.261999, 23.130592]" 
                 name='el-icon-location'
                 :size="40"
                 theme="primary"></sp-map-icon>
  </sp-map>
</template>
```
:::

## SVG图标

:::demo
```html
<template>
  <sp-map>
    <sp-map-icon :position="[113.261999, 23.130592]" 
                 name='icon-airplane'
                 svg
                 :size="40"
                 theme="danger"></sp-map-icon>
  </sp-map>
</template>
<script>
import '$ui/icons/airplane'
export default {
}
</script>
```
:::

