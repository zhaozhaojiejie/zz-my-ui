/**
 * 图形特征基类
 * @module $ui/map/mixins/feature
 */
import Feature from 'ol/Feature'
import styleMixin from './style'
import parseStyle from '../utils/style'

export default {
  mixins: [styleMixin],
  inject: ['myMap'],
  props: {
    props: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  render() {
    return null
  },
  watch: {
    $props: {
      deep: true,
      handler() {
        this.modify()
      }
    }
  },
  methods: {
    /**
     * 创建图形接口，必须要返回 Geometry 实例
     * @interface
     * @return {Geometry} geometry
     */
    drawHandler() {
    },
    /**
     * 修改图形接口，需要实现对图形进行修改设置
     * @interface
     * @param {Geometry} geometry
     */
    modifyHandler(geometry) {
    },
    /**
     * 渲染图形
     * @method draw
     */
    draw() {
      const geometry = this.drawHandler()
      if (!geometry) return
      this.feature = new Feature({geometry})
      this.feature.__vm__ = this
      this.props && this.feature.setProperties({...this.props}) // 绑定属性
      this.myMap.addFeature(this.feature)
      this.setStyle()
      this.$emit('featureDraw')
    },
    /**
     * 设置图形样式
     * @method setStyle
     */
    setStyle() {
      if (!this.feature) return
      const style = this.styleFunction
        ? this.styleFunction(this)
        : parseStyle({
          fill: this.fill,
          stroke: this.stroke,
          zIndex: this.zIndex,
          text: this.styleText
        })
      this.feature.setStyle(style)
    },
    /**
     * 修改图形
     * @method modify
     */
    modify() {
      if (!this.feature) return
      const geometry = this.feature.getGeometry()
      this.modifyHandler(geometry)
      this.setStyle()
      this.props && this.feature.setProperties({...this.props}) // 绑定属性
    }
  },
  created() {
    this.myMap.mapReady(this.draw)
  },
  beforeDestroy() {
    if (this.feature) {
      this.feature.__vm__ = null
      this.feature.disposeInternal()
      this.myMap.removeFeature(this.feature)
    }
  }
}
