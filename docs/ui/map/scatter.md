# Scatter 散点

地图散点效果。文档<api-link href="map/sp-map-scatter"> spMapScatter </api-link>

## 基础用法

:::demo
```html
<template>
    <sp-map>
      <sp-map-scatter :coordinate="[113.261999, 23.130592]"></sp-map-scatter>
    </sp-map>
</template>
```
:::

## 设置样式

:::demo
```html
<template>
    <sp-map>
      <sp-map-scatter :coordinate="[113.261999, 23.130592]"
                      fill="red"
                      :radius="5"
                      :stroke="{width:2, color:'#fff'}"></sp-map-scatter>
    </sp-map>
</template>
```
:::

### 设置文本

:::demo
```html
<template>
    <sp-map>
      <sp-map-scatter :coordinate="[113.261999, 23.130592]"
                      :radius="20"
                      :text="{text:'A', fill:'#fff',font:'16px'}"></sp-map-scatter>
    </sp-map>
</template>
```
:::

## 动画配置
:::demo
```html
<template>
    <sp-map>
      <sp-map-scatter :coordinate="[113.161999, 23.130592]"
                      :ripple="ripple1" 
                      fill="red"></sp-map-scatter>
     <sp-map-scatter :coordinate="[113.361999, 23.130592]"
                      :ripple="ripple2" 
                      fill="red"></sp-map-scatter>
    </sp-map>
</template>
<script>
export default {
  data() {
     return {
       ripple1: {
          color: 'red', // 默认与 fill 参数一致
          period: 2, //  动画周期，秒数
          scale: 5, // 动画中波纹的最大缩放比
          type: 'fill' // 渲染类型 fill 或 stroke
       },
       ripple2: {
          period: 1, //  动画周期，秒数
          scale: 8, // 动画中波纹的最大缩放比
          strokeColor: 'red',
          strokeWidth: 5, // 边框宽度
          type: 'stroke' // 渲染类型 fill 或 stroke
       }
     }
   }
}
</script>
```
:::

## 散点集合

:::demo
```html
<template>
    <sp-map>
      <sp-map-scatter v-for="n in 50" 
                      :key="n" 
                      :coordinate="getCoordinate()"
                      :delay="Math.random() * 5000"></sp-map-scatter>
    </sp-map>
</template>
<script>
export default {
 methods: {
   getCoordinate(){
     return [
        113 + Math.random() - Math.random(),
        23 + Math.random() - Math.random()
      ]
   }
 }
}
</script>
```
:::

## 聚合

:::demo
```html
<template>
  <sp-map>
    <sp-map-cluster :data="data" 
                    :distance="50"
                    :styleCreator="styleCreator"
                    @change="handleChange"></sp-map-cluster>
    <sp-map-scatter v-for="(item, key) in scatters"
                    :key="key"
                    v-bind="item"></sp-map-scatter>
  </sp-map>
</template>
<script>
  export default {
    data() {
      return {
        data: [],
        scatters: {}
      }
    },
    methods: {
      handleChange(e) {
        this.scatters = {}
      },
      styleCreator(feature) {
        const geometry = feature.getGeometry()
        const coordinate = geometry.getCoordinates()
        this.scatters[coordinate.join(',')] = {coordinate}
      },
      getData(total) {
        const data = []
        for (let i = 0; i < total; i++) {
          data.push({
            coordinate: [
              113 + Math.random() - Math.random(),
              23 + Math.random() - Math.random()
            ]
          })
        }
        return data
      }
    },
    created() {
      this.data = this.getData(1000)
    }
  }
</script>

```
:::
