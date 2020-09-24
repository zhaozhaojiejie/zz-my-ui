# Timer 计时器

支持秒表模式 和 计时模式。 文档 <api-link href="components/my-tag-timer">MyTimer</api-link>

## 何时使用

需要进行时间计数时

## 代码演示

### 秒表模式

:::demo
```html
<template>
  <div>
   默认计时： <my-timer auto></my-timer> <br>
   指定结束时间： <my-timer :target="10" auto></my-timer>  
   <my-timer target="00:01:00" auto></my-timer> <br>
   指定显示格式： <my-timer :target="60" auto format="ss"></my-timer>  <br>
   手动触发  <my-timer ref="timer"></my-timer> 
   <el-button size="mini" @click="start">开始</el-button>
    <el-button size="mini" @click="stop">停止</el-button>
    <el-button size="mini" @click="reset">重置</el-button>
      <br>
      
     颜色：<my-timer auto type="primary"></my-timer>
      <my-timer auto type="success"></my-timer>
       <my-timer auto type="warning"></my-timer> 
       <my-timer auto type="danger"></my-timer>
       <my-timer auto type="info"></my-timer> <br>
       
     毫秒级：  <my-timer auto :interval="10" format="H:mm:ss.SSS"></my-timer> 
       
  </div>
</template>

<script>
import {MyTimer} from '$ui'
export default {
  components: {
    MyTimer
  },
  methods: {
    start() {
      this.$refs.timer.start()
    },
     stop() {
      this.$refs.timer.stop()
    },
     reset() {
      this.$refs.timer.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.my-timer {
 margin: 10px
}
</style>

```
:::

### 计时器（倒数）模式

:::demo
```html
<template>
  <div>
   默认计时： <my-timer countdown auto></my-timer> <br>
   指定结束时间： <my-timer :target="10" countdown auto></my-timer>
     <my-timer target="00:01:00" countdown auto></my-timer>  <br>
   指定显示格式： <my-timer :target="60" countdown auto format="ss"></my-timer>  <br>
   手动触发  <my-timer ref="timer" countdown></my-timer> 
   <el-button size="mini" @click="start">开始</el-button>
    <el-button size="mini" @click="stop">停止</el-button>
    <el-button size="mini" @click="reset">重置</el-button>
      <br>
      
     颜色：<my-timer countdown auto type="primary"></my-timer>
      <my-timer countdown auto type="success"></my-timer>
       <my-timer countdown auto type="warning"></my-timer> 
       <my-timer countdown auto type="danger"></my-timer>
       <my-timer countdown auto type="info"></my-timer> <br>
       
     毫秒级：  <my-timer countdown target="1:00:00" auto :interval="10" format="H:mm:ss.SSS"></my-timer> 
       
  </div>
</template>

<script>
import {MyTimer} from '$ui'
export default {
  components: {
    MyTimer
  },
  methods: {
    start() {
      this.$refs.timer.start()
    },
     stop() {
      this.$refs.timer.stop()
    },
     reset() {
      this.$refs.timer.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.my-timer {
 margin: 10px
}
</style>

```
:::
