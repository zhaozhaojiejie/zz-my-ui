# 调色工具

:::demo
```html
<template>
  <my-map height="600px" :center="[106.011022, 37.237037]" :filter="model">
    <my-map-palette @change="change"></my-map-palette>
    <my-map-layers :layers="layers" placement="right-bottom" :margin="10"></my-map-layers>
  </my-map>
</template>
<script>
  import Baidu from '$ui/map/sources/preview/Baidu.png'
  import Amap from '$ui/map/sources/preview/Amap.png'
  import OSM from '$ui/map/sources/preview/OSM.png'
  import TDT from '$ui/map/sources/preview/TDT.png'

  export default {
    data() {
      return {
        layers: [
          {
            title: '百度',
            adapter: 'Baidu',
            preview: Baidu
          },
          {
            title: '高德',
            adapter: 'Amap',
            preview: Amap
          },
          {
            title: 'OSM',
            adapter: 'OSM',
            preview: OSM
          },
          {
            title: '天地图',
            adapter: 'TDT',
            preview: TDT
          }
        ],
        model: {
        }
      }
    },
    methods: {
      change(val) {
        this.model = val
      }
    }

  }
</script>

```
:::
