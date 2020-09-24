# Drawer 抽屉

Drawer 抽屉容器。文档<api-link href="map/my-map-drawer"> MyMapDrawer</api-link>

## 基础用法

:::demo
```html
<template>
  <my-map>  
    <my-map-drawer title="标题文本" width="300px">
      占位内容
    </my-map-drawer>
  </my-map>
</template>
```
:::

## 默认收起

:::demo
```html
<template>
  <my-map>  
    <my-map-drawer title="标题文本" width="300px" collapsed>
      占位内容
    </my-map-drawer>
  </my-map>
</template>
```
:::

## 点击外部收起

:::demo
```html
<template>
  <my-map>  
    <my-map-drawer title="标题文本" width="300px" close-on-click-outside footer-align="right">
       <p v-for="n in 20" :key="n">占位内容</p>
       <template v-slot:footer>
          <el-button type="primary">确定</el-button>
       </template>
    </my-map-drawer>
  </my-map>
</template>
```
:::

## 主题风格

:::demo
```html
<template>
  <my-map>  
    <my-map-drawer title="标题文本" width="300px" theme="dark">
      占位内容
    </my-map-drawer>
  </my-map>
</template>
```
:::

## 停靠位置

:::demo
```html
<template>
  <my-map>
    <my-map-drawer placement="left" title="标题文本" width="300px" theme="dark">占位内容</my-map-drawer>
    <my-map-drawer placement="right" title="标题文本" width="300px" theme="dark">占位内容</my-map-drawer>
    <my-map-drawer placement="top" title="标题文本" height="100px" theme="dark">占位内容</my-map-drawer>
    <my-map-drawer placement="bottom" title="标题文本" height="100px" theme="dark">占位内容</my-map-drawer>
  </my-map>
</template>

```
:::
