# Lazy 懒加载

组件级懒加载方案 组件文档 <api-link href="components/my-lazy">MyLazy</api-link>

- 支持 组件可见或即将可见时懒加载
- 支持 组件延时加载
- 支持 加载真实组件前展示骨架组件，提高用户体验

## 代码示例

### 基本用法

:::demo(lazy-1)
```html
<template>
  <div>
     <div  v-for="i in 5" :key="i" class="item">
       <my-lazy>
          <my-empty></my-empty> 
          <my-skeleton slot="skeleton" loading active></my-skeleton>
       </my-lazy>
     </div>

  </div>
</template>

<script>
import {MyLazy, MySkeleton, MyEmpty} from '$ui'
export default {
  components: {
    MyLazy,
    MySkeleton,
    MyEmpty
  }
}
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #ccc;
  margin: 30px;
  height: 300px;
  padding: 20px;
}
</style>

```
::::

### 延时加载


:::demo(lazy-2)
```html
<template>
  <div>
     <div class="item">
       <my-lazy :timeout="5000">
          <my-empty></my-empty> 
          <my-skeleton slot="skeleton" loading active></my-skeleton>
       </my-lazy>
     </div>

  </div>
</template>

<script>
import {MyLazy, MySkeleton, MyEmpty} from '$ui'
export default {
  components: {
    MyLazy,
    MySkeleton,
    MyEmpty
  }
}
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #ccc;
  margin: 30px;
  height: 300px;
  padding: 20px;
}
</style>

```
::::
