---
sidebar: false
navbar: false
---


:::demo
```html
<template>
  <div>
     <el-button @click="reply"> 回复信息 </el-button>
     <my-list :data="list">
        <template v-slot:header>
             <my-header title="收到的消息" theme="border-left" background></my-header>
        </template>
     </my-list>
  </div>
</template>

<script>
import {on, fire} from '$ui/utils/bridge'
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {
    reply() {
     const data = {content: `回复内容：${new Date().getTime()}`}
      fire({
       bridge: '/my/bridge/index.html',
       channel: 'ReplyMessageChannel',
       data: data
      })
      this.$message.success('回复成功')
    },
    messageHandler(data) {
      this.list.push(data)
    }
  },
  created() {
    this.messager = on('SendDialogMessageChannel', this.messageHandler)
  },
  beforeDestroy() {
     this.messager &&  this.messager.destroy()
  }
}
</script>

```
:::
