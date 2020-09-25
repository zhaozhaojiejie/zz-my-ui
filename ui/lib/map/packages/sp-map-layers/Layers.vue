<template>
  <spMapPlacement class="sp-map-layers" v-bind="$attrs">
    <div v-for="(item, index) in list"
         :key="index"
         class="sp-map-layers__item"
         :class="{active:activeIndex===index}"
         @click="handleClick(item, index)">
      <img :src="item.preview"/>
      <span class="sp-map-layers__title">{{item.title}}</span>
    </div>
  </spMapPlacement>
</template>

<script>
  /**
   * 切换地图图层组件
   * @module $ui/map/sp-map-layers
   */
  import {spMapPlacement} from '$ui/map'
  import {createLayer} from '../../utils/layer'
  import defaultPreviewImage from '$ui/map/sources/preview/TDT.png'

  export default {
    name: 'spMapLayers',
    inject: ['myMap'],
    components: {
      spMapPlacement
    },
    /**
     * 属性参数, 继承 [$ui/map/sp-map-placement]{@link module:$ui/map/sp-map-placement}
     * @member props
     * @property {array} [layers] 图层列表
     * @property {string} [layers.title] 图层标题
     * @property {string} [layers.preview] 图层选项预览图
     * @property {string|function} [layers.adapter] 图层ID 或 获取图层的方法
     * @property {number} [defaultActiveIndex] 默认激活图层索引
     */
    props: {
      // [{title, preview, adapter}]
      layers: {
        type: Array,
        default() {
          return []
        }
      },
      // 默认激活图层索引
      defaultActiveIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    watch: {
      defaultActiveIndex: {
        immediate: true,
        handler(val) {
          this.activeIndex = val
        }
      }
    },
    computed: {
      list() {
        return this.layers.map(item => {
          return {
            title: item.title,
            preview: item.preview || defaultPreviewImage,
            adapter: item.adapter,
            layer: createLayer(item.adapter)
          }
        })
      }
    },
    methods: {
      change(item) {
        const map = this.myMap.map
        const layer = this.myMap.getLayer()
        if (layer) {
          map.removeLayer(layer)
        }
        if (item.layer) {
          item.layer.__MY_LAYER__ = true
          item.layer.setZIndex(0)
          map.addLayer(item.layer)
        }
        this.$emit('change', item)
        this.myMap.$emit('sp-map-layers:change', item.adapter)
      },
      handleClick(item, index) {
        this.activeIndex = index
        this.change(item)
      }
    }
  }
</script>


