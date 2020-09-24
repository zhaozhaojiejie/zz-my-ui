# Circle 圆

圆形覆盖物。文档<api-link href="map/my-map-circle"> MyMapCircle</api-link>

## 基础用法

:::demo
```html
<template>
    <my-map>  
      <my-map-circle :center="[113.261999, 23.130592]" 
                     :radius="20000"></my-map-circle>
    </my-map>
</template>
```
:::

## 设置样式

个性化样式

:::demo
```html
<template>
    <my-map>  
      <my-map-circle :center="[113.261999, 23.130592]" 
                     :radius="20000"
                      fill="#ff0000"
                      :stroke="{width:5, color:'#000'}"></my-map-circle>
    </my-map>
</template>
```
:::

## 设置文本

:::demo
```html
<template>
    <my-map>  
      <my-map-circle :center="[113.261999, 23.130592]" 
                     :radius="20000"
                     :text="{text:'占位文本', font:'30px', fill:'blue'}"></my-map-circle>
    </my-map>
</template>
```
:::

## 事件

:::demo(my-map-circle-4)
```html
<template>
    <my-map>  
      <my-map-circle :center="[113.261999, 23.130592]" 
                     :radius="20000"
                     @mouseenter="handleEnter"
                     @mouseleave="handleLeave"
                     @click="handleClick"
                     :text="{text:text, font:'30px', fill:'blue'}"></my-map-circle>
    </my-map>
</template>
<script>
export default {
  data() {
    return {
       text: '占位文本'
    }
  },
  methods: {
     handleEnter() {
       this.text = '鼠标进入'
     },
    handleLeave() {
       this.text = '鼠标离开'
    },
    handleClick() {
       this.text = '点击'
    }
  }
}
</script>
```
:::

