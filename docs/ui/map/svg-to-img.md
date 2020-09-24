# svgToImg方法

## 基础用法
> 此方法是使用在需要在地图中展示大量 icon 时，将要展示的icon 从 html 转化为base64图片的方法，可以用于节省性能

:::demo

```html
<template>
  <div style="width: 100%; height: 600px">
    <my-map height="100%" :center="[120, 33]"  :zoom="3" >
      <my-map-image v-for="(item, index) in arr" :key="index" v-bind="item" ></my-map-image>
    </my-map>
  </div>
</template>
<script>
import {svgToImg} from '$ui/map/utils/util'
export default {
  data() {
    return {
      center: [120, 30],
      arr: [],
      img: ''
    }
  },
  computed: {
  },
  methods: {
    createIcons(total, img) {
      const texts = []
      for (let i = 0; i < total; i++) {
        texts.push({
          coordinate: [120 + (0.5 - Math.random()) * 50, 30 + (0.5 - Math.random()) * 50],
          src: img,
          crossOrigin: 'anonymous'
        })
      }
      return texts
    }
  },
  created() {
    svgToImg('el-icon-location', 30, 'blue', 'element-icons').then((res) => {
      this.img = res
      this.arr = this.createIcons(10000, this.img)
    })
  }
}
</script>
```

:::
