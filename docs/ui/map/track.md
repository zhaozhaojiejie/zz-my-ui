# Track 轨迹

地图轨迹动画 <api-link href="map/my-map-track">MyMapTrack</api-link>

## 基础用法
:::demo
```html
<template>
    <my-map :zoom="9">
        <my-map-track :coordinates="coordinates" :period="20"></my-map-track>
    </my-map>
</template>

<script>
export default {
  data() {
    return {
        coordinates: [
          [112.554067, 23.545326],
          [113.371862, 23.492454],
          [112.788214, 22.910179],
          [113.763250, 23.232216],
          [113.277105, 22.678779]
        ]
    }
  }
}
</script>
```
:::

## 图片
:::demo
```html
<template>
    <my-map :zoom="9">
        <my-map-track :coordinates="coordinates" :period="20" :effect="effect"></my-map-track>
    </my-map>
</template>

<script>
import car from '$ui/map/sources/arrows/car.png'
export default {
  data() {
    return {
        coordinates: [
          [112.554067, 23.545326],
          [113.371862, 23.492454],
          [112.788214, 22.910179],
          [113.763250, 23.232216],
          [113.277105, 22.678779]
        ],
        effect: car
    }
  }
}
</script>
```
:::

## 自定义样式

:::demo
```html
<template>
    <my-map :zoom="9">
        <my-map-track :coordinates="coordinates" 
                      :period="20" 
                      color="#999999"
                      :width="6"
                      :lineDash="[10]"
                      :effect="effect"></my-map-track>
    </my-map>
</template>

<script>

export default {
  data() {
    return {
        coordinates: [
          [112.554067, 23.545326],
          [113.371862, 23.492454],
          [112.788214, 22.910179],
          [113.763250, 23.232216],
          [113.277105, 22.678779]
        ],
        effect: {
         circle: {
           fill: 'blue',
           radius: 8
         }
        }
    }
  }
}
</script>
```
:::

## 结合散点

:::demo
```html
<template>
  <my-map :zoom="9">
    <my-map-track :coordinates="coordinates"
                  :period="40"
                  :effect="null"
                  @move="handleMove"
    ></my-map-track>
    <my-map-scatter v-if="coordinate" :coordinate="coordinate" fill="red"></my-map-scatter>
  </my-map>
</template>

<script>

  export default {
    data() {
      return {
        coordinates: [
          [112.554067, 23.545326],
          [113.371862, 23.492454],
          [112.788214, 22.910179],
          [113.763250, 23.232216],
          [113.277105, 22.678779]
        ],
        coordinate: null
      }
    },
    methods: {
      handleMove(coordinate) {
        this.coordinate = coordinate
      }
    }
  }
</script>

```
:::


## 曲线
:::demo
```html
<template>
    <my-map :zoom="9">
        <my-map-track :coordinates="coordinates" 
                      :period="20" 
                      :effect="effect"
                       bezier></my-map-track>
    </my-map>
</template>

<script>
import car from '$ui/map/sources/arrows/car.png'
export default {
  data() {
    return {
        coordinates: [
          [112.554067, 23.545326],
          [113.371862, 23.492454],
          [112.788214, 22.910179],
          [113.763250, 23.232216],
          [113.277105, 22.678779]
        ],
        effect: car
    }
  }
}
</script>
```
:::