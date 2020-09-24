# Menu 菜单

为页面和功能提供导航的菜单列表。
组件文档 <api-link href="components/my-menu">MyMenu</api-link>

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。
一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示

### 基础用法

:::demo
```html
<template>
  <div>
    <div class="op">
      <span><el-switch v-model="mode" inactive-value="vertical" inactive-text="vertical" active-text="horizontal"
                       active-value="horizontal"></el-switch> </span>
      <span>
        <el-radio-group v-model="theme" size="small">
          <el-radio-button label="light">light</el-radio-button>
          <el-radio-button label="dark">dark</el-radio-button>
          <el-radio-button label="primary">primary</el-radio-button>
        </el-radio-group>

      </span>
      <span>collapsed: <el-switch v-model="collapsed"></el-switch> </span>

    </div>
    <my-menu :data="menus" :theme="theme" :mode="mode" :collapsed="collapsed"></my-menu>
  </div>
</template>

<script>
  import {MyMenu} from '$ui'

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
      MyMenu
    },
    data() {
      return {
        menus: mock,
        mode: 'horizontal',
        theme: 'light',
        collapsed: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .op {
    padding: 40px 0;

    span {
      margin-right: 20px;
    }
  }
</style>


```
:::
