# RadialMenu 圆形菜单

文档 <api-link href="components/sp-radial-menu">spRadialMenu</api-link> 

:::warning
由于组件采用svg生成，菜单项目用到的图标必须也要svg才可以。
:::

## 基础用法

:::demo
```html
<template>
    <div style="height:200px; position:relative;">
      <el-button @click="visible=true">显示</el-button>
      <sp-radial-menu :items="items" :visible.sync="visible" :default-selected="6"></sp-radial-menu>
    </div>
</template>

<script>

export default {
   data() {
     return {
        visible: true,
        items: [
                {id:1, label: '编辑'},
                {id:2, label: '删除'},
                {id:3, label: '复制'},
                {id:4, label: '导入'},
                {id:5, label: '导出'},
                {id:6, label: '新增'}
        ]
     }
   }
}
</script>

```
:::

### 多级菜单

:::demo
```html
<template>
    <div style="height:200px; position:relative;">
      <el-button @click="visible=true">显示</el-button>
      <sp-radial-menu :items="items" :visible.sync="visible"></sp-radial-menu>
    </div>
</template>

<script>
import '$ui/icons/adjust'
import '$ui/icons/all'

export default {
   data() {
     return {
        visible: true,
        items: [
                   {
                     id: 1,
                     label: '编辑',
                     icon: 'icon-adjust',
                     children: [
                       {id: 11, label: '子菜单'},
                       {id: 12, label: '子菜单'},
                       {id: 13, label: '子菜单'},
                       {id: 13, label: '子菜单'}
                     ]
                   },
                   {
                     id: 2,
                     label: '删除',
                     icon: 'icon-all',
                     children: [
                       {id: 21, label: '子菜单'},
                       {id: 22, label: '子菜单'},
                       {id: 23, label: '子菜单'},
                       {id: 24, label: '子菜单'}
                     ]
                   },
                   {
                     id: 3,
                     label: '复制',
                     icon: 'icon-adjust',
                     children: [
                       {id: 31, label: '子菜单'},
                       {id: 23, label: '子菜单'},
                       {id: 33, label: '子菜单'},
                       {id: 34, label: '子菜单'}
                     ]
                   },
                   {
                     id: 4,
                     label: '导入',
                     icon: 'icon-all',
                     children: [
                       {id: 41, label: '子菜单'},
                       {id: 42, label: '子菜单'},
                       {id: 43, label: '子菜单'},
                       {id: 44, label: '子菜单'}
                     ]
                   },
                   {
                     id: 5,
                     label: '导出',
                     icon: 'icon-adjust',
                     children: [
                       {id: 51, label: '子菜单'},
                       {id: 52, label: '子菜单'},
                       {id: 53, label: '子菜单'},
                       {id: 54, label: '子菜单'}
                     ]
                   },
                   {
                     id: 6,
                     label: '新增',
                     icon: 'icon-all',
                     children: [
                       {id: 61, label: '子菜单'},
                       {id: 62, label: '子菜单'},
                       {id: 63, label: '子菜单'},
                       {id: 64, label: '子菜单'}
                     ]
                   }
                 ]
     }
   }
}
</script>

```
:::

### 右键触发
:::demo
```html
<template>
    <div style="height:200px; position:relative;" @contextmenu="handleContextmenu">
      <sp-radial-menu :items="items" :visible.sync="visible" :position="position" append-to-body></sp-radial-menu>
    </div>
</template>

<script>

export default {
   data() {
     return {
        visible: false,
        position: null,
        items: [
                {id:1, label: '编辑'},
                {id:2, label: '删除'},
                {id:3, label: '复制'},
                {id:4, label: '导入'},
                {id:5, label: '导出'},
                {id:6, label: '新增'}
        ]
     }
   },
   methods: {
      handleContextmenu(e) {
        this.position = [e.pageX, e.pageY]
        this.visible = true
        e.preventDefault()
      }
   }
}
</script>

```
:::
