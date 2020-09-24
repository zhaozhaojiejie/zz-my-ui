# WaterFall 瀑布流

瀑布流组件 <api-link href="components/my-water-fall"> MyWaterFall </api-link>

**图片墙使用注意**： 为确保展示效果，建议每个单元格的长宽比例（尤其横向布局时）控制在 1:3 (或3:1) 之内。

## 代码示例

### 基础用法

:::demo

```html
<template>
<div style="max-height: 400px; overflow: auto; padding: 10px" > 
  <my-water-fall :is-horizontal="isHorizontal" :data="showImgs" :margin="5" :item-height="200" :columns="{
    xxl: 8,
    xl: 6,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 2
    }"
    ref="waterFall"
  >
    <template v-slot="{scope}">
      <my-water-fall-slot v-for="(item, index) in scope.data" :key="index" :width="item.$width" :height="item.$height" :left="item.$left" :top="item.$top">
        <div style="height: 100%"  > 
          <img :src="item.src" style="width: 100%" />
        </div>
      </my-water-fall-slot>
    </template>
    
  </my-water-fall>
  <div>
    <el-button @click="loadMore" type="small">更多</el-button>
    <el-button @click="isHorizontal = !isHorizontal" type="small">toggle</el-button> 
  </div>
</div>
</template>
<script>
import Mock from 'mockjs'
const RandomNum = function (start = 0, end = 100) {
  return start + Math.floor(Math.random() * (end - start))
}
export default {
  data() {
    return {
      isHorizontal: true,
      showImgs: []
    }
  },
  methods: {
    getImgs() {
      const arr = []
      for (let index = 0; index < 10; index++) {
        const w = RandomNum(100, 350)
        const h = RandomNum(100, 350) 
        arr.push({
          width: w,
          height: h,
          name: 'img' + index,
          src: Mock.Random.dataImage(`${w}x${h}`)
        })  
      }
      return arr
    }, 
    loadMore() {
      this.showImgs = this.showImgs.concat(this.getImgs())
      console.log(this.showImgs)
    }
  },
  created() {
    this.showImgs = this.getImgs()
  }
}
</script>

```

:::