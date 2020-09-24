# Layers 图层切换

图层切换控件。文档<api-link href="map/my-map-layers"> MyMapLayers </api-link>

## 基础用法

:::demo
```html
<template>
  <my-map>
    <my-map-layers :layers="layers" :margin="10"></my-map-layers>
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
        ]
      }
    }
  }
</script>

```
:::

## 反相效果

:::demo
```html
<template>
  <my-map invert>
    <my-map-layers :layers="layers" 
                    :margin="10"
                    theme="dark"
                    placement="center-bottom"></my-map-layers>
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
        ]
      }
    }
  }
</script>

```
:::


