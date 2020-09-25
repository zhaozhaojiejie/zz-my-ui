# Draw 绘画

Draw 绘画组件。文档<api-link href="map/sp-map-draw"> spMapDraw</api-link>


## 基础用法
:::demo
```html
<template>
  <sp-map>
     <sp-map-draw></sp-map-draw>
  </sp-map>
</template>
```
:::

## 图形类型

:::demo
```html
<template>
  <sp-map>
     <sp-map-draw ref="draw" :type="value"></sp-map-draw>
     <sp-map-placement style="padding: 10px;">
       <el-select v-model="value" size="small">
        <el-option
          v-for="item in types"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
     </sp-map-placement>
  </sp-map>
</template>
<script>
export default {
  data() {
     return {
       types: ['LineString', 'Polygon', 'Circle', 'Point'],
       value:'LineString'
     }
  }
}
</script>
```
:::

## 样式配置

:::demo
```html
<template>
  <sp-map>
     <sp-map-draw type="Circle" :brush="brush" :effect="effect"></sp-map-draw>
  </sp-map>
</template>
<script>
export default {
  data() {
     return {
       brush: {
          fill: 'rgba(255,223,64,0.5)',
          stroke: {
            color: 'rgba(255,223,64)',
            width: 3
          },
          circle: {
            radius: 8,
            fill: 'red',
            stroke: {
              width: 2,
              color: '#fff'
            }
          }
       },
        effect: {
          fill: 'rgba(90,200,33,0.5)',
          stroke: {
            color: 'rgba(90,200,33)',
            width: 3
          }
        }
     }
  }
}
</script>
```
:::

## 手动控制模式

启用后，可按需要调用 draw modify finish 方法完成画图功能
:::demo
```html
<template>
  <sp-map>
    <sp-map-placement placement="left-top" style="padding: 10px;">
      <el-button size="small" :disabled="mode==='draw'" @click="draw">绘画模式</el-button>
      <el-button size="small" :disabled="mode==='modify'" @click="modify">编辑模式</el-button>
      <el-button size="small" :disabled="mode==='finish'" @click="finish">结束</el-button>
      <el-button size="small" @click="getFeatures">获取图形</el-button>
      <el-button size="small" type="primary" @click="save">保存</el-button>
      <el-button size="small" @click="clear">清空</el-button>
    </sp-map-placement>
    <sp-map-draw ref="draw" @ready="handleReady" manual></sp-map-draw>
  </sp-map>
</template>

<script>
  import {save, get, LOCAL} from '$ui/utils/storage'

  const cacheKey = '__draw_feature__'
  export default {
    data() {
      return {
        mode: 'finish'
      }
    },
    methods: {
      handleReady() {
        const json = get(cacheKey, LOCAL)
        if (json) {
          this.$refs.draw.fromJSON(json)
        }
      },
      draw() {
        this.$refs.draw.finish()
        this.$refs.draw.draw()
        this.mode = 'draw'
      },
      modify() {
        this.$refs.draw.finish()
        this.$refs.draw.modify()
        this.mode = 'modify'
      },
      finish() {
        this.$refs.draw.finish()
        this.mode = 'finish'
      },
      getFeatures() {
        const features = this.$refs.draw.getFeatures()
        alert('当前有' + features.length + '个图形')
      },
      clear() {
        this.$refs.draw.clear()
        this.save()
      },
      save() {
        this.$nextTick(() => {
          const json = this.$refs.draw.toJSON()
          save(cacheKey, json, LOCAL)
        })
      }
    }
  }
</script>

```
:::

