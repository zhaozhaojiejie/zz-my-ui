# Placement 定位容器

用作在地图上指定位置显示。文档<api-link href="map/sp-map-placement"> spMapPlacement </api-link>

## 基础用法

:::demo
```html
<template>
  <sp-map>
    <sp-map-placement>
      <el-card>卡片内容</el-card>
    </sp-map-placement>
  </sp-map>
</template>
```
:::

## 指定位置

:::demo
```html
<template>
  <sp-map>
    <sp-map-placement v-for="item in placements" :key="item" :placement="item">
      <el-card>{{item}}</el-card>
    </sp-map-placement>
  </sp-map>
</template>
<script>
  export default {
    data() {
      return {
        placements: [
          'left-top', 'center-top', 'right-top',
          'left-center', 'center-center', 'right-center',
          'left-bottom', 'center-bottom', 'right-bottom'
        ]
      }
    }
  }
</script>

```
:::

## 主题风格

:::demo
```html
<template>
  <sp-map>
    <sp-map-placement>
       <div style="padding: 20px;">默认浅色</div>
    </sp-map-placement>
    <sp-map-placement theme="dark" placement="right-bottom">
      <div style="padding: 20px;">默认浅色</div>
    </sp-map-placement>
  </sp-map>
</template>
```
:::