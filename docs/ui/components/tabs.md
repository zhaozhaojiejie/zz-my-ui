# Tabs 选项卡容器

文档 <api-link href="components/sp-tabs">spTabs</api-link>

## 基础用法
:::demo
```html
<template>
    <sp-tabs :tabs="tabs" shadow>
       <template v-slot="{tab}">{{tab.label}} 占位内容</template>
    </sp-tabs>
</template>

<script>

export default {
  data() {
    return {
      tabs: [
         {name: 'tab1', label: '基本设置'},
         {name: 'tab2', label: '安全设置'},
         {name: 'tab3', label: '账号绑定'},
         {name: 'tab4', label: '新消息通知'}
      ]
    }
  }
}
</script>

```
:::

## Tab位置 

:::demo
```html
<template>
    <sp-tabs :tabs="tabs" :position="position" shadow>
       <template v-slot>
        <el-radio-group v-model="position">
          <el-radio-button label="left"></el-radio-button>
          <el-radio-button label="right"></el-radio-button>
          <el-radio-button label="top"></el-radio-button>
        </el-radio-group>
       </template>
    </sp-tabs>
</template>

<script>

export default {
  data() {
    return {
      position: 'left',
      tabs: [
         {name: 'tab1', label: '基本设置'},
         {name: 'tab2', label: '安全设置'},
         {name: 'tab3', label: '账号绑定'},
         {name: 'tab4', label: '新消息通知'}
      ]
    }
  }
}
</script>

```
:::


## 卡片模式
:::demo
```html
<template>
    <sp-tabs :tabs="tabs" position="top" card border>
       <template v-slot="{tab}">{{tab.label}} 占位内容</template>
    </sp-tabs>
</template>

<script>

export default {
  data() {
    return {
      tabs: [
         {name: 'tab1', label: '基本设置'},
         {name: 'tab2', label: '安全设置'},
         {name: 'tab3', label: '账号绑定'},
         {name: 'tab4', label: '新消息通知'}
      ]
    }
  }
}
</script>

```
:::


## 适应父容器

:::demo
```html
<template>
    <div style="height: 500px">
        <sp-tabs :tabs="tabs" :position="position" shadow fit>
           <template v-slot>
            <el-radio-group v-model="position">
              <el-radio-button label="left"></el-radio-button>
              <el-radio-button label="right"></el-radio-button>
              <el-radio-button label="top"></el-radio-button>
            </el-radio-group>
            <p v-for="n in 50" :key="n"> 占位内容 </p>
           </template>
        </sp-tabs>
    </div>
</template>

<script>

export default {
  data() {
    return {
      position: 'left',
      tabs: [
         {name: 'tab1', label: '基本设置'},
         {name: 'tab2', label: '安全设置'},
         {name: 'tab3', label: '账号绑定'},
         {name: 'tab4', label: '新消息通知'}
      ]
    }
  }
}
</script>

```
:::

## 挂载组件
:::demo
```html
<template>
    <sp-tabs :tabs="tabs" shadow>
    </sp-tabs>
</template>

<script>
import {spWrapper} from '$ui'

export default {
  data() {
    return {
      tabs: [
         {name: 'tab1', label: '基本设置', component: spWrapper, props: {title:'内容1'}},
         {name: 'tab2', label: '安全设置', component: spWrapper, props: {title:'内容2'}},
         {name: 'tab3', label: '账号绑定', component: spWrapper, props: {title:'内容3'}},
         {name: 'tab4', label: '新消息通知', component: spWrapper, props: {title:'内容4'}}
      ]
    }
  }
}
</script>

```
:::