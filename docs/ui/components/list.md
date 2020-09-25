# List 列表组件

列表是数据展示的高频组件，文档 <api-link href="components/sp-list">spList</api-link>

## 使用示例

### 基础用法
:::demo(list-1)
```html
<template>
  <sp-list :data="list">
     <template v-slot="{item}">
       <div class="item">{{item}}</div>
     </template>
  </sp-list>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  background: #eee;
}
</style>

```
:::

### 样式设置

可以设置边框、分隔线、斑马底纹

:::demo(list-2)
```html
<template>
  <sp-list :data="list" border split stripe>
     <template v-slot="{item}">
       <div class="item">{{item}}</div>
     </template>
  </sp-list>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>

```
:::

### 定义头部、底部


:::demo(list-3)
```html
<template>
  <sp-list :data="list" split :header-style="{padding:0}">
  
     <template v-slot:header>
       <sp-header title="头部标题" theme="bg-right"></sp-header>
     </template>
     
     <template v-slot="{item}">
       <div class="item">{{item}}</div>
     </template>
     
     <template v-slot:footer>
        底部内容
     </template>
     
  </sp-list>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>

```
:::

### 多列显示


:::demo(list-4)
```html
<template>
  <sp-list :data="list" :columns="5" border split stripe>
     <template v-slot="{item}">
       <div class="item">{{item}}</div>
     </template>
  </sp-list>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
}
</script>

```
:::

### 响应式列显示

:::demo(list-5)
```html
<template>
  <sp-list :data="list" :columns="columns" fix-columns border split stripe>
     <template v-slot="{item}">
       <div class="item">{{item}}</div>
     </template>
  </sp-list>
</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      columns: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6
      }
    }
  }
}
</script>

```
:::

### 尺寸

支持4中尺寸设置

:::demo(list-6)
```html
<template>
  <el-row :gutter="20">
     <el-col :span="6">
      <sp-list :data="list" size="large" border split stripe>
         <template v-slot="{item}">
           <div class="item">{{item}}</div>
         </template>
      </sp-list>
     </el-col>
     <el-col :span="6">
      <sp-list :data="list" border split stripe>
         <template v-slot="{item}">
           <div class="item">{{item}}</div>
         </template>
      </sp-list>
     </el-col>
     <el-col :span="6">
      <sp-list :data="list" size="small" border split stripe>
         <template v-slot="{item}">
           <div class="item">{{item}}</div>
         </template>
      </sp-list>
     </el-col>
     <el-col :span="6">
      <sp-list :data="list" size="mini" border split stripe>
         <template v-slot="{item}">
           <div class="item">{{item}}</div>
         </template>
      </sp-list>
    </el-col>
  </el-row>

</template>
<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>

```
:::

### 页码分页
:::demo(list-7)
```html
<template>
  <sp-list split border stripe :page-size="5" :loader="loader">
     <template v-slot:header>
       Header
     </template>
     
     <template v-slot="{item}">
       <div class="item">{{item}}</div>
     </template>
     
     <template v-slot:footer>
        Footer
     </template>
     
  </sp-list>
</template>
<script>
export default {
  methods: {
    loader(page, pageSize) {
      const list = []
      for(let i=0; i<pageSize; i++){
        list.push( (page - 1) * pageSize + i + 1)
      }
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
            list: list,
            total: 1000
          })
        }, 300)
      })
    }
  }
}
</script>

```
:::

### 滚动加载

:::demo(list-8)
```html
<template>
  <div style="height: 400px; overflow: auto;">
    <sp-list split border stripe :page-size="10" :loader="loader" mode="scroll" fit>
      <template v-slot:header>
        Header
      </template>

      <template v-slot="{item}">
        <div class="item">{{item}}</div>
      </template>

      <template v-slot:footer>
        Footer
      </template>

    </sp-list>
  </div>
</template>
<script>
  export default {
    methods: {
      loader(page, pageSize) {
        const list = []
        for (let i = 0; i < pageSize; i++) {
          list.push((page - 1) * pageSize + i + 1)
        }
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              list: list,
              total: 100
            })
          }, 300)
        })
      }
    }
  }
</script>

```
:::

### 虚拟列表

虚拟列表适用于大量数据，并且不能分页的情况，必须要设置行的高度 item-height

:::demo(list-9)
```html
<template>
  <div style="height: 400px; overflow: auto;">
    <sp-list split border stripe :loader="loader" mode="virtual" :item-height="50">
      <template v-slot:header>
        Header
      </template>

      <template v-slot="{item}">
        <div class="item">{{item}}</div>
      </template>

      <template v-slot:footer>
        Footer
      </template>

    </sp-list>
  </div>
</template>
<script>
  export default {
    methods: {
      loader() {
        const list = [], total = 1000 
        for (let i = 0; i < total; i++) {
          list.push(i + 1)
        }
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              list: list,
              total: total
            })
          }, 300)
        })
      }
    }
  }
</script>

```
:::

