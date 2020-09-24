# Drop 放置

## 何时使用

接收拖放元素，需要与MyDrag组件结合使用  组件文档 <api-link href="components/my-drop">MyDrop</api-link>

## 代码示例

### 基础用法

:::demo
```html
<template>
 <el-row>
  <el-col :span="8">
   <my-drag>请把我拖到目标处</my-drag>
  </el-col>
   <el-col :span="16">
    <my-drop @enter="handleEnter"
             @leave="handleLeave"
             @drop="handleDrop">{{text}}</my-drop>
   </el-col>
 </el-row>
</template>

<script>
import {MyDrag, MyDrop} from '$ui'
export default {
  components: {
    MyDrag,
    MyDrop
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
.my-drag {
  width: 100px;
  height: 100px;
  background: #c2e7b0;
  z-index: 1;
}
.my-drop {
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
   <my-drag group="demo">请把我拖到目标处</my-drag>
  </el-col>
   <el-col :span="6">
     <my-drag>我是不能被放置的</my-drag>
   </el-col>
   <el-col :span="12">
    <my-drop accept="demo" 
             @enter="handleEnter"
             @leave="handleLeave"
             @drop="handleDrop">{{text}}</my-drop>
   </el-col>
 </el-row>
</template>

<script>
import {MyDrag, MyDrop} from '$ui'
export default {
  components: {
    MyDrag,
    MyDrop
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
.my-drag {
  width: 100px;
  height: 100px;
  background: #c2e7b0;
  z-index: 1;
}
.my-drop {
  width:200px;
  height: 200px;
  background: #8cc5ff;
}
</style>

```
:::

### 阻止事件传播

my-drop 可以嵌套，如果子组件放置时，可以阻止父组件触发放置事件

:::demo
```html
<template>
 <el-row>
   <el-col :span="12">
     <my-drag>我是不能被放置的</my-drag>
   </el-col>
   <el-col :span="12">
     <my-drop class="parent"
              prevent
              @drop="handleDrop('parent')">
              parent
           <my-drop class="child" 
                    prevent
                    @drop="handleDrop('child')">
                           child
             </my-drop>
             
     </my-drop>
   </el-col>
 </el-row>
</template>

<script>
import {MyDrag, MyDrop} from '$ui'
export default {
  components: {
    MyDrag,
    MyDrop
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
.my-drag {
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
   <my-drag>请把我拖到目标处</my-drag>
  </el-col>
   <el-col :span="16">
    <my-drop active-highlight 
             enter-highlight 
             @enter="handleEnter"
             @leave="handleLeave"
             @drop="handleDrop">{{text}}</my-drop>
   </el-col>
 </el-row>
</template>

<script>
import {MyDrag, MyDrop} from '$ui'
export default {
  components: {
    MyDrag,
    MyDrop
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
.my-drag {
  width: 100px;
  height: 100px;
  background: #c2e7b0;
  z-index: 1;
}
.my-drop {
  width:200px;
  height: 200px;
  background: #8cc5ff;
}
</style>

```
:::
