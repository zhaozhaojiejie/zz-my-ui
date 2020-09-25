# Navbar 导航条

系统头部导航条，包含以下组件：

- <api-link href="components/sp-navbar">spNavbar</api-link>
- <api-link href="components/sp-navbar-IconAction">IconAction</api-link>
- <api-link href="components/sp-navbar-UserAction">UserAction</api-link>
- <api-link href="components/sp-navbar-FullScreenAction">FullScreenAction</api-link>

## 代码演示

### 基础用法
:::demo(navbar-1)
```html
<template>
  <sp-navbar :logo="logo" 
             title="spWeb Demo System"
             version="4.0">
      <template v-slot:actions>
        <UserAction username="Admin" extra="超级管理员" :avatar="{theme: 'primary'}"></UserAction>
        <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
        <IconAction icon="icon-poweroff" svg></IconAction>
      </template>           
  </sp-navbar>
</template>

<script>
 import {spNavbar} from '$ui'
 import logo from '$ui/assets/xdh.png'
 import '$ui/icons/poweroff'
 const { IconAction, UserAction } = spNavbar
 export default {
   components: {
     spNavbar,
     IconAction,
     UserAction
   },
   data() {
     return {
       logo: logo
     }
   }
 }
</script>

```
:::

### 带菜单
:::demo(navbar-2)
```html
<template>
  <sp-navbar :logo="logo" 
             title="spWeb Demo System"
             version="4.0"
             :menus="menus">
      <template v-slot:actions>
        <UserAction username="Admin" extra="超级管理员" :avatar="{theme: 'primary'}"></UserAction>
        <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
        <IconAction icon="icon-poweroff" svg></IconAction>
      </template>           
  </sp-navbar>
</template>

<script>
 import {spNavbar} from '$ui'
 import logo from '$ui/assets/xdh.png'
 import '$ui/icons/poweroff'
 const { IconAction, UserAction } = spNavbar
 
 const menus = [
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
     spNavbar,
     IconAction,
     UserAction
   },
   data() {
     return {
       logo: logo,
       menus: menus
     }
   }
 }
</script>

```
:::

### 显示切换按钮

:::demo(navbar-3)
```html
<template>
  <sp-navbar :logo="null" collapsible :collapsed.sync="collapsed">
      <template v-slot:actions>
        <UserAction username="Admin" extra="超级管理员" :avatar="{theme: 'primary'}"></UserAction>
        <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
        <IconAction icon="icon-poweroff" svg></IconAction>
      </template>           
  </sp-navbar>
</template>

<script>
 import {spNavbar} from '$ui'
 import logo from '$ui/assets/xdh.png'
 import '$ui/icons/poweroff'
 const { IconAction, UserAction } = spNavbar
 export default {
   components: {
     spNavbar,
     IconAction,
     UserAction
   },
   data() {
     return {
       logo: logo,
       collapsed: false
     }
   }
 }
</script>

```
:::

### 主题

:::demo(navbar-4)
```html
<template>

<div>
  <el-radio-group v-model="theme">
    <el-radio-button label="light">light</el-radio-button>
    <el-radio-button label="dark">dark</el-radio-button>
    <el-radio-button label="primary">primary</el-radio-button>
    <el-radio-button label="gradual">gradual</el-radio-button>
  </el-radio-group>
  <div style="margin-top: 20px;">
    <sp-navbar :logo="logo" 
               :theme="theme"
               @select="handleSelect"
               title="spWeb Demo System"
               version="4.0"
               :menus="menus">
        <template v-slot:actions>
          <UserAction username="Admin" extra="超级管理员" :avatar="{theme: 'primary'}"></UserAction>
          <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
          <IconAction icon="icon-poweroff" svg></IconAction>
        </template>           
    </sp-navbar>
  </div>
</div>  
</template>

<script>
 import {spNavbar} from '$ui'
 import logo from '$ui/assets/xdh.png'
 import '$ui/icons/poweroff'
 const { IconAction, UserAction } = spNavbar
 
 const menus = [
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
     spNavbar,
     IconAction,
     UserAction
   },
   data() {
     return {
       logo: logo,
       menus: menus,
       theme: 'light'
     }
   },
   methods: {
     handleSelect(item) {
       console.log('select', item)
     }
   }
 }
</script>

```
:::

### 工具按钮提示和下拉菜单

:::demo(navbar-5)
```html
<template>
  <sp-navbar theme="gradual">
      <template v-slot:actions>
        <UserAction username="Admin" 
                    extra="超级管理员" 
                    :dropdown-items="userDropdown" 
                    :dropdown-options="{size: 'small'}"
                    :avatar="{theme: 'primary'}"></UserAction>
        <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
        <FullScreenAction tooltip></FullScreenAction>
        <IconAction icon="el-icon-setting" tooltip="设置"></IconAction>
        <IconAction icon="icon-poweroff" svg></IconAction>
      </template>           
  </sp-navbar>
</template>

<script>
 import {spNavbar} from '$ui'
 import logo from '$ui/assets/xdh.png'
 import '$ui/icons/poweroff'
 const { IconAction, UserAction, FullScreenAction} = spNavbar
 export default {
   components: {
     spNavbar,
     IconAction,
     UserAction,
     FullScreenAction
   },
   data() {
     return {
       logo: logo,
       userDropdown: [
         { text: '个人信息', icon: 'el-icon-info'},
         { text: '修改秘密', icon: 'el-icon-lock'},
         { text: '退出登录', icon: 'el-icon-switch-button', divided: true}
       ]
     }
   }
 }
</script>

```
:::


