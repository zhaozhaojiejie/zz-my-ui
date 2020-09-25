# Marker 标记

Marker覆盖物。支持在地图打点，并提供popup功能支持。 文档<api-link href="map/sp-map-marker"> spMapMarker </api-link>

## 基础用法

:::demo
```html
<template>
  <sp-map>
    <sp-map-marker :coordinate="[113.261999, 23.130592]"></sp-map-marker>
  </sp-map>
</template>
```
:::

## 定义图标

:::demo
```html
<template>
  <sp-map>
    <sp-map-marker :coordinate="[113.261999, 23.130592]" :src="pin"></sp-map-marker>
  </sp-map>
</template>
<script>
import pin from '$ui/map/sources/pin/red.png'
export default {
  data() {
    return {
      pin
    }
  }
}
</script>
```
:::

## 带浮层

:::demo
```html
<template>
  <sp-map>
    <sp-map-marker :coordinate="[113.261999, 23.130592]" :active-index="0">
      <template v-slot="{marker}">
         坐标：{{marker.coordinate}} <br>
         数据项：{{marker.items}} <br>
         集群: {{marker.cluster}} <br>
      </template>
    </sp-map-marker>
  </sp-map>
</template>
<script>
export default {
  data() {
    return {
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
  <sp-map adapter="TDT">
    <sp-map-marker v-if="markers" :data="markers">
      <template v-slot="{marker}">
        坐标：{{marker.coordinate}} <br>
        数据项个数：{{marker.items.length}} <br>
        集群: {{marker.cluster}} <br>
      </template>
    </sp-map-marker>
  </sp-map>
</template>
<script>
  export default {
    data() {
      return {
        center: [113.261999, 23.130592],
        markers: null
      }
    },
    methods: {
      createMarkers(count) {
        const markers = []
        const center = this.center
        for (let i = 0; i < count; i++) {
          markers.push({
            coordinate: center.map(n => n + Math.random() - Math.random())
          })
        }
        return markers
      }
    },
    created() {
      setTimeout(() => {
        this.markers = this.createMarkers(5000)
      }, 0)
    }
  }
</script>

```
:::


## 同时显示多个Popup

:::demo
```html
<template>
  <sp-map adapter="TDT">
    <sp-map-marker v-if="markers" :data="markers" multiple>
      <template v-slot="{marker}">
        坐标：{{marker.coordinate}} <br>
        数据项个数：{{marker.items.length}} <br>
        集群: {{marker.cluster}} <br>
      </template>
    </sp-map-marker>
  </sp-map>
</template>
<script>
  export default {
    data() {
      return {
        center: [113.261999, 23.130592],
        markers: null
      }
    },
    methods: {
      createMarkers(count) {
        const markers = []
        const center = this.center
        for (let i = 0; i < count; i++) {
          markers.push({
            coordinate: center.map(n => n + Math.random() - Math.random())
          })
        }
        return markers
      }
    },
    created() {
      setTimeout(() => {
        this.markers = this.createMarkers(5000)
      }, 0)
    }
  }
</script>

```
:::


