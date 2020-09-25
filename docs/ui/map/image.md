# Image 图片
图片覆盖物。文档<api-link href="map/sp-map-image"> spMapImage </api-link>

## 基础用法

:::demo
```html
<template>
  <sp-map>
    <sp-map-image :coordinate="[113.261999, 23.130592]" :src="src"></sp-map-image>
  </sp-map>
</template>
<script>
import logo from '$ui/assets/logo.png'
export default {
  data() {
    return {
      src: logo
    }
  }
}
</script>
```
:::

## 个性化样式
:::demo
```html
<template>
  <sp-map>
    <sp-map-image :coordinate="[113.261999, 23.130592]" 
                  :opacity="0.6"
                  color="red"
                  :scale="1.5"
                  :rotation="30"
                  :src="src"></sp-map-image>
  </sp-map>
</template>
<script>
import logo from '$ui/assets/logo.png'
export default {
  data() {
    return {
      src: logo
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
    <sp-map-image :coordinate="[113.261999, 23.130592]" :src="src" @click="handleClick"></sp-map-image>
  </sp-map>
</template>
<script>
import logo from '$ui/assets/logo.png'
export default {
  data() {
    return {
      src: logo
    }
  },
  methods: {
     handleClick(e) {
       alert('clicked!')
     }
  }
}
</script>
```
:::