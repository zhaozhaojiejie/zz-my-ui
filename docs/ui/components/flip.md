# Flip 数字反转

标签编辑 文档 <api-link href="components/my-flip"> MyFlip </api-link>

## 基础用法

:::demo

```html
<template>
  <div>
    <my-flip :number="firstNumber" size="mini" color="green"></my-flip>
    <my-flip :number="5" size="small" color="black"></my-flip>
  </div>
</template>

<script>
import {MyFlip} from '$ui'
export default {
  data() {
    return {
      timer: null,
      firstNumber: 0
    }
  },
  methods: {
      setTimes() {
        // 计时器翻页
        this.timer = window.setInterval(() => {
          if (this.firstNumber < 9) this.firstNumber++
          else {
            if (this.firstNumber === 9) {
              this.firstNumber < 9 ? this.firstNumber++ : this.firstNumber = 0
            }
            this.firstNumber = 0
          }
        }, 1000)
      }
    },
    created() {
      this.setTimes()
    },
    beforeDestroy() {
      window.clearInterval(this.timer)
    }
}
</script>

```

:::
