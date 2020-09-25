# Crud 增删改查组件

支持通用单表增删改查功能。文档 <api-link href="components/sp-crud">spCrud</api-link> 

## 代码示例

### 基础用法

:::demo(crud-1)
```html
<template>
  <div style="background: #eee; padding:10px;">
    <sp-crud :filter="{collapsible:true, labelWidth:'80px'}"
             ref="crud"
             :columns="columns"
             :adapter="adapter"
             :table-options="{rowKey:'id'}"
             :form-options="{labelWidth:'80px'}"
    >
      <template v-slot:title>
        我的数据表格
      </template>

      <template v-slot:toolbar>
        <el-button type="primary" size="small" @click="openAddDialog">新增</el-button>
        <el-button type="danger" size="small" @click="batchRemove">批量删除</el-button>
      </template>

      <template v-slot:filter>
        <sp-input label="用户名" name="user"></sp-input>
        <sp-select label="类型" name="type" collapsible></sp-select>
        <sp-input label="标题" name="title" collapsible></sp-input>
        <sp-range label="范围" mode="date" name="range" collapsible></sp-range>
      </template>

      <template v-slot:form="{row}">
        <div>
          <sp-input label="用户名" name="name" :rules="{required:true}"></sp-input>
          <sp-date-picker label="日期" name="date" :props="{valueFormat:'yyyy-MM-dd'}"></sp-date-picker>
        </div>
      </template>
    </sp-crud>
  </div>
</template>

<script>

  import user from '$docs/code/mixin/user'
  import {spCrud} from '$ui'

  export default {
    mixins: [user],
    data() {
      return {
        adapter: spCrud.adapter.call(this, 'user'),
        tags: [
          {label: '选项1', value: 1},
          {label: '选项1', value: 2},
          {label: '选项1', value: 3},
          {label: '选项1', value: 4},
          {label: '选项1', value: 5},
          {label: '选项1', value: 6}
        ],
        columns: [
          {type: 'selection'},
          {type: 'index', label: '#'},
          {label: '姓名', prop: 'name'},
          {label: '身份证', prop: 'id'},
          {label: '日期', prop: 'date'},
          {
            type: 'handle',
            label: '操作',
            width: 200,
            handles: [
              {view: true},
              {edit: true},
              {remove: true}
            ]
          }
        ]
      }
    },
    methods: {
      openAddDialog() {
        this.$refs.crud.openAddDialog()
      },
      batchRemove() {
        this.$refs.crud.batchRemove()
      }
    }
  }
</script>

```
:::

### 配合代码生成器

### 自定义适配请求

### 操作列配置

### 权限控制配置
