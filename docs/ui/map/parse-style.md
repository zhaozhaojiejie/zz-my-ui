# 覆盖物样式函数

## 基础用法

:::demo

```html
<template>
    <sp-map>  
      <sp-map-circle :center="[113.261999, 23.130592]"
                     :radius="20000"
                     :styleFunction="styleFn"
                      ></sp-map-circle>
    </sp-map>
</template>
<script>
import parseStyle from '$ui/map/utils/style'
export default {
  methods: {
    styleFn() {
      return parseStyle({
        fill: '#ff0000',
        stroke: {width:5, color:'#000'},
        text: {text: 'parseStyle', 'font': '20px', fill: 'pink'}
      })
    }
  }
}
</script>
```

:::
