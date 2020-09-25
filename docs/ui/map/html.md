# Html 富文本

HTML覆盖物。文档<api-link href="map/sp-map-html"> spMapHtml</api-link>

## 基础用法

:::demo

```html
<template>
  <sp-map>  
    <sp-map-html :position="[113.261999, 23.130592]">
       <el-card>HTML覆盖物</el-card>
    </sp-map-html>
  </sp-map>
</template>
```

:::

## auto-pan

> auto-pan: [boolean] 控制html节点 在 setPosition显示时 是否 控制view 移动让 html节点 进入 地图显示范围
>
> auto-pan-animation: [object] {duration: 1000, easing: fn} 地图view 的动画配置项
>
> auto-pan-margin: [number] 50 动画完成后 html 与地图视口 边缘的 距离
>

:::demo
```html
<template>
  <sp-map>
    <sp-map-html :position="position" :auto-pan="true">
      <el-card>
         <el-button @click="move">点击我</el-button>
      </el-card>
    </sp-map-html>
  </sp-map>
</template>

<script>
export default {
  data() {
    return {
      position: [113.261999, 23.130592]
    }
  },
  methods: {
     move() {
       const [x, y] = this.position
       this.position = [x + Math.random() - Math.random(), y + Math.random() - Math.random()]
     }
  }
}
</script>
```
:::

## 定位

:::demo

```html
<template>
  <sp-map>
    <sp-map-html :positioning="positioning" :position="position">
      <el-card style="width: 467px;">
        <el-radio-group v-model="positioning" size="small">
          <el-radio v-for="item in positionArray" :key="item" :label="item">{{item}}</el-radio>
        </el-radio-group>
      </el-card>
    </sp-map-html>
    <sp-map-circle :center="position" :radius="1000"></sp-map-circle>
  </sp-map>
</template>
<script>
  export default {
    data() {
      return {
        positionArray: 'bottom-left|bottom-center|bottom-right|center-left|center-center|center-right|top-left|top-center|top-right'.split('|'),
        positioning: 'center-center',
        position: [113.261999, 23.130592]
      }
    }
  }
</script>

```

:::

## 事件

:::demo

```html
<template>
  <sp-map>  
    <sp-map-html :position="[113.261999, 23.130592]" @click="htmlClick">
       <el-card>HTML覆盖物</el-card>
    </sp-map-html>
  </sp-map>
</template>
<script>
export default {
  methods: {
    htmlClick(e) {
      alert(e)
    }
  }
}
</script>
```
