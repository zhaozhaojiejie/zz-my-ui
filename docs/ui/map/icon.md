# Icon 图标
基于HTML的Icon覆盖物。文档<api-link href="map/my-map-html"> MyMapHTML </api-link>

仅适用暂时数量较少的情况，如需显示大量数据，请使用MyMapMarker组件。

## 基础用法

:::demo
```html
<template>
  <my-map>
    <my-map-icon :position="[113.261999, 23.130592]" 
                 :size="40"
                 name='el-icon-location'></my-map-icon>
  </my-map>
</template>
```
:::

## 设置外观

:::demo
```html
<template>
  <my-map>
    <my-map-icon :position="[113.261999, 23.130592]" 
                 name='el-icon-location'
                 :size="40"
                 theme="primary"></my-map-icon>
  </my-map>
</template>
```
:::

## SVG图标

:::demo
```html
<template>
  <my-map>
    <my-map-icon :position="[113.261999, 23.130592]" 
                 name='icon-airplane'
                 svg
                 :size="40"
                 theme="danger"></my-map-icon>
  </my-map>
</template>
<script>
import '$ui/icons/airplane'
export default {
}
</script>
```
:::

