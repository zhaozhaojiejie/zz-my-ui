# Sidebar 侧边导航

网站侧边栏导航条，文档：
<api-link href="components/sp-sidebar">spSidebar</api-link>

## 代码演示

### 基础用法
:::demo(sidebar-1)
```html
<template>
  <div style="width:300px;">
    <sp-sidebar title="spWeb" version="4.0" :menus="menus"></sp-sidebar>
  </div>
</template>

<script>
import {spSidebar} from '$ui'
const mock = [
  {
    icon: 'el-icon-setting',
    text: '导航菜单一',
    index: '/one',
    trigger: 'event'
  },
  {
    icon: 'el-icon-s-marketing',
    text: '导航菜单二',
    index: '/two',
    disabled: true
  },
  {
    icon: 'el-icon-s-data',
    text: '导航菜单三',
    index: '/three',
    children: [
      {
        group: true,
        title: '分组一',
        index: 1,
        children: [
          {
            text: '选项一',
            icon: 'el-icon-tickets',
            index: '/three/1'
          },
          {
            text: '选项二',
            icon: 'el-icon-tickets',
            index: '/three/2'
          }
        ]
      },
      {
        group: true,
        title: '分组二',
        index: 2,
        children: [
          {
            text: '选项三',
            icon: 'el-icon-tickets',
            index: '/three/3'
          },
          {
            text: '选项四',
            icon: 'el-icon-tickets',
            index: '/three/4'
          }
        ]
      }
    ]
  },
  {
    icon: 'el-icon-menu',
    text: '导航菜单四',
    index: '/four'
  },
  {
    icon: 'el-icon-share',
    text: '导航菜单五',
    index: '/five',
    children: [
      {
        text: '选项一',
        icon: 'el-icon-tickets',
        index: '/five/1'
      },
      {
        text: '选项二',
        icon: 'el-icon-tickets',
        index: '/five/2'
      }
    ]
  }
]
export default {
  components: {
    spSidebar
  },
  data() {
    return {
      menus: mock
    }
  }
}
</script>

```
:::

### 支持折叠
:::demo(sidebar-2)
```html
<template>
  <div style="width:300px;">
    <sp-sidebar :collapsible="true" :collapsed.sync="collapsed" title="spWeb" :menus="menus"></sp-sidebar>
  </div>
</template>

<script>
import {spSidebar} from '$ui'
const mock = [
  {
    icon: 'el-icon-setting',
    text: '导航菜单一',
    index: '/one',
    trigger: 'event'
  },
  {
    icon: 'el-icon-s-marketing',
    text: '导航菜单二',
    index: '/two',
    disabled: true
  },
  {
    icon: 'el-icon-s-data',
    text: '导航菜单三',
    index: '/three',
    children: [
      {
        group: true,
        title: '分组一',
        index: 1,
        children: [
          {
            text: '选项一',
            icon: 'el-icon-tickets',
            index: '/three/1'
          },
          {
            text: '选项二',
            icon: 'el-icon-tickets',
            index: '/three/2'
          }
        ]
      },
      {
        group: true,
        title: '分组二',
        index: 2,
        children: [
          {
            text: '选项三',
            icon: 'el-icon-tickets',
            index: '/three/3'
          },
          {
            text: '选项四',
            icon: 'el-icon-tickets',
            index: '/three/4'
          }
        ]
      }
    ]
  },
  {
    icon: 'el-icon-menu',
    text: '导航菜单四',
    index: '/four'
  },
  {
    icon: 'el-icon-share',
    text: '导航菜单五',
    index: '/five',
    children: [
      {
        text: '选项一',
        icon: 'el-icon-tickets',
        index: '/five/1'
      },
      {
        text: '选项二',
        icon: 'el-icon-tickets',
        index: '/five/2'
      }
    ]
  }
]
export default {
  components: {
    spSidebar
  },
  data() {
    return {
      menus: mock,
      collapsed: false
    }
  }
}
</script>

```
:::


### 主题
:::demo(sidebar-3)
```html
<template>
  <div>
    <el-radio-group v-model="theme">
      <el-radio-button label="light">light</el-radio-button>
      <el-radio-button label="dark">dark</el-radio-button>
      <el-radio-button label="primary">primary</el-radio-button>
      <el-radio-button label="gradual">gradual</el-radio-button>
    </el-radio-group>
  
    <div style="width:300px; margin-top:20px;">
      <sp-sidebar :theme="theme" :collapsible="true" :collapsed.sync="collapsed" title="spWeb" :menus="menus"></sp-sidebar>
    </div>
  </div>
</template>

<script>
import {spSidebar} from '$ui'
const mock = [
  {
    icon: 'el-icon-setting',
    text: '导航菜单一',
    index: '/one',
    trigger: 'event'
  },
  {
    icon: 'el-icon-s-marketing',
    text: '导航菜单二',
    index: '/two',
    disabled: true
  },
  {
    icon: 'el-icon-s-data',
    text: '导航菜单三',
    index: '/three',
    children: [
      {
        group: true,
        title: '分组一',
        index: 1,
        children: [
          {
            text: '选项一',
            icon: 'el-icon-tickets',
            index: '/three/1'
          },
          {
            text: '选项二',
            icon: 'el-icon-tickets',
            index: '/three/2'
          }
        ]
      },
      {
        group: true,
        title: '分组二',
        index: 2,
        children: [
          {
            text: '选项三',
            icon: 'el-icon-tickets',
            index: '/three/3'
          },
          {
            text: '选项四',
            icon: 'el-icon-tickets',
            index: '/three/4'
          }
        ]
      }
    ]
  },
  {
    icon: 'el-icon-menu',
    text: '导航菜单四',
    index: '/four'
  },
  {
    icon: 'el-icon-share',
    text: '导航菜单五',
    index: '/five',
    children: [
      {
        text: '选项一',
        icon: 'el-icon-tickets',
        index: '/five/1'
      },
      {
        text: '选项二',
        icon: 'el-icon-tickets',
        index: '/five/2'
      }
    ]
  }
]
export default {
  components: {
    spSidebar
  },
  data() {
    return {
      menus: mock,
      collapsed: false,
      theme: 'light'
    }
  }
}
</script>

```
:::



