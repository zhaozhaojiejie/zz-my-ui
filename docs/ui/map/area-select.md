# 区块选择交互

## 基础用法

长按shift键拖动地图：
:::demo

```html
<template>
  <div style="width: 100%; height: 600px">
    <sp-map height="100%"  :center="center" @ready="mapReady"  :zoom="9"  @on-boxend="boxEndHandle" >
      <sp-map-icon v-for="(item, index) in arr" :key="index" v-bind="item" ></sp-map-icon>
      <sp-map-placement>
        <button @click="resetClick">reset</button>
      </sp-map-placement>
    </sp-map>
  </div>
</template>
<script>
import AreaSelect from '$ui/map/utils/interactions/area-select.js'
export default {
  data() {
    return {
      center: [120, 30],
      arr: []
    }
  },
  computed: {
  },
  methods: {
    mapReady(map, mapComp) {
      const areaSelect = new AreaSelect(map, mapComp, {
        class: 'custom-drag-box'
      })
      map.addInteraction(areaSelect)  
    },
    boxEndHandle(e) {  
      const includes = this.arr.reduce((total, item) => {
        if (e.areaGeo.intersectsCoordinate(item.position)) {
          total.push(item)
        }
        return total
      }, [])
      console.log(includes)
      includes.forEach((item) => { item.color = 'red' })
    },
    resetClick() {
      this.arr.forEach((item) => { item.color = 'blue' })
    },
    createIcons(total) {
      const texts = []
      for (let i = 0; i < total; i++) {
        texts.push({
          position: [120 + (0.5 - Math.random()) * 2, 30 + (0.5 - Math.random()) * 2],
          name: 'el-icon-location',
          size: 20,
          color: 'blue'
        })
      }
      return texts
    }
  },
  created() {
    this.arr = this.createIcons(150)
  }
}
</script>
<style>
.custom-drag-box{
  border: 2px solid blue;
}
</style>
```

:::
