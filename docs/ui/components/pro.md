# Pro 通用后台框架

页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。

文档 <api-link href="components/my-pro">my-pro</api-link> 

## 代码示例

### 基础用法

:::demo(pro-1)
```html
<template>
<div style="height:800px">
  <my-pro :menus="menus"
          :mode="mode"
          :navbar-theme="navbarTheme"
          :sidebar-theme="sidebarTheme"
          :fixed="fixed"
          :collapsible="collapsible"
          :rainbow="rainbow"
          :color-weak="colorWeak"
          :tab="tab"
          :breadcrumb="createBreadcrumb">

    <template v-slot:actions>
      <UserAction :dropdown-items="items" username="Admin" extra="超级管理员" :avatar="{theme: 'primary'}"></UserAction>
      <IconAction icon="el-icon-message-solid" :badge="12"></IconAction>
      <IconAction icon="icon-poweroff" svg></IconAction>
    </template>

    <my-wrapper title="参数设置"
                sub-title="子标题说明文字">

      <my-container>
        <el-form ref="form" label-width="100px" size="small" style="padding: 20px">
          <el-form-item label="导航模式">
            <el-radio-group v-model="mode">
              <el-radio-button label="sidebar">侧边菜单布局</el-radio-button>
              <el-radio-button label="navbar">顶部菜单布局</el-radio-button>
              <el-radio-button label="both">侧边+顶部菜单布局</el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="侧边栏颜色">
            <el-radio-group v-model="sidebarTheme">
              <el-radio-button label="light">浅色</el-radio-button>
              <el-radio-button label="dark">深色</el-radio-button>
              <el-radio-button label="primary">蓝色</el-radio-button>
              <el-radio-button label="gradual">蓝色+渐变</el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="顶部颜色">
            <el-radio-group v-model="navbarTheme">
              <el-radio-button label="light">浅色</el-radio-button>
              <el-radio-button label="dark">深色</el-radio-button>
              <el-radio-button label="primary">蓝色</el-radio-button>
              <el-radio-button label="gradual">蓝色+渐变</el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="固定菜单栏">
            <el-switch v-model="fixed"></el-switch>
          </el-form-item>

          <el-form-item label="开启折叠">
            <el-switch v-model="collapsible"></el-switch>
          </el-form-item>

          <el-form-item label="开启导航Tab">
            <el-switch v-model="tabEnabled"></el-switch>
          </el-form-item>

          <el-form-item label="开启面包屑">
            <el-switch v-model="breadcrumbEnabled"></el-switch>
          </el-form-item>

          <el-form-item label="色弱模式">
            <el-switch v-model="colorWeak"></el-switch>
          </el-form-item>
          <el-form-item label="顶部彩虹边框">
            <el-switch v-model="rainbow"></el-switch>
          </el-form-item>
          <el-form-item label="测试滚动条">
            <el-switch v-model="scrollEnabled"></el-switch>
          </el-form-item>


        </el-form>
        <div v-if="scrollEnabled" style="height: 1000px"></div>
      </my-container>
      
    </my-wrapper>
  </my-pro>
 </div>
</template>

<script>
  import {MyPro} from '$ui'
  import '$ui/icons/poweroff'

  const {IconAction, UserAction} = MyPro
  const mock = [
    {
      icon: 'el-icon-setting',
      text: '导航菜单一',
      index: '/one',
      badge: 10
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
      badge: {
        value: 123,
        max: 9,
        type: 'primary'
      },
      children: [
        {
          group: true,
          title: '分组一',
          index: 1,
          children: [
            {
              text: '选项一',
              icon: 'el-icon-tickets',
              index: '/three/1',
              badge: {isDot: true}
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
      MyPro,
      IconAction,
      UserAction
    },
    data() {
      return {
        menus: mock,
        mode: 'sidebar',
        sidebarTheme: 'light',
        navbarTheme: 'light',
        fixed: false,
        collapsible: true,
        colorWeak: false,
        rainbow: true,
        tabEnabled: false,
        breadcrumbEnabled: false,
        scrollEnabled: false,
        items: [
          {
            text: '个人信息',
            icon: 'el-icon-setting'
          },
          {
            text: '退出',
            divided: true
          }
        ]
      }
    },
    computed: {
      tab() {
        if (!this.tabEnabled) return null
        return {
          label: '首页',
          value: '/',
          icon: 'el-icon-setting'
        }
      }
    },
    methods: {
      createBreadcrumb() {
        if (!this.breadcrumbEnabled) return null
        return [
          {label: '首页', to: '/'},
          {label: '应用'},
          {label: '详情'}
        ]
      }
    }
  }
</script>

```
:::
