# 柱状图

## 基础用法

:::demo
```html
<template>
  <my-chart-bar :data="data"></my-chart-bar>
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

## 设置柱间距离

:::demo
```html
<template>
  <my-chart-bar :data="data" :extend="extend"></my-chart-bar>
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
      extend: {
        series: {
          barCategoryGap: '50%'
        }
      }
    }
  }
}
</script>

```
:::

## 设置类目轴

:::demo
```html
<template>
  <my-chart-bar :data="data" :settings="settings"></my-chart-bar>
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
        direction: 'y'
      }
    }
  }
}
</script>

```
:::

## 设置label

:::demo
```html
<template>
  <my-chart-bar :data="data" :settings="settings"></my-chart-bar>
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
         label: 'top'
       }
    }
  }
}
</script>

```
:::

## 多个柱

:::demo
```html
<template>
  <my-chart-bar :data="data" :settings="settings"></my-chart-bar>
</template>

<script>
export default {
  data() {
    return {
      data: {
          columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          rows: [
              ['周一', 320, 302, 301, 334, 390, 330, 320],
              ['周二', 120, 132, 101, 134, 90, 230, 210],
              ['周三', 220, 182, 191, 234, 290, 330, 310],
              ['周四', 150, 212, 201, 154, 190, 330, 410],
              ['周五', 320, 132, 401, 334, 290, 330, 320]
          ]
      }
    }
  }
}
</script>

```
:::


## 堆叠

:::demo
```html
<template>
  <my-chart-bar :data="data" :settings="settings"></my-chart-bar>
</template>

<script>
export default {
  data() {
    return {
      data: {
          columns: ['星期', '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
          rows: [
              ['周一', 320, 302, 301, 334, 390, 330, 320],
              ['周二', 120, 132, 101, 134, 90, 230, 210],
              ['周三', 220, 182, 191, 234, 290, 330, 310],
              ['周四', 150, 212, 201, 154, 190, 330, 410],
              ['周五', 320, 132, 401, 334, 290, 330, 320]
          ]
      },
      settings: {
        stack: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      }
    }
  }
}
</script>

```
:::
