# Panel 面板容器

Panel(面板)是一个容器，它具有特定的功能和结构部件，这使它成为面向应用用户界面的完美基石。<api-link href="components/sp-panel">sp-panel</api-link> 文档

## 何时使用

Panel可以包含底部和顶部的工具栏，以及独立的页眉，页脚和正文部分。符合上述的展示形式可使用。

## 代码演示

### 基础用法

:::demo
```html
<template>
 <sp-panel title="容器标题">
    我是内容
 </sp-panel>
</template>

```
:::

### 定义标题和图标

标题可以通过设置 `title` 属性 或 插槽定义，图标可以设置`icon`属性

:::demo
```html
<template>
 <sp-panel icon="el-icon-menu">
   <template v-slot:title>我是插槽定义的标题</template>
    我是内容
 </sp-panel>
</template>
```
:::

### 阴影显示时机

:::demo
```html
<template>
 <el-row :gutter="20">
    <el-col :span="8">
       <sp-panel title="容器标题" shadow="always">
          always
       </sp-panel>
    </el-col>
    <el-col :span="8">
       <sp-panel title="容器标题" shadow="hover">
          hover
       </sp-panel>
    </el-col>
    <el-col :span="8">
       <sp-panel title="容器标题" shadow="never">
          never
       </sp-panel>
    </el-col>
 </el-row>

</template>


```
:::

### 风格设置

:::demo
```html
<template>
  <div>
   <el-row :gutter="20">
      <el-col :span="8">
         <sp-panel title="容器标题" icon="el-icon-menu">
            默认风格
            <template v-slot:footer>底部</template>
         </sp-panel>
      </el-col>
      <el-col :span="8">
         <sp-panel title="容器标题" theme="background" icon="el-icon-menu">
            头部加背景
            <template v-slot:footer>底部</template>
         </sp-panel>
      </el-col>
      <el-col :span="8">
         <sp-panel title="容器标题" theme="border-top" icon="el-icon-menu">
            顶部加边框
            <template v-slot:footer>底部</template> 
         </sp-panel>
      </el-col>

   </el-row>
   <el-row :gutter="20">
      <el-col :span="8">
         <sp-panel title="容器标题" theme="border-left">
            标题左边框
            <template v-slot:footer>底部</template> 
         </sp-panel>
      </el-col>
      <el-col :span="8">
         <sp-panel title="容器标题" theme="flag" icon="el-icon-menu">
            标题标志
            <template v-slot:footer>底部</template> 
         </sp-panel>
      </el-col>
   </el-row>
  </div>
</template>


<style lang="scss" scoped>
.sp-panel {
  margin-top: 20px;
}
</style>

```
:::

### 尺寸设置

:::demo
```html
<template>
 <el-row :gutter="20">
    <el-col :span="6">
       <sp-panel title="容器标题" size="large">
          大尺寸
          <template v-slot:footer>
             <el-button type="primary">确定</el-button>
          </template> 
       </sp-panel>
    </el-col>
    <el-col :span="6">
       <sp-panel title="容器标题">
          默认
          <template v-slot:footer>
             <el-button type="primary" size="medium">确定</el-button>
          </template>  
       </sp-panel>
    </el-col>
    <el-col :span="6">
       <sp-panel title="容器标题" size="medium">
          中
          <template v-slot:footer>
             <el-button type="primary" size="small">确定</el-button>
          </template> 
       </sp-panel>
    </el-col>
    <el-col :span="6">
       <sp-panel title="容器标题" size="small">
          小
          <template v-slot:footer>
             <el-button type="primary" size="mini">确定</el-button>
          </template> 
       </sp-panel>
    </el-col>
 </el-row>

</template>


```
:::

### 适配父容器

:::demo
```html
<template>
  <div class="box">
   <sp-panel title="容器标题" icon="el-icon-menu" fit>
      <p v-for="n in 20" :key="n"> 占位文字 </p>
      <template v-slot:footer>
         <el-button size="small" type="primary">提交</el-button>
         <el-button size="small">取消</el-button>
      </template>
   </sp-panel>
   </div>
</template>

<style lang="scss" scoped>
.box {
   width: 800px;
   height:300px;
}
</style>


```
:::


### 隐藏边框

:::demo
```html
<template>
 <sp-panel title="容器标题" icon="el-icon-menu" :border="false" shadow="never">
    我是内容
 </sp-panel>
</template>


```
:::

### 设置底部对齐方式

:::demo
```html
<template>
 <el-row :gutter="20">
    <el-col :span="8">
       <sp-panel title="容器标题" footer-align="left">

      <template v-slot:footer>
         <el-button size="small" type="primary">提交</el-button>
         <el-button size="small">取消</el-button>
      </template>
          
       </sp-panel>
    </el-col>
    <el-col :span="8">
       <sp-panel title="容器标题" footer-align="center">
        <template v-slot:footer>
           <el-button size="small" type="primary">提交</el-button>
           <el-button size="small">取消</el-button>
        </template>
       </sp-panel>
    </el-col>
    <el-col :span="8">
       <sp-panel title="容器标题" footer-align="right">
          <template v-slot:footer>
             <el-button size="small" type="primary">提交</el-button>
             <el-button size="small">取消</el-button>
          </template>
       </sp-panel>
    </el-col>
 </el-row>

</template>


```
:::

### 定义操作区内容

:::demo
```html
<template>
  <div>
   <sp-panel title="容器标题" theme="border-top">
     <template v-slot:handle>
       <el-button type="text">MORE</el-button>
     </template>
      我是内容
   </sp-panel>
   
   <sp-panel title="容器标题" theme="border-left">
     <template v-slot:handle>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"  size="small"></el-button>
        <el-button type="primary" icon="el-icon-share"  size="small"></el-button>
        <el-button type="primary" icon="el-icon-delete" size="small"></el-button>
      </el-button-group>
     </template>
      我是内容
   </sp-panel>
   
   <sp-panel title="容器标题" theme="flag">
     <template v-slot:handle>
        <el-pagination
          small
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
     </template>
      我是内容
   </sp-panel>
   
  </div>
</template>


<style lang="scss" scoped>
.sp-panel {
  margin-bottom: 2rem;
}
</style>
```
:::

### 选项卡头部
:::demo
```html
<template>
 <sp-panel :tabs="tabs">
    <template v-slot:tab1> Tab1 Content</template>
    <template v-slot:tab2> Tab2 Content</template>
    <template v-slot:tab3> Tab3 Content</template>
     <template v-slot:handle>
      <el-button-group>
        <el-button icon="el-icon-edit"  size="mini"></el-button>
        <el-button icon="el-icon-share"  size="mini"></el-button>
        <el-button icon="el-icon-delete" size="mini"></el-button>
      </el-button-group>
     </template>
 </sp-panel>
</template>

<script>
export default {
  data() {
    return {
       tabs: [
          { label: '选项卡一', name: 'tab1'},
          { label: '选项卡二', name: 'tab2'},
          { label: '选项卡三', name: 'tab3'}
      ]
    }
  }
}
</script>

```
:::

### 底部操作按钮

:::demo
```html
<template>
 <sp-panel title="容器标题" :actions="actions" @action="handleAction">
    我是内容
 </sp-panel>
</template>

<script>
export default {
  data() {
    return {
        actions: [
          {
            text: '按钮一',
            icon: 'el-icon-setting'
          },
          {text: '按钮二'},
          {text: '按钮三'},
          {
            icon: 'el-icon-more'
          }
        ]
    }
  },
  methods: {
    handleAction(action) {
       alert(action.text)
    }
  }
}
</script>

```
:::

### 设置角标
:::demo
```html
<template>
 <sp-panel title="容器标题">
    <sp-corner-mark>角标</sp-corner-mark>
 </sp-panel>
</template>

```
:::