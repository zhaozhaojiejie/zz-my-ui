---
sidebar: false
navbar: false
---


:::demo
```html
<template>
 <my-form @submit="submitHandler">
    id: {{params.id}}
    <my-input name="content" label="消息内容"></my-input>
 </my-form>
</template>

<script>
import {provider} from '$ui/utils/bridge'

export default {
  data() {
    return {
      params: {},
      callbackFunc: null
    }
  },
  methods: {
    submitHandler(model) {
       this.callbackFunc && this.callbackFunc({
       ...this.params,
       ...model
       })
       setTimeout(window.close, 500)
    } 
  },
  created() {
    this.messager = provider({
      name: 'ServiceName',
      origin: '/my/bridge/index.html',
      handler: (params, callback) => {
        this.params = params
        this.callbackFunc = callback
      }
    })
  },
  beforeDestroy() {
    this.messager && this.messager.destroy()
  }
}
</script>

```
:::
