# Layers 图层切换

图层切换控件。文档<api-link href="map/sp-map-layers"> spMapLayers </api-link>

## 基础用法

:::demo
```html
<template>
  <sp-map>
    <sp-map-layers :layers="layers" :margin="10"></sp-map-layers>
  </sp-map>
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
  <sp-map invert>
    <sp-map-layers :layers="layers" 
                    :margin="10"
                    theme="dark"
                    placement="center-bottom"></sp-map-layers>
  </sp-map>
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


