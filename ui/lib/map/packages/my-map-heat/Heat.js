/**
 * 热力图组件
 * @module $ui/map/my-map-heat
 */
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import Heatmap from 'ol/layer/Heatmap'
import VectorSource from 'ol/source/Vector'

export default {
  name: 'MyMapHeat',
  inject: ['myMap'],
  render() {
    return null
  },
  /**
   * 属性参数
   * @member props
   * @property {Array} [data] 数据  [{coordinate:[], weight, prop}]
   * @property {number[]} [data.coordinate] 经纬度
   * @property {number} [data.weight] 权重值，取 0 ~ 1
   * @property {Object} [keyMap] 数据字段名称映射 {coordinate,weight}
   * @property {number} [opacity=1] 透明度
   * @property {boolean} [visible=true] 是否可见
   * @property {number} [zIndex] 层级
   * @property {number} [minResolution] 此图层可见的最小分辨率（包括）
   * @property {number} [maxResolution] 最低分辨率（不包括在内），此层将在该分辨率下可见
   * @property {number} [minZoom] 图层可见的最小缩放可见（包括）
   * @property {number} [maxZoom] 图层可见的最大缩放可见（不包括在内）
   * @property {String[]} [gradient] 热图的颜色渐变，指定为CSS颜色字符串数组
   * @property {number} [radius] 半径大小（以像素为单位）
   * @property {number} [blur] 模糊大小（以像素为单位）
   * @property {Function} [weight] 用于权重的要素属性或从要素返回权重的函数。重量值的范围应为0到1（外部的值将被限制在该范围内）。
   */
  props: {
    // [{coordinate:[], weight}]
    data: {
      type: Array,
      default() {
        return []
      }
    },
    keyMap: {
      type: Object,
      default() {
        return {
          coordinate: 'coordinate',
          // 权重值，取 0 ~ 1
          weight: 'weight'
        }
      }
    },
    // 不透明度（0,1）
    opacity: {
      type: Number,
      default: 1
    },
    // 是否能见
    visible: {
      type: Boolean,
      default: true
    },
    // 图层渲染的z-index。在渲染时，将按照Z-index然后按位置对层进行排序
    zIndex: Number,
    // 此图层可见的最小分辨率（包括）
    minResolution: Number,
    // 最低分辨率（不包括在内），此层将在该分辨率下可见
    maxResolution: Number,
    minZoom: Number,
    maxZoom: Number,
    // 热图的颜色渐变，指定为CSS颜色字符串数组
    gradient: {
      type: Array,
      default() {
        return ['#00f', '#0ff', '#0f0', '#ff0', '#f00']
      }
    },
    // 半径大小（以像素为单位）
    radius: {
      type: Number,
      default: 8
    },
    // 模糊大小（以像素为单位）
    blur: {
      type: Number,
      default: 15
    },
    // 用于权重的要素属性或从要素返回权重的函数。重量值的范围应为0到1（外部的值将被限制在该范围内）。
    weight: {
      type: Function
    }
  },
  watch: {
    visible(val) {
      val ? this.show() : this.hide()
    },
    data() {
      this.modify()
    }
  },
  methods: {
    createFeatures() {
      const {coordinate} = this.keyMap
      return this.data.map(item => {
        const geometry = new Point(item[coordinate])
        return new Feature({
          geometry,
          data: item,
          __vm__: this
        })
      })
    },
    draw() {
      const weightKey = this.keyMap.weight
      const features = this.createFeatures()
      const source = new VectorSource({features})
      const weightHandler = this.weight
        ? feature => this.weight(feature.get('data'), feature)
        : feature => {
          const item = feature.get('data')
          const value = item[weightKey]
          return typeof value === 'undefined' ? 1 : value
        }
      this.heatmap = new Heatmap({
        ...this.$props,
        source,
        weight: weightHandler
      })
      this.myMap.map.addLayer(this.heatmap)
    },
    modify() {
      if (!this.heatmap) return
      this.myMap.map.removeLayer(this.heatmap)
      this.draw()
    },
    show() {
      this.heatmap && this.heatmap.setVisible(true)
    },
    hide() {
      this.heatmap && this.heatmap.setVisible(false)
    }
  },
  created() {
    this.myMap.mapReady(this.draw)
  },
  beforeDestroy() {
    this.heatmap && this.myMap.map.removeLayer(this.heatmap)
  }
}
