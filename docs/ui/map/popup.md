# Popup 弹窗

地图popup弹窗组件。文档<api-link href="map/sp-map-popup"> spMapPopup </api-link>

## 基础用法

:::demo

```html
<template>
  <sp-map>
    <sp-map-popup :position="[113.261999, 23.130592]" title="标题">
       主体内容
    </sp-map-popup>
  </sp-map>
</template>
```
:::

## 样色
:::demo
```html
<template>
  <sp-map>
    <sp-map-popup :position="[112.775167, 23.248545]" title="标题"  :closable="false">
       不能关闭
    </sp-map-popup>

    <sp-map-popup :position="[113.547644, 23.265711]" title="标题" :closeOnClick="true">
       点击外面关闭
    </sp-map-popup>

    <sp-map-popup :position="[112.904943, 23.076883]" title="标题" icon="el-icon-setting">
       标题带Icon
    </sp-map-popup>

    <sp-map-popup :position="[113.539404, 23.085123]" title="标题" theme="dark">
       暗黑模式
    </sp-map-popup>


  </sp-map>
</template>
```
:::