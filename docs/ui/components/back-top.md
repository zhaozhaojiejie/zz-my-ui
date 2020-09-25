# BackTop 回到顶部按钮

文档：
<api-link href="components/sp-back-top">spBackTop</api-link> 

## 何时使用

返回顶部按钮。

## 代码示例
 

### 基础用法

:::demo
```html
<template>
  <div  >
    <ul ref="ul" style="height: 300px; overflow: auto">
      <li v-for="i in 50" :key="i">{{i}}</li>
    </ul>
    <sp-back-top v-if="container" :height="150" :container="container"></sp-back-top>
   </div>
</template>

<script>
import {spBackTop} from '$ui'
export default {
  components: {
    spBackTop
  },
  data() {
    return {
      container: null
    }
  },
  mounted() {
    this.container = this.$refs.ul
  }
}
</script>

```
:::

