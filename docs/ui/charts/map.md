# 地图

ECharts的基于地理坐标系的图表，如：`map` `scatter` `effectScatter` `lines` 可使用该组件实现。

## 基础地图

:::demo(chart-map-1)
```html
<template>
   <my-chart-map :data="data" :register="register" map="china"></my-chart-map>
</template>

<script>
import china from '$ui/charts/geo/china.json'
export default {
  data() {
    return {
      register: china,
      data: {
        columns: ['省份', '人口数量'],
        rows: [
            ['广东', 100],
            ['北京', 60],
            ['广西', 78],
            ['湖南', 90],
            ['湖北', 110],
            ['福建', 87],
            ['新疆', 90],
            ['贵州', 75],
            ['江苏', 63],
            ['山西', 80],
            ['山东', 90],
            ['黑龙江', 105]
        ]
      }
    }
  }
}

</script>

```
:::

## 散点图

:::demo(chart-map-2)
```html
<template>
   <my-chart-map :data="data" :register="register" map="china" :settings="settings"></my-chart-map>
</template>

<script>
import china from '$ui/charts/geo/china.json'
export default {
  data() {
    return {
      register: china,
      data: {
        columns: ['省份', '人口数量'],
        rows: [
            ['广东', 100],
            ['北京', 60],
            ['广西', 78],
            ['湖南', 90],
            ['湖北', 110],
            ['福建', 87],
            ['新疆', 90],
            ['贵州', 75],
            ['江苏', 63],
            ['山西', 80],
            ['山东', 90],
            ['黑龙江', 105]
        ]
      },
      settings: {
        type: 'scatter'
      }
    }
  }
}

</script>

```
:::


## 带动效的散点图

:::demo(chart-map-3)
```html
<template>
   <my-chart-map :data="data" :register="register" map="china" :settings="settings"></my-chart-map>
</template>

<script>
import china from '$ui/charts/geo/china.json'
export default {
  data() {
    return {
      register: china,
      data: {
        columns: ['省份', '人口数量'],
        rows: [
            ['广东', 100],
            ['北京', 60],
            ['广西', 78],
            ['湖南', 90],
            ['湖北', 110],
            ['福建', 87],
            ['新疆', 90],
            ['贵州', 75],
            ['江苏', 63],
            ['山西', 80],
            ['山东', 90],
            ['黑龙江', 105]
        ]
      },
      settings: {
        type: 'effectScatter'
      }
    }
  }
}

</script>

```
:::


## 路线图


:::demo(chart-map-4)
```html
<template>
   <my-chart-map :data="data" :register="register" map="china" :settings="settings"></my-chart-map>
</template>

<script>
import china from '$ui/charts/geo/china.json'
export default {
  data() {
    return {
      register: china,
      data: {
          columns: ['省份', '航线'],
          rows: [
            ['广东->北京', ['广东', '北京']],
            ['湖南->北京', ['湖南', '北京']],
            ['贵州->北京', ['贵州', '北京']],
            ['新疆->北京', ['新疆', '北京']],
            ['西藏->北京', ['西藏', '北京']]
          ]
      },
      settings: {
        type: 'lines'
      }
    }
  }
}

</script>

```
:::



## 混合多种图形

:::demo(chart-map-5)
```html
<template>
   <my-chart-map :data="data" :register="register" map="china" :settings="settings"></my-chart-map>
</template>

<script>
import china from '$ui/charts/geo/china.json'

  const area = {
    columns: ['省份', '面积'],
    rows: [
      ['广东', 100],
      ['北京', 60],
      ['广西', 78],
      ['湖南', 90],
      ['湖北', 110],
      ['福建', 87],
      ['新疆', 90],
      ['贵州', 75],
      ['江苏', 63],
      ['山西', 80],
      ['山东', 90],
      ['黑龙江', 105]
    ]
  }
  
  const scatter = {
    columns: ['省份', '人口'],
    rows: [
      ['广东', 1],
      ['湖南', 1],
      ['贵州', 1],
      ['新疆', 1],
      ['西藏', 1]
    ]
  }
  
  const effectScatter = {
    columns: ['省份', '首都'],
    rows: [
      ['北京', 2]
    ]
  }
  
  const lines = {
    columns: ['路线', '航线'],
    rows: [
      ['广东->北京', ['广东', '北京']],
      ['湖南->北京', ['湖南', '北京']],
      ['贵州->北京', ['贵州', '北京']],
      ['新疆->北京', ['新疆', '北京']],
      ['西藏->北京', ['西藏', '北京']]
    ]
  }
  
export default {
  data() {
    return {
      register: china,
      data: [area, scatter, effectScatter, lines],
      settings: {
        type: {
           '面积': 'map',
           '航线': 'lines',
           '人口': 'scatter',
           '首都': 'effectScatter'
        }
      }
    }
  }
}

</script>

```
:::

## 个性化样式

:::demo(chart-map-6)
```html
<template>
  <my-chart-map debug
                :data="data"
                :register="register"
                map="china"
                :settings="settings"
                :extend="extend"></my-chart-map>
</template>

<script>
  import china from '$ui/charts/geo/china.json'

  const area = {
    columns: ['省份', '面积'],
    rows: [
      ['广东', 100],
      ['北京', 60],
      ['广西', 78],
      ['湖南', 90],
      ['湖北', 110],
      ['福建', 87],
      ['新疆', 90],
      ['贵州', 75],
      ['江苏', 63],
      ['山西', 80],
      ['山东', 90],
      ['黑龙江', 105]
    ]
  }

  const scatter = {
    columns: ['省份', '人口'],
    rows: [
      ['广东', 1],
      ['湖南', 1],
      ['贵州', 1],
      ['新疆', 1],
      ['西藏', 1]
    ]
  }

  const effectScatter = {
    columns: ['省份', '首都'],
    rows: [
      ['北京', 2]
    ]
  }

  const lines = {
    columns: ['路线', '航线'],
    rows: [
      ['广东->北京', ['广东', '北京']],
      ['湖南->北京', ['湖南', '北京']],
      ['贵州->北京', ['贵州', '北京']],
      ['新疆->北京', ['新疆', '北京']],
      ['西藏->北京', ['西藏', '北京']]
    ]
  }

  export default {
    data() {
      return {
        register: china,
        data: [area, scatter, effectScatter, lines],
        settings: {
          type: {
            '面积': 'map',
            '航线': 'lines',
            '人口': 'scatter',
            '首都': 'effectScatter'
          }
        },
        extend: {
          'series.1.itemStyle': {
            color: 'blue'
          },
          'series.2.itemStyle': {
            color: 'red'
          },
          'series.2.symbolSize': 20,
          'series.3.lineStyle': {
            color: 'green',
            width: 2,
            curveness: 0.4
          },
          'series.3.effect': {
            show: true,
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', // 箭头图标
            symbolSize: 5 // 图标大小
          }
        }
      }
    }
  }

</script>


```
:::

## 定义系列项

:::demo(chart-map-7)
```html
<template>
  <my-chart-map debug
                :data="data"
                :register="register"
                map="china"
                :extend="extend"
                :settings="settings"></my-chart-map>
</template>

<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        register: china,
        data: {
          columns: ['省份', '面积'],
          rows: [
            ['广东', 100],
            ['北京', 60],
            ['广西', 78],
            ['湖南', 90],
            ['湖北', 110],
            ['福建', 87],
            ['新疆', 90],
            ['贵州', 75],
            ['江苏', 63],
            ['山西', 80],
            ['山东', 90],
            ['黑龙江', 105]
          ]
        },
        extend: {
          visualMap: null
        },
        settings: {
          geo: false,
          dataHelper: row => {
            return {
              itemStyle: {
                borderColor: 'blue',
                borderWidth: 2,
                areaColor: row[1] > 90 ? 'red' : 'green'
              },
              label: {
                show: true,
                color: '#fff'
              }
            }
          }
        }
      }
    }
  }

</script>

```
:::
