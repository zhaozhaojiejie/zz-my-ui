# GeoJSON

GeoJson图层。文档<api-link href="map/sp-map-geo"> spMapGeo</api-link>

## 基础用法

:::demo
```html
<template>
  <sp-map :zoom="4" :center="[106.011022, 37.237037]">
    <sp-map-geo :json="geo"></sp-map-geo>
  </sp-map>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        geo: china
      }
    }
  }
</script>

```
:::

## 样式配置

:::demo
```html
<template>
  <sp-map :zoom="4" :center="[106.011022, 37.237037]">
    <sp-map-geo :json="geo" :stroke="stroke" :fill="fill" :text="text"></sp-map-geo>
  </sp-map>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        geo: china,
        stroke: {
          width: 1,
          color: '#000'
        },
        fill: 'rgba(0, 0, 0, 0.2)',
        text: {
          fill: 'red',
          font: '14px'
        }
      }
    }
  }
</script>

```
:::

## 差异化样式配置

:::demo

```html
<template>
  <sp-map :zoom="4" :center="[106.011022, 37.237037]"  >
    <sp-map-geo :json="geo" @ready="geoReadyHandle"></sp-map-geo>
  </sp-map>
</template>
<script>
  import china from '$ui/charts/geo/china.json'
  import data from '$docs/data/province-data.json'
  import parseStyle from '$ui/map/utils/style'
  const setStyle = function (bg = 'rgba(0,0,0,0)', text) {
    return parseStyle({
      fill: bg,
      stroke: {width: 3, color: 'white'},
      text: {text: text, font: '20px', fill: 'green'}
    })
  }
  export default {
    data() {
      return {
        geo: china,
        data: data.datas
      }
    },
    computed: {
      total() {
        return this.data.reduce((total, item) => {
          if (item.value > total) {
            total = item.value
          }
          return total
        }, 0)
      }
    },
    methods: {
      geoReadyHandle(geo) {
        const features = geo.getFeatures()
        features.forEach((feature) => {
          const featureData = feature.getProperties()
          const name = featureData.name
          const target = this.data.find((item) => {
            return item.cityname.indexOf(name) >= 0
          })
          const count = target && target.value || 0
          const value = Math.ceil(225 * count / this.total)
          const styleObj = setStyle(`rgba(225, ${225 - value}, 0, 0.9)`, name)
          feature.setStyle(styleObj)
        })
      }
    }
  }
</script>

```
:::

## 鼠标经过 

:::demo
```html
<template>
  <sp-map :zoom="4" :center="[106.011022, 37.237037]">
    <sp-map-geo :json="geo" :hover-style="hoverStyle"></sp-map-geo>
  </sp-map>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        geo: china,
        hoverStyle: {
          fill: 'rgba(255, 0, 0, 0.2)',
          stroke: {
            color: '#000',
            width: 3
          },
          text: {
            fill: 'red'
          }
        }
      }
    }
  }
</script>

```
:::

## 事件
:::demo
```html
<template>
  <sp-map :zoom="4" :center="[106.011022, 37.237037]">
    <sp-map-geo :json="geo" @click="handleClick"></sp-map-geo>
  </sp-map>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        geo: china
      }
    },
    methods: {
       handleClick(e, feature) {
         alert(feature.get('name'))
       }
    }
  }
</script>

```
:::

## Tooltip
:::demo
```html
<template>
  <sp-map :zoom="4" :center="[106.011022, 37.237037]">
    <sp-map-geo :json="geo"
                :hover-style="hoverStyle"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"></sp-map-geo>
    <sp-map-popup width="200px" title="提示" :position="region.position">
      {{region}}
    </sp-map-popup>
  </sp-map>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        geo: china,
        hoverStyle: {
          fill: 'rgba(255, 0, 0, 0.2)',
          stroke: {
            color: '#000',
            width: 3
          },
          text: {
            fill: 'red'
          }
        },
        region: {}
      }
    },
    methods: {
      handleMouseEnter(e, feature) {
        const position = feature.get('cp')
        const name = feature.get('name')
        this.region = {position, name}
      },
      handleMouseLeave() {
        this.region = {}
      }
    }
  }
</script>
```
:::


## 航线应用实例
:::demo
```html
<template>
  <sp-map :zoom="4" :center="[106.011022, 37.237037]" invert>
    <sp-map-geo ref="geo"
                :json="geo"
                @ready="handleReady"
                :stroke="{width:1,color:'#000'}"></sp-map-geo>
    <sp-map-scatter v-for="item in scatters"
                    :key="item.join(',')"
                    :coordinate="item"
                    :radius="5"
                    fill="red"></sp-map-scatter>
    <sp-map-flight v-for="(item,index) in flights"
                   :key="index"
                   :from="item.from"
                   :to="item.to"
                   :radius="10"
                   :space="0"
                   :smooth="0.03"
                   arrow></sp-map-flight>
  </sp-map>
</template>
<script>
  import china from '$ui/charts/geo/china.json'

  export default {
    data() {
      return {
        geo: china,
        data: [
          {from: '北京', to: '广东'},
          {from: '北京', to: '新疆'},
          {from: '北京', to: '西藏'}
        ],
        coordinates: null
      }
    },
    computed: {
      scatters() {
        if (!this.coordinates) return []
        const points = {}
        this.data.forEach(item => {
          points[item.from] = this.coordinates[item.from]
          points[item.to] = this.coordinates[item.to]
        })
        return Object.keys(points).map(key => points[key])
      },
      flights() {
        if (!this.coordinates) return []
        return this.data.map(item => {
          return {
            from: this.coordinates[item.from],
            to: this.coordinates[item.to]
          }
        })
      }
    },
    methods: {
      handleReady() {
        this.coordinates = this.$refs.geo.getCoordinates()
      }
    }
  }
</script>


```
:::


