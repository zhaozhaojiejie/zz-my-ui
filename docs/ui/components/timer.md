# Timer 计时器

支持秒表模式 和 计时模式。 文档 <api-link href="components/sp-tag-timer">spTimer</api-link>

## 何时使用

需要进行时间计数时

## 代码演示

### 秒表模式

:::demo
```html
<template>
  <div>
   默认计时： <sp-timer auto></sp-timer> <br>
   指定结束时间： <sp-timer :target="10" auto></sp-timer>  
   <sp-timer target="00:01:00" auto></sp-timer> <br>
   指定显示格式： <sp-timer :target="60" auto format="ss"></sp-timer>  <br>
   手动触发  <sp-timer ref="timer"></sp-timer> 
   <el-button size="mini" @click="start">开始</el-button>
    <el-button size="mini" @click="stop">停止</el-button>
    <el-button size="mini" @click="reset">重置</el-button>
      <br>
      
     颜色：<sp-timer auto type="primary"></sp-timer>
      <sp-timer auto type="success"></sp-timer>
       <sp-timer auto type="warning"></sp-timer> 
       <sp-timer auto type="danger"></sp-timer>
       <sp-timer auto type="info"></sp-timer> <br>
       
     毫秒级：  <sp-timer auto :interval="10" format="H:mm:ss.SSS"></sp-timer> 
       
  </div>
</template>

<script>
import {spTimer} from '$ui'
export default {
  components: {
    spTimer
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
.sp-timer {
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
   默认计时： <sp-timer countdown auto></sp-timer> <br>
   指定结束时间： <sp-timer :target="10" countdown auto></sp-timer>
     <sp-timer target="00:01:00" countdown auto></sp-timer>  <br>
   指定显示格式： <sp-timer :target="60" countdown auto format="ss"></sp-timer>  <br>
   手动触发  <sp-timer ref="timer" countdown></sp-timer> 
   <el-button size="mini" @click="start">开始</el-button>
    <el-button size="mini" @click="stop">停止</el-button>
    <el-button size="mini" @click="reset">重置</el-button>
      <br>
      
     颜色：<sp-timer countdown auto type="primary"></sp-timer>
      <sp-timer countdown auto type="success"></sp-timer>
       <sp-timer countdown auto type="warning"></sp-timer> 
       <sp-timer countdown auto type="danger"></sp-timer>
       <sp-timer countdown auto type="info"></sp-timer> <br>
       
     毫秒级：  <sp-timer countdown target="1:00:00" auto :interval="10" format="H:mm:ss.SSS"></sp-timer> 
       
  </div>
</template>

<script>
import {spTimer} from '$ui'
export default {
  components: {
    spTimer
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
.sp-timer {
 margin: 10px
}
</style>

```
:::
