# Table 表格

在el-table的基础上扩展功能，增加了通过列配置、工具区插槽、分页、滚动加载、虚拟列表、拖拽排序等功能。
 <api-link href="components/sp-table">spTable</api-link>
 
## 代码示例

### 基础用法

完全兼容el-table的参数、插槽、事件和方法

:::demo(table-1)
```html
<template>
    <div class="table-origin">
      <sp-table :columns="columns" :data="list"></sp-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ],
      list: []
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    }
  },
  created() {
    this.list = this.mock(5).list
  }
}
</script>

```
:::

### 自定义列和列头

:::demo(table-2)
```html
<template>
    <div class="table-origin">
      <sp-table :columns="columns" :data="list">
         
         <template v-slot:name="{row}">
           <el-tag size="small">{{row.name}}</el-tag>
         </template>
         
         <template v-slot:action="{row}">
           <el-button size="small">详情</el-button>
           <el-button size="small" type="primary">编辑</el-button>
           <el-button size="small" type="warning">删除</el-button>
         </template>
         
         <template v-slot:date.header="{column}">
             <el-tag size="small">{{column.label}}</el-tag>
         </template>
         
      </sp-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id', showOverflowTooltip: true},
          { label: '年龄', prop: 'age',sortable: true},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'},
          { label: '操作', prop: 'action', width: 230}
      ],
      list: []
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    }
  },
  created() {
    this.list = this.mock(5).list
  }
}
</script>

```
:::

### 开启列筛选

设置 column-filter 开启列筛选。
仅对普通列（非type的特殊类型及设置了prop的列）进行筛选
columns的项对象display默认为true，支持以下值：

 - true 默认值，初始化显示
 - false 初始不显示
 - always 一直显示，筛选器禁用

:::demo
```html
<template>
  <div class="table-origin">
    <sp-table :columns="columns"
              :loader="loader"
              border
              column-filter
              :page="1"
              :page-size="5"></sp-table>
  </div>
</template>

<script>
  import Mock from 'mockjs'

  export default {
    data() {
      return {
        columns: [
          {
            type: 'index',
            label: '#'
          },
          {
            label: '姓名',
            prop: 'name',
            display: 'always'
          },
          {
            label: '身份证',
            prop: 'id'
          },
          {
            label: '年龄',
            prop: 'age',
            display: false
          },
          {
            label: '地址',
            prop: 'address',
            display: false
          },
          {
            label: '日期',
            prop: 'date',
            display: false
          }
        ]
      }
    },
    methods: {
      mock(limit) {
        return Mock.mock({
          [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
          ]
        })
      },
      loader(page, pageSize) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              total: 1000,
              list: this.mock(pageSize).list
            })
          }, 1000)
        })
      }
    }
  }
</script>


```
:::

### 定义工具区

:::demo(table-3)
```html
<template>
    <div class="table-origin">
      <sp-table toolbar 
                header-background
                border
                title="表格标题文本"
                :columns="columns" 
                :data="list">
         <template v-slot:actions>
            <el-button type="primary" size="medium">新增</el-button>
            <el-button-group size="medium">
                <el-button>导入</el-button>
                <el-button>移动</el-button>
                <el-button>导出</el-button>
            </el-button-group>
            <el-button size="medium" type="warning">删除</el-button>
         </template>       
      </sp-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ],
      list: []
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    }
  },
  created() {
    this.list = this.mock(5).list
  }
}
</script>

```
:::

### 页码分页

:::demo(table-4)
```html
<template>
    <div class="table-origin">
      <sp-table :columns="columns" :loader="loader" :page="2" :page-size="5"></sp-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ]
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    loader(page, pageSize) {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 1000,
             list: this.mock(pageSize).list
          })
        }, 1000)
      })
    }
  }
}
</script>

```
:::

### 滚动分页

:::demo(table-5)
```html
<template>
    <div class="table-origin" style="height: 400px">
      <sp-table fit mode="scroll" :columns="columns" :loader="loader"></sp-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label:'#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ]
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    loader(page, pageSize) {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 50,
             list: this.mock(pageSize).list
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

:::demo(table-6)
```html
<template>
    <div class="table-origin" style="height: 400px">
      <sp-table fit mode="virtual" :columns="columns" :loader="loader"></sp-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
      ]
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    loader() {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 1000,
             list: this.mock(1000).list
          })
        }, 300)
      })
    }
  }
}
</script>

```
:::

### 拖动行与列

:::demo(table-7)

```html
<template>
    <div class="table-origin" style="height: 400px">
      <sp-table fit
        :columns="columns" 
        :loader="loader"
        :pagination="null"
        column-sortable
        row-sortable
        column-filter
        @column-change="colFilterHandle"
        @on-column-sort="colSortHandle"
        @on-row-sort="rowSortHandle"
      ></sp-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
        { label: '姓名', prop: 'name'},
        { label: '身份证', prop: 'id'},
        { label: '年龄', prop: 'age'},
        { label: '地址', prop: 'address'}, 
        { label: '日期', prop: 'date'}
      ]
    }
  },
  methods: {
    colFilterHandle(val) {
      console.log('onColFilter', val)
    },
    colSortHandle(e, showCol, allCol) {
      console.log('onColSort', e, showCol, allCol)
    },
    rowSortHandle(e, showRow, allRow) {
      console.log('onRowSort', showRow, allRow)
    },
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
            {
              id: '@id',
              name: '@cname',
              'age|10-100': 18,
              address: '@ctitle',
              date: '@date(yyyy-MM-dd)'
            }
        ]
      })
    },
    loader() {
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve({
             total: 10,
             list: this.mock(10).list
          })
        }, 300)
      })
    }
  }
}
</script>

```
:::
