# CardList 卡片列表

卡片形式的数据展示列表，支持分页。文档 <api-link href="components/sp-card-list">spCardList</api-link> 

## 基础用法
:::demo
```html
<template>
  <sp-card-list :data="data" :columns="3">
    <el-card slot-scope="{item}">{{item}}</el-card>
  </sp-card-list>
</template>
<script>
  export default {
    data() {
      return {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    }
  }
</script>

```
:::

## 响应式设置

`columns` 支持设置响应式列数，{xxl,xl,lg,md,sm,xs}
```txt
{
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
}
```


:::demo
```html
<template>
  <sp-card-list :data="data" :columns="columns">
    <el-card slot-scope="{item}">{{item}}</el-card>
  </sp-card-list>
</template>
<script>
  export default {
    data() {
      return {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        columns: {
          xxl: 8,
          xl: 6,
          lg: 4,
          md: 3,
          sm: 2,
          xs: 1
        }
      }
    }
  }
</script>

```
:::

## 分页数据

:::demo
```html
<template>
  <sp-card-list :loader="load"
                :columns="columns"
                pager
                :page-size="pageSize">
    <el-card slot-scope="{item}">{{item}}</el-card>
  </sp-card-list>
</template>
<script>
  export default {
    data() {
      return {
        pageSize: 12,
        columns: {
          xxl: 8,
          xl: 6,
          lg: 4,
          md: 3,
          sm: 2,
          xs: 1
        }
      }
    },
    methods: {
      load(page, pageSize) {
        const data = []
        for (let i = 0; i < pageSize; i++) {
          data.push((page - 1) * pageSize + i + 1)
        }
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              list: data,
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
