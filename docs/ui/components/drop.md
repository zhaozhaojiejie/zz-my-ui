# Drop 放置

## 何时使用

接收拖放元素，需要与spDrag组件结合使用  组件文档 <api-link href="components/sp-drop">spDrop</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
 <el-row>
  <el-col :span="8">
   <sp-drag>请把我拖到目标处</sp-drag>
  </el-col>
   <el-col :span="16">
    <sp-drop @enter="handleEnter"
             @leave="handleLeave"
             @drop="handleDrop">{{text}}</sp-drop>
   </el-col>
 </el-row>
</template>

<script>
import {spDrag, spDrop} from '$ui'
export default {
  components: {
    spDrag,
    spDrop
  },
  data() {
    return {
      text: '请放置在这里'
    }
  },
  methods: {
    handleEnter() {
      this.text = '已进入'
    },
    handleLeave() {
      this.text = '已离开'
    },
    handleDrop() {
      this.text = '已放置'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  height: 200px;
}
.sp-drag {
  width: 100px;
  height: 100px;
  background: #c2e7b0;
  z-index: 1;
}
.sp-drop {
  width:200px;
  height: 200px;
  background: #8cc5ff;
}
</style>

```
:::

### 接受
`accept` 可设置数组，接受多个分组
:::demo
```html
<template>
 <el-row>
  <el-col :span="6">
   <sp-drag group="demo">请把我拖到目标处</sp-drag>
  </el-col>
   <el-col :span="6">
     <sp-drag>我是不能被放置的</sp-drag>
   </el-col>
   <el-col :span="12">
    <sp-drop accept="demo" 
             @enter="handleEnter"
             @leave="handleLeave"
             @drop="handleDrop">{{text}}</sp-drop>
   </el-col>
 </el-row>
</template>

<script>
import {spDrag, spDrop} from '$ui'
export default {
  components: {
    spDrag,
    spDrop
  },
  data() {
    return {
      text: '请放置在这里'
    }
  },
  methods: {
    handleEnter() {
      this.text = '已进入'
    },
    handleLeave() {
      this.text = '已离开'
    },
    handleDrop() {
      this.text = '已放置'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  height: 200px;
}
.sp-drag {
  width: 100px;
  height: 100px;
  background: #c2e7b0;
  z-index: 1;
}
.sp-drop {
  width:200px;
  height: 200px;
  background: #8cc5ff;
}
</style>

```
:::

### 阻止事件传播

sp-drop 可以嵌套，如果子组件放置时，可以阻止父组件触发放置事件

:::demo
```html
<template>
 <el-row>
   <el-col :span="12">
     <sp-drag>我是不能被放置的</sp-drag>
   </el-col>
   <el-col :span="12">
     <sp-drop class="parent"
              prevent
              @drop="handleDrop('parent')">
              parent
           <sp-drop class="child" 
                    prevent
                    @drop="handleDrop('child')">
                           child
             </sp-drop>
             
     </sp-drop>
   </el-col>
 </el-row>
</template>

<script>
import {spDrag, spDrop} from '$ui'
export default {
  components: {
    spDrag,
    spDrop
  },
  data() {
    return {
      text: '请放置在这里'
    }
  },
  methods: {
    handleDrop(where) {
      this.$message.info('放置在：'+where)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  height: 300px;
}
.sp-drag {
  width: 100px;
  height: 100px;
  background: #c2e7b0;
  z-index: 1;
}
.parent {
  width:300px;
  height: 300px;
  background: #8cc5ff;
}
.child {
    width:250px;
    height: 150px;
    margin: auto;
    background: #d3f261;
}
</style>

```
:::


### 高亮

可以设置 激活高亮 和 进入高亮

:::demo
```html
<template>
 <el-row>
  <el-col :span="8">
   <sp-drag>请把我拖到目标处</sp-drag>
  </el-col>
   <el-col :span="16">
    <sp-drop active-highlight 
             enter-highlight 
             @enter="handleEnter"
             @leave="handleLeave"
             @drop="handleDrop">{{text}}</sp-drop>
   </el-col>
 </el-row>
</template>

<script>
import {spDrag, spDrop} from '$ui'
export default {
  components: {
    spDrag,
    spDrop
  },
  data() {
    return {
      text: '请放置在这里'
    }
  },
  methods: {
    handleEnter() {
      this.text = '已进入'
    },
    handleLeave() {
      this.text = '已离开'
    },
    handleDrop() {
      this.text = '已放置'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-col {
  height: 200px;
}
.sp-drag {
  width: 100px;
  height: 100px;
  background: #c2e7b0;
  z-index: 1;
}
.sp-drop {
  width:200px;
  height: 200px;
  background: #8cc5ff;
}
</style>

```
:::
