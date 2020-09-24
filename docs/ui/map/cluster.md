# Cluster 聚合

聚合是指在相邻一定距离内的的覆盖物合并成一个。 文档<api-link href="map/my-map-cluster"> MyMapCluster </api-link>

## 基础用法
:::demo
```html
<template>
  <my-map>
    <my-map-cluster :data="data"></my-map-cluster>
  </my-map>
</template>
<script>
export default {
  data() {
    return {
       data: []
    }
  },
  methods: {
     getData(total) {
        const data = []
        for(let i=0; i<total; i++) {
           data.push({
              coordinate: [113 + Math.random() - Math.random(), 23 + Math.random() - Math.random()]
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

## 样式配置
:::demo
```html
<template>
  <my-map>
    <my-map-cluster :data="data" :style-creator="styleCreator"></my-map-cluster>
  </my-map>
</template>
<script>
export default {
  data() {
    return {
       data: [],
       styleCreator: {
          fill: 'red',
          radius: 10,
          strokeWidth: 3,
          strokeColor: 'yellow',
          textFill: '#fff',
          scaleSeed: 0.1
       }
    }
  },
  methods: {
     getData(total) {
        const data = []
        for(let i=0; i<total; i++) {
           data.push({
              coordinate: [113 + Math.random() - Math.random(), 23 + Math.random() - Math.random()]
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

## 自定义样式
:::demo
```html
<template>
  <my-map>
    <my-map-cluster :data="data" :style-creator="styleCreator"></my-map-cluster>
  </my-map>
</template>
<script>
import parseStyle from '$ui/map/utils/style'
import pin from '$ui/map/sources/pin/cyan.png'

export default {
  data() {
    return {
       data: []
    }
  },
  methods: {
     styleCreator(feature) {
        return parseStyle({
           icon: {
              src: pin
            }
       })
     },
     getData(total) {
        const data = []
        for(let i=0; i<total; i++) {
           data.push({
              coordinate: [113 + Math.random() - Math.random(), 23 + Math.random() - Math.random()]
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