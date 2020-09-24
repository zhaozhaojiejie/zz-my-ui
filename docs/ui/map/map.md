# 瓦片图层

地图瓦片基础图层，是地图应用的根组件。 组件文档 <api-link href="map/my-map">MyMap</api-link>

## 基础用法

:::demo
```html
<template>
  <my-map></my-map>
</template>
```
:::

## 指定层级和中心点
:::demo
```html
<template>
  <my-map :zoom="12" :center="[120, 33]"></my-map>
</template>
```
:::


## 适配地图类型

预设了以下地图的适配：

互联网

- OSM 
- Amap
- Baidu
- TDT

PGIS厂商

- Founder 方正 
- Ez 山海经纬
- Super 超图
- Fc 航天长峰、航天精一



:::demo
```html
<template>
  <my-map adapter="Baidu"></my-map>
</template>
```
:::

## 禁用滚轮缩放和拖拽移动

:::demo
```html
<template>
  <my-map :drag-pan="false" :mouse-wheel-zoom="false"></my-map>
</template>
```
:::

## 自定义瓦片图层适配

### 适配URL
:::demo
```html
<template>
  <my-map :adapter="adapter"></my-map>
</template>
<script>
export default {
     data() {
        return {
           adapter: {
              type: 'XYZ',
              url:'http://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn'
           }
        }
     }
}
</script>
```
:::


### 适配函数
:::demo
```html
<template>
  <my-map :adapter="adapter"></my-map>
</template>
<script>
export default {
     data() {
        return {
           adapter({TileLayer, XYZ}){
              return new TileLayer({
                source: new XYZ({
                  url:'http://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn'
                })
              })
           }
        }
     }
}
</script>
```
:::

## 事件

MyMap 支持 `ol/Map`的全部事件，并扩展支持 `ready` 和 图层上的Feature 鼠标 进入`mouseenter` 、离开`mouseleave` 事件

:::demo
```html
<template>
  <my-map adapter="TDT" @click="handleClick" @pointermove="handleMove"></my-map>
</template>
<script>
export default {
  methods: {
     handleClick(e) {
        console.log('click', e)
     },
    handleMove(e) {
        console.log('move', e)
    }
  }
}
</script>
```
:::

## 图层颜色反相
:::demo
```html
<template>
  <my-map invert></my-map>
</template>
```
:::

## 预设滤镜
:::demo
```html
<template>
  <my-map :filter="filterValue">
     <my-map-placement placement="left-top" style="padding: 10px;">
        <el-select v-model="filter" size="small">
          <el-option v-for="(item, key) in filters" 
                     :key="key" 
                     :label="key" 
                     :value="key"></el-option>
        </el-select>
     </my-map-placement>
  </my-map>
</template>
<script>
import {deepBlue, techBlue, black, orange, blue} from '$ui/map/utils/filters'
export default {
  data() {
     return {
       filters: {deepBlue, techBlue, black, orange, blue},
       filter: null
     }
  },
  computed: {
     filterValue() {
       return this.filters[this.filter] || ''
     }
  }
}
</script>
```
:::


ol/Map 事件清单：

- `change` (module:ol/events/Event~BaseEvent) - Generic change event. Triggered when the revision counter is increased.
- `change:layerGroup` (module:ol/Object.ObjectEvent)
- `change:size` (module:ol/Object.ObjectEvent)
- `change:target` (module:ol/Object.ObjectEvent)
- `change:view` (module:ol/Object.ObjectEvent)
- `click` (module:ol/MapBrowserEvent~MapBrowserEvent) - A click with no dragging. A double click will fire two of this.
- `dblclick` (module:ol/MapBrowserEvent~MapBrowserEvent) - A true double click, with no dragging.
- `error` (module:ol/events/Event~BaseEvent) - Generic error event. Triggered when an error occurs.
- `moveend` (module:ol/MapEvent~MapEvent) - Triggered after the map is moved.
- `movestart` (module:ol/MapEvent~MapEvent) - Triggered when the map starts moving.
- `pointerdrag` (module:ol/MapBrowserEvent~MapBrowserEvent) - Triggered when a pointer is dragged.
- `pointermove` (module:ol/MapBrowserEvent~MapBrowserEvent) - Triggered when a pointer is moved. Note that on touch devices this is triggered when the map is panned, so is not the same as mousemove.
- `postcompose` (module:ol/render/Event~RenderEvent) - Triggered after all layers are rendered. The event object will not have a context set.
- `postrender` (module:ol/MapEvent~MapEvent) - Triggered after a map frame is rendered.
- `precompose` (module:ol/render/Event~RenderEvent) - Triggered before layers are rendered. The event object will not have a context set.
- `propertychange` (module:ol/Object.ObjectEvent) - Triggered when a property is changed.
- `rendercomplete` (module:ol/render/Event~RenderEvent) - Triggered when rendering is complete, i.e. all sources and tiles have finished loading for the current viewport, and all tiles are faded in. The event object will not have a context set.
- `singleclick` (module:ol/MapBrowserEvent~MapBrowserEvent) - A true single click with no dragging and no double click. Note that this event is delayed by 250 ms to ensure that it is not a double click.