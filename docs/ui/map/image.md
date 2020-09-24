# Image 图片
图片覆盖物。文档<api-link href="map/my-map-image"> MyMapImage </api-link>

## 基础用法

:::demo
```html
<template>
  <my-map>
    <my-map-image :coordinate="[113.261999, 23.130592]" :src="src"></my-map-image>
  </my-map>
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
  <my-map>
    <my-map-image :coordinate="[113.261999, 23.130592]" 
                  :opacity="0.6"
                  color="red"
                  :scale="1.5"
                  :rotation="30"
                  :src="src"></my-map-image>
  </my-map>
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
  <my-map>
    <my-map-image :coordinate="[113.261999, 23.130592]" :src="src" @click="handleClick"></my-map-image>
  </my-map>
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