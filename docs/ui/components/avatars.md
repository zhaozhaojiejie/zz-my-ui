# Avatars 头像列表

一组用户头像，常用在项目/团队成员列表。可以设置尺寸，也可以限制最多显示数量。 
组件文档 <api-link href="components/sp-avatars">spAvatars</api-link>

## 代码示例

### 基础用法
:::demo(avatars-1)
```html
<template>
 <sp-avatars :data="data" size="large"></sp-avatars>
</template>
<script>
export default {
  data() {
    return {
      data: [
          {text: '陈', tooltip: '陈某某'},
          {text: '李', theme:'success', tooltip: '李某某'},
          {text: '张', theme:'danger', tooltip: '张某某'},
          {text: '王', theme:'warning', tooltip: '王某某'}
      ]
    }
  }
}
</script>

```
:::

### 显示最大数目
:::demo(avatars-2)
```html
<template>
 <sp-avatars :data="data" :max="2" size="large"></sp-avatars>
</template>
<script>
export default {
  data() {
    return {
      data: [
          {text: '陈', tooltip: '陈某某'},
          {text: '李', theme:'success', tooltip: '李某某'},
          {text: '张', theme:'danger', tooltip: '张某某'},
          {text: '王', theme:'warning', tooltip: '王某某'}
      ]
    }
  }
}
</script>

```
:::
