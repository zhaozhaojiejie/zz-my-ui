# v-tree-connect指令

## 代码示例

### 基础用法

使用 “v-tree-connect” 自定义指令 可以设置 elm 组件 “el-tree” 添加虚线连接样式
:::demo

```html
<template>
  <div >
    <el-tree :data="data" :props="defaultProps" v-tree-connect></el-tree>
  </div>
</template>
<style scoped lang="scss">

</style>
<script>
  import treeConnect from '$ui/directives/tree-connect'
  export default {
    directives: {'tree-connect': treeConnect},
    data() {
      return {
        data: [
          {
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>

```

:::
