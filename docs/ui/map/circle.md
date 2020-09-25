# Circle 圆

圆形覆盖物。文档<api-link href="map/sp-map-circle"> spMapCircle</api-link>

## 基础用法

:::demo
```html
<template>
    <sp-map>  
      <sp-map-circle :center="[113.261999, 23.130592]" 
                     :radius="20000"></sp-map-circle>
    </sp-map>
</template>
```
:::

## 设置样式

个性化样式

:::demo
```html
<template>
    <sp-map>  
      <sp-map-circle :center="[113.261999, 23.130592]" 
                     :radius="20000"
                      fill="#ff0000"
                      :stroke="{width:5, color:'#000'}"></sp-map-circle>
    </sp-map>
</template>
```
:::

## 设置文本

:::demo
```html
<template>
    <sp-map>  
      <sp-map-circle :center="[113.261999, 23.130592]" 
                     :radius="20000"
                     :text="{text:'占位文本', font:'30px', fill:'blue'}"></sp-map-circle>
    </sp-map>
</template>
```
:::

## 事件

:::demo(sp-map-circle-4)
```html
<template>
    <sp-map>  
      <sp-map-circle :center="[113.261999, 23.130592]" 
                     :radius="20000"
                     @mouseenter="handleEnter"
                     @mouseleave="handleLeave"
                     @click="handleClick"
                     :text="{text:text, font:'30px', fill:'blue'}"></sp-map-circle>
    </sp-map>
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

