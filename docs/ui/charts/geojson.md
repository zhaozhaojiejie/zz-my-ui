# GeoJson

:::demo(geojson-1)
```html
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in breadcrumb"
                          :key="item.id"
                          @click.native="handleNav(item,index)">{{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-alert :title="current" type="success" :closable="false" style="margin:20px 0;"></el-alert>
    <sp-chart-map height="600px" :map="map" :register="register" @click="handleClick"></sp-chart-map>
  </div>

</template>

<script>

  import geoArray from '$ui/charts/geo/index.json'

  export default {
    data() {
      return {
        breadcrumb: [
          {
            id: 'china',
            name: 'China',
            geo: 'china.json'
          }
        ],
        map: 'china.json'
      }
    },
    computed: {
      current() {
        return `$ui/charts/geo/${this.breadcrumb[this.breadcrumb.length - 1].geo}`
      }
    },
    methods: {
      register({map}) {
        const [path, file] = map.split('/')
        if (!file) return import('$ui/charts/geo/china.json')
        return path === 'province'
          ? import('$ui/charts/geo/province/' + file)
          : import('$ui/charts/geo/city/' + file)

      },
      handleNav(item, index) {
        this.breadcrumb.splice(index + 1)

        this.map = this.breadcrumb[this.breadcrumb.length - 1].geo
      },
      handleClick(params) {
        const name = params.name.replace('市', '')
        const geoItem = geoArray.find(item => item.name === name)
        if (geoItem) {
          this.map = geoItem.geo
          this.breadcrumb.push(geoItem)
        }

      }
    }
  }
</script>


```
:::
