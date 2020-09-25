# Avatar 头像
用来代表用户或事物，支持图片、图标或字符展示。
组件文档 <api-link href="components/sp-avatar">spAvatar</api-link>

## 代码演示

### 基本

头像有三种尺寸，两种形状可选。

:::demo
```html
<template>
  <div>
     <el-row>
        <sp-avatar icon="el-icon-user" :size="64"></sp-avatar>
        <sp-avatar icon="el-icon-user" size="large"></sp-avatar>
        <sp-avatar icon="el-icon-user"></sp-avatar>
        <sp-avatar icon="el-icon-user" size="small"></sp-avatar>
    </el-row>
     <el-row>
        <sp-avatar icon="el-icon-user" :size="64" shape="square"></sp-avatar>
        <sp-avatar icon="el-icon-user" size="large" shape="square"></sp-avatar>
        <sp-avatar icon="el-icon-user" shape="square"></sp-avatar>
        <sp-avatar icon="el-icon-user" size="small" shape="square"></sp-avatar>
    </el-row>
  </div>
</template>

<script>
import {spAvatar} from '$ui'
export default {
  components: {
    spAvatar
  }
}
</script>

<style lang="scss" scoped>
  .sp-avatar {
      margin-left: 20px;
      margin-bottom: 20px;
  }
</style>

```
:::

### 自动调整字符大小
对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

:::demo
```html
<template>
  <div>
    <sp-avatar size="large" :style="{background:color}">{{user}}</sp-avatar>
    <el-button @click="handleClick" size="small" style="margin-left: 20px">change</el-button>
  </div>
</template>
<script>
import {spAvatar} from '$ui'

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

export default {
  components: {
    spAvatar
  },
  data() {
    this.index = 0
    return {
      user: UserList[0],
      color: ColorList[0]
    }
  },
  methods: {
    handleClick() {
       ++this.index
      if(this.index > UserList.length -1){
        this.index = 0
      }
      this.user = UserList[this.index]
      this.color = ColorList[this.index]
    }
  }
}
</script>

```
:::

### 类型

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

:::demo
```html
<template>
  <div>
    <sp-avatar icon="el-icon-user"></sp-avatar> 
     <sp-avatar>U</sp-avatar> 
     <sp-avatar>USER</sp-avatar> 
     <sp-avatar src="/xdh-web/img/avatar.jpeg"></sp-avatar> 
     <sp-avatar style="color: #f56a00; background: #fde3cf;">U</sp-avatar> 
     <sp-avatar icon="el-icon-user" style="background:#87d068;"></sp-avatar> 
  </div>
</template>

<script>
import {spAvatar} from '$ui'
export default {
  components: {
    spAvatar
  }
}
</script>

<style lang="scss" scoped>
  .sp-avatar {
      margin-left: 20px;
      margin-bottom: 20px;
  }
</style>

```
:::

### 带徽标的头像
通常用于消息提示。

:::demo
```html
<template>
  <div>
   <el-badge value="9">
     <sp-avatar icon="el-icon-user" size="large" shape="square"></sp-avatar>
   </el-badge>
   <el-badge is-dot>
     <sp-avatar icon="el-icon-user" size="large" shape="square"></sp-avatar>
   </el-badge>
  </div>
</template>
<script>
import {spAvatar} from '$ui'
export default {
  components: {
    spAvatar
  }
}
</script>

<style lang="scss" scoped>
  .sp-avatar {
      margin-left: 20px;
      margin-bottom: 20px;
  }
</style>

```
:::
