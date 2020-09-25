# 折线图

`sp-chart-line`

## 基本用法


:::demo(line-1)
```html
<template>
   <sp-chart-line :data="data"></sp-chart-line>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['月份', '访问量'],
        rows: [
            ['一月', 100],
            ['二月', 60],
            ['三月', 78],
            ['四月', 90],
            ['五月', 110],
            ['六月', 87],
            ['七月', 90],
            ['八月', 75],
            ['九月', 63],
            ['十月', 80],
            ['十一月', 90],
            ['十二月', 105]
        ]
      }
    }
  }
}

</script>

```
:::

## 设置类目轴

默认类目轴是x轴，可以通过设置`direction`改为y轴

:::demo(line-2)
```html
<template>
   <sp-chart-line :data="data" :settings="settings"></sp-chart-line>
</template>

<script>

export default {
  data() {
    return {
      data: {
        columns: ['月份', '访问量'],
        rows: [
            ['一月', 100],
            ['二月', 60],
            ['三月', 78],
            ['四月', 90],
            ['五月', 110],
            ['六月', 87],
            ['七月', 90],
            ['八月', 75],
            ['九月', 63],
            ['十月', 80],
            ['十一月', 90],
            ['十二月', 105]
        ]
      },
      settings: {
        direction:'y'
      }
    }
  }
}

</script>

```
:::

## 设置Label

数据项的标签设置，字符类型设置`position`， 对象与原生`series.label`设置一致

:::demo(line-3)
```html
<template>
   <sp-chart-line :data="data" :settings="settings"></sp-chart-line>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['月份', '访问量'],
        rows: [
            ['一月', 100],
            ['二月', 60],
            ['三月', 78],
            ['四月', 90],
            ['五月', 110],
            ['六月', 87],
            ['七月', 90],
            ['八月', 75],
            ['九月', 63],
            ['十月', 80],
            ['十一月', 90],
            ['十二月', 105]
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


## 多条折线

:::demo(line-4)
```html
<template>
   <sp-chart-line :data="data"></sp-chart-line>
</template>

<script>

export default {
  data() {
    return {
      data: {
        columns: ['月份', '访问量', '成交量'],
        rows: [
            ['一月', 100, 30],
            ['二月', 60, 20],
            ['三月', 78, 25],
            ['四月', 90, 40],
            ['五月', 110, 70],
            ['六月', 87, 60],
            ['七月', 90, 76],
            ['八月', 75, 45],
            ['九月', 63, 46],
            ['十月', 80, 70],
            ['十一月', 90, 85],
            ['十二月', 105, 96]
        ]
      }
    }
  }
}

</script>

```
:::

## 双值轴

:::demo(line-5)
```html
<template>
   <sp-chart-line :data="data" :settings="settings"></sp-chart-line>
</template>

<script>
import 'echarts/lib/chart/bar'

export default {
  data() {
    return {
      data: {
        columns: ['月份', '访问量', '留存率'],
        rows: [
            ['一月', 100, 30],
            ['二月', 60, 20],
            ['三月', 78, 25],
            ['四月', 90, 40],
            ['五月', 110, 70],
            ['六月', 87, 60],
            ['七月', 90, 76],
            ['八月', 75, 45],
            ['九月', 63, 46],
            ['十月', 80, 70],
            ['十一月', 90, 85],
            ['十二月', 105, 96]
        ]
      },
      settings: {
        valueAxis: ['访问量', '留存率']
      }
    }
  }
}

</script>

```
:::


## 堆叠

:::demo(line-6)
```html
<template>
   <sp-chart-line :data="data" :settings="settings" :extend="extend"></sp-chart-line>
</template>

<script>

export default {
  data() {
    return {
      data: {
        columns: ['月份', '直接访问', '搜索引擎'],
        rows: [
            ['一月', 100, 30],
            ['二月', 60, 20],
            ['三月', 78, 25],
            ['四月', 90, 40],
            ['五月', 110, 70],
            ['六月', 87, 60],
            ['七月', 90, 76],
            ['八月', 75, 45],
            ['九月', 63, 46],
            ['十月', 80, 70],
            ['十一月', 90, 85],
            ['十二月', 105, 96]
        ]
      },
      settings: {
        stack: ['直接访问', '搜索引擎']
      },
      extend: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
         xAxis: {
           boundaryGap: false
         }
      }
    }
  }
}

</script>

```
:::


## 混合柱状图

:::demo(line-7)
```html
<template>
   <sp-chart-line :data="data" :settings="settings" :extend="extend"></sp-chart-line>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['月份', '访问量', '留存率'],
        rows: [
            ['一月', 100, 30],
            ['二月', 60, 20],
            ['三月', 78, 25],
            ['四月', 90, 40],
            ['五月', 110, 70],
            ['六月', 87, 60],
            ['七月', 90, 76],
            ['八月', 75, 45],
            ['九月', 63, 46],
            ['十月', 80, 70],
            ['十一月', 90, 85],
            ['十二月', 105, 96]
        ]
      },
      settings: {
        valueAxis: ['访问量', '留存率'],
        bars: ['访问量']
      },
      extend: {
        yAxis: {
          splitLine: false
        }
      }
    }
  }
}

</script>

```
:::

## 旋转类目Label

:::demo(line-8)
```html
<template>
   <sp-chart-line :data="data" :settings="settings" :extend="extend"></sp-chart-line>
</template>

<script>
export default {
  data() {
    return {
      data: {
        columns: ['月份', '访问量', '留存率'],
        rows: [
            ['一月', 100, 30],
            ['二月', 60, 20],
            ['三月', 78, 25],
            ['四月', 90, 40],
            ['五月', 110, 70],
            ['六月', 87, 60],
            ['七月', 90, 76],
            ['八月', 75, 45],
            ['九月', 63, 46],
            ['十月', 80, 70],
            ['十一月', 90, 85],
            ['十二月', 105, 96]
        ]
      },
      settings: {
        valueAxis: ['访问量', '留存率'],
        bars: ['访问量']
      },
      extend: {
        yAxis: {
          splitLine: false
        },
        xAxis: {
           axisLabel: {
             interval: 0,
             rotate: 45
           }
        }
      }
    }
  }
}

</script>

```
:::

