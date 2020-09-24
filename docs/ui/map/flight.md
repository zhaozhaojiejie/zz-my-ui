# Flight 航线

动态航线效果，文档<api-link href="map/my-map-flight"> MyMapFlight</api-link>

## 基础用法
:::demo(map-flight-1)
```html
<template>
  <my-map :center="[108.683729, 31.166113]" :zoom="4">
    <my-map-flight :from="[116.566478, 40.513797]"
                   :to="[113.261999, 23.130592]"
                   :radius="10"
                   :angle="-120"
                   :space="0.1"
                   arrow></my-map-flight>
  </my-map>
</template>
```
:::

## 样式配置
:::demo(map-flight-2)
```html
<template>
  <my-map :center="[108.683729, 31.166113]" :zoom="4">
    <my-map-flight :from="[116.566478, 40.513797]"
                   :to="[113.261999, 23.130592]"
                   :radius="10"
                   :angle="-120"
                   :space="0.1"
                   color="#ccc"
                   :width="2"
                   :line-effect="lineEffect"
                   arrow></my-map-flight>
  </my-map>
</template>
<script>
export default {
  data() {
    return {
      lineEffect: {
          color: 'red'
      }
    }
  }
}
</script>
```
:::

## 点运动效果
:::demo(map-flight-3)
```html
<template>
  <my-map :center="[108.683729, 31.166113]" :zoom="4">
    <my-map-flight :from="[116.566478, 40.513797]"
                   :to="[113.261999, 23.130592]"
                   :radius="10"
                   :angle="-120"
                   :space="0.1"
                   :line-effect="false"
                   :point-effect="true"
                   arrow></my-map-flight>
  </my-map>
</template>
```
:::

## 自定义样式
:::demo(map-flight-4)
```html
<template>
  <my-map :center="[108.683729, 31.166113]">
    <my-map-flight v-for="n in 20"
                   :key="n"
                   :from="[108.683729, 31.166113]"
                   :to="getCoordinate()"
                   :radius="0.2"
                   :space="0.01"
                   :line-effect="false"
                   :delay="5000 * Math.random()"
                   :point-effect="pointEffect"
                   arrow></my-map-flight>
  </my-map>
</template>
<script>
  import plane from '$ui/map/sources/arrows/plane.svg'
  import createArrow from '$ui/map/utils/arrow'
  import {coordinateEqual} from '$ui/map/utils/util'

  export default {
    methods: {
      getCoordinate() {
        return [
          108 + Math.random() - Math.random(),
          31 + Math.random() - Math.random()
        ]
      },
      pointEffect({fraction, coordinates, coordinate}) {
        let start = coordinates[fraction - 1] || coordinate
        // 防止相邻的2个点相同，出现抖动
        if (coordinateEqual(start, coordinate)) {
          start = coordinates[fraction - 2] || coordinate
        }
        return createArrow(start, coordinate, {
          src: plane,
          color: '#409eff',
          scale: 1.5
        })
      }
    }
  }
</script>

```
:::