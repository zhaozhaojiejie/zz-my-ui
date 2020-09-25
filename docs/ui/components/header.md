# Header 头部

头部组件，分类或分隔展示信息时使用。组件<api-link href="components/sp-header">spHeader</api-link>  

## 何时使用

在需要对信息进行分类展示时

## 代码演示

### 基础用法

可以定义`title`标题文字 和 `icon`图标

:::demo
```html
<template>
   <sp-header title="我是标题文字" icon="el-icon-menu"></sp-header>
</template>

<script>
import {spHeader} from '$ui'
export default {
  components: {
    spHeader
  }
}
</script>

```
:::

### 显示背景色

:::demo
```html
<template>
   <sp-header title="我是标题文字" icon="el-icon-menu" background></sp-header>
</template>

<script>
import {spHeader} from '$ui'
export default {
  components: {
    spHeader
  }
}
</script>

```
:::



### 主题和尺寸

支持 `large`, 默认, `medium`, `small` 4种尺寸。

支持 `default` `border-left` `border-top` `border-bottom` `bg-icon` `bg-down` `bg-right` 7种风格。

:::demo
```html
<template>
   <div>
      <sp-header title="我是标题文字" icon="el-icon-menu" background size="large"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" background></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" background size="medium"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" background size="small"></sp-header>
      
      <hr>
      
      <sp-header title="我是标题文字" theme="border-left" background size="large"></sp-header>
      <sp-header title="我是标题文字" theme="border-left" background></sp-header>
      <sp-header title="我是标题文字" theme="border-left" background size="medium"></sp-header>
      <sp-header title="我是标题文字" theme="border-left" background size="small"></sp-header>
      
      <hr>
       
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="border-top" background size="large"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="border-top" background></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="border-top" background size="medium"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="border-top" background size="small"></sp-header>
      
      <hr>
      
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="border-bottom" background size="large"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="border-bottom" background></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="border-bottom" background size="medium"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="border-bottom" background size="small"></sp-header>
    
      <hr>
      
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-icon" background size="large"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-icon" background></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-icon" background size="medium"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-icon" background size="small"></sp-header>
    
      <hr>
      
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-down" background size="large"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-down" background></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-down" background size="medium"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-down" background size="small"></sp-header>
      
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-right" background size="large"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-right" background></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-right" background size="medium"></sp-header>
      <sp-header title="我是标题文字" icon="el-icon-menu" theme="bg-right" background size="small"></sp-header>
   </div>
</template>

<script>
import {spHeader} from '$ui'
export default {
  components: {
    spHeader
  }
}
</script>

```
:::

### 插槽

支持 `title` 和 `handle` 插槽定义标题和工具区

:::demo
```html
<template>
   <sp-header icon="el-icon-menu" background>
     <template v-slot:title>我是插槽定义的标题</template>
     <template v-slot:handle>
        <el-button type="primary" size="small">新增</el-button>
     </template>
  </sp-header>
</template>

<script>
import {spHeader} from '$ui'
export default {
  components: {
    spHeader
  }
}
</script>

```
:::

### 常见使用场景

:::demo
```html
<template>
   <div>
     <sp-header title="我是标题文字" icon="el-icon-menu" background>
       <template v-slot:handle>
          <el-button type="text" icon="el-icon-more">更多</el-button>
       </template>
     </sp-header>
      
     <sp-header title="我是插槽定义的标题" icon="el-icon-menu" theme="bg-right" size="small">
       <template v-slot:handle>
          <el-pagination
            small
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
       </template>
    </sp-header>
    
     <sp-header title="我是标题" icon="el-icon-menu" theme="bg-right" size="medium">
       <template v-slot:handle>
        <el-radio-group v-model="radio" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" ></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
       </template>
    </sp-header>
    
     <sp-header title="我是标题" icon="el-icon-menu" theme="border-bottom">
       <template v-slot:handle>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
       </template>
    </sp-header>
    
   </div>

</template>

<script>
import {spHeader} from '$ui'
export default {
  components: {
    spHeader
  },
  data() {
    return {
      radio: '北京'
    }
  }
}
</script>

```
:::


