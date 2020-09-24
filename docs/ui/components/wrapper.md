# Wrapper 页面容器

页面容器，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。

通常与MyPro结合使用。

组件文档 <api-link href="components/my-wrapper">MyWrapper</api-link>

## 代码示例

### 基础用法

:::demo(wrapper-1)
```html
<template>
 <my-wrapper title="页面标题" sub-title="我是子标题" back>
   <div>
      页面主要内容，页面主要内容，页面主要内容，页面主要内容，页面主要内容
   </div>
 </my-wrapper>
</template>

<script>
import {MyWrapper} from '$ui'
export default {
  components: {
    MyWrapper
  }
}
</script>

```
:::

### 完整版功能
:::demo(wrapper-2)
```html
<template>
  <div style="background: #eee;">
   <my-wrapper title="页面标题"
                sub-title="我是子标题"
                back
                :split="true"
                :links="links"
                :default-active-link="1"
               :breadcrumb="breadcrumb">
     <template v-slot:extra>
        简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字简要说明文字
     </template>    
     
     <template v-slot:actions>
      <el-button-group>
        <el-button size="small" type="default">操作一</el-button>
        <el-button size="small" type="default">操作二</el-button>
      </el-button-group>
      <el-button size="small" type="primary">主操作</el-button>
      <el-dropdown type="default" size="small">
              <el-button type="text" icon="el-icon-more"></el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
      </el-dropdown>
    </template>    
    
    <my-container>子容器内容</my-container>
    <my-container>子容器内容</my-container>
     
     <div>
        页面主要内容，页面主要内容，页面主要内容，页面主要内容，页面主要内容
     </div>
     
    
   </my-wrapper>
   </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumb: [
        {label:'首页', to:'/'},
        {label:'应用列表'},
        {label:'应用详情'}
      ],
      links: [
        {
          label: '详情', value: 1
        },
        {
          label: '规则', value: 2
        }
      ]
    }
  }
}
</script>

```
:::
