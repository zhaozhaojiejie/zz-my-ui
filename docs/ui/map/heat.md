# Heat 热力图

热力图组件 <api-link href="map/my-map-heat">MyMapHeat</api-link>

## 基础用法

:::demo
```html
<template>
    <my-map :center="center" adapter="Amap">
       <my-map-heat v-if="data" :data="data"></my-map-heat>
    </my-map>
</template>

<script>
export default {
  data() {
    return {
      center: [120, 30],
      data: null
    }
  },
  methods: {
    mockData() {
       const [x, y] = this.center
       const data = []
       for(let i=0; i<1000; i++){
         data.push({
              coordinate: [ x + Math.random() - Math.random(), y + Math.random() - Math.random()],
         })
       }
       return data
    }
  },
  created() {
    setTimeout(()=>{
        this.data = this.mockData()
     }, 0)
  }
}
</script>
```
:::
