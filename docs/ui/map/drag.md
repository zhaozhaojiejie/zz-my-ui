# 覆盖物拖动交互

## feature图形拖动

:::demo

```html
<template>
  <my-map ref="map"  :center="[120, 30]"  :zoom="6"  @ready="readyHandle" @on-dragUp="dragUpHandle">
    <my-map-circle :center="[120, 30]" :radius="50000" fill="red" :props="{'drag': false, 'id': 'c1'}" ></my-map-circle>
    <my-map-circle :center="[120.08, 30.08]" :radius="50000" fill="green" :props="{'drag': true, 'id': 'c2'}" ></my-map-circle>
  </my-map>
</template>
<script>
import Drag from '$ui/map/utils/interactions/drag.js'
export default {
  methods: {
    readyHandle(map, mapComp) {
      let dragInteraction = new Drag(mapComp, {
        featureDefine: (feature) => { // 自定义参数过滤需要拖动的组件
          let feaProps = feature.getProperties()
          if (feaProps.drag) {
            return feature
          }
        }
      })
      map.addInteraction(dragInteraction)
    },
    dragUpHandle(feature, event) {
      console.log(feature, event)
    }
  }
}
</script>
```

:::

## html拖动

:::demo

```html
<template>
<my-map ref="map" :center="[120, 30]"  :zoom="6" @pointermove="overLayMouseMove">
  <my-map-html ref="html1" id="html1" :position="htmlPoint" @mousedown="overLayMouseDown"  @mouseup="overLayMouseUp" >
    <div class="warp"  >
      <h2>hello world</h2>
    </div>
  </my-map-html>
</my-map>
</template>
<style lang="scss" scope>
.warp{
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px 10px #cccccc;
  background: white;
  cursor: move;
}
</style>
<script>
export default {
  data() {
    return {
      dragOverlay: false,
      htmlPoint: [120.05, 30.05]
    }
  },
  
  methods: { 
    overLayMouseDown(event) {
      const overlay = this.$refs.html1.overlay
      this.dragOverlay = overlay
    },
    overLayMouseMove(event) {
      if (this.dragOverlay) {
        this.htmlPoint = event.coordinate
      }
    },
    overLayMouseUp(event) {
      this.dragOverlay = null
    }
  },
  mounted() {
  }
}
</script>
```

:::