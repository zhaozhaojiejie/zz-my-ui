# 雷达图

## 基础用法

:::demo
```html
<template>
  <div>
    <my-chart-radar :data="data"></my-chart-radar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: {
          columns: ['指标名称', '销售', '管理', '客服', '研发', '市场'],
          rows: [
            ['预算分配', 20, 50, 80, 29, 55, 60],
            ['实际开销', 30, 60, 30, 79, 45, 80]
          ]
        }
      }
    }
  }
</script>


```
:::
