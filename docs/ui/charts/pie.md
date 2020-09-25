# 饼图

## 基础用法

:::demo
```html
<template>
 <sp-chart-pie :data="data"></sp-chart-pie>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
      }
    }
  }
}
</script>

```
:::

## 设置中心位置

:::demo
```html
<template>
 <sp-chart-pie :data="data" :settings="settings"></sp-chart-pie>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
      },
      settings: {
        center: ['30%', '50%']
      }
    }
  }
}
</script>

```
:::

## 设置半径

:::demo
```html
<template>
 <sp-chart-pie :data="data" :settings="settings"></sp-chart-pie>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
      },
      settings: {
        radius: [0, '50%']
      }
    }
  }
}
</script>

```
:::

## 环形

:::demo
```html
<template>
 <sp-chart-pie :data="data" :settings="settings"></sp-chart-pie>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
      },
      settings: {
        radius: ['50%', '70%']
      }
    }
  }
}
</script>

```
:::

## 图例位置

:::demo
```html
<template>
 <sp-chart-pie :data="data" :settings="settings"></sp-chart-pie>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
      },
      settings: {
        legend: 'vertical'
      }
    }
  }
}
</script>

```
:::

## 玫瑰图

:::demo
```html
<template>
 <sp-chart-pie :data="data" :settings="settings"></sp-chart-pie>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330]
          ]
      },
      settings: {
        roseType: true
      }
    }
  }
}
</script>

```
:::

## 限制数据项

如果数据项目过多，可以限制个数，超出的合并到 其他

:::demo
```html
<template>
 <sp-chart-pie :data="data" :settings="settings"></sp-chart-pie>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330],
              ['其他1', 20],
              ['其他2', 10],
              ['其他3', 9],
              ['其他4', 8],
              ['其他5', 2]
          ]
      },
      settings: {
        limit: 5
      }
    }
  }
}
</script>

```
:::

## 层级

:::demo
```html
<template>
 <sp-chart-pie :data="data" :settings="settings" debug></sp-chart-pie>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['渠道', '访问量'],
          rows: [
              ['直接访问', 320],
              ['邮件营销', 302],
              ['联盟广告', 334],
              ['视频广告', 390],
              ['搜索引擎', 330],
              ['电梯广告', 320]
          ]
      },
      settings: {
        radius: ['20%', '80%'],
        levelGap: 15,
        level: [['视频广告','搜索引擎'], ['直接访问','邮件营销'], ['电梯广告', '联盟广告']],
        legend: 'vertical'
      }
    }
  }
}
</script>

```
:::



