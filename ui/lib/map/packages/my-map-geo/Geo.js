/**
 * GeoJSON 图层组件
 * @module $ui/map/my-map-geo
 */
import GeoJSON from 'ol/format/GeoJSON'
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source'
import styleMixin from '../../mixins/style'
import {geoJsonDecode} from '$ui/map/utils/util'
import parseStyle from '$ui/map/utils/style'

// 样式构造函数
const defaultStyleCreator = vm => {
  const {stroke, text, fill, styleText, showText} = vm
  return feature => {
    const name = feature.get('name')
    let content = null
    if (showText) {
      content = text ? {text: name, ...styleText} : {text: name, font: '12px'}
    }
    return parseStyle({
      stroke,
      fill,
      text: content
    })
  }
}

export default {
  name: 'MyMapGeo',
  mixins: [styleMixin],
  inject: ['myMap'],
  render() {
    return null
  },
  /**
   * 属性参数
   * @property {Number} [zIndex] 显示层级
   * @property {String} [fill] 填充颜色
   * @property {Object} [stroke] 描边 {color,lineCap, lineJoin, lineDash, lineDashOffset, miterLimit, width}
   * @property {Object} [text] 文本， {font,maxAngle,offsetX,offsetY,overflow,placement,scale,rotateWithView,rotation,text,textAlign,textBaseline,fill,stroke,backgroundFill,backgroundStroke,padding}
   * @property {Function} [styleFunction] 渲染Style函数，必须返回Style实例
   * @property {Object} [json] GeoJSON 数据
   * @property {Object|Function} [hoverStyle] 鼠标经过时的样式
   */
  props: {
    json: Object,
    hoverStyle: [Object, Function],
    // 显示文本
    showText: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    init(map) {
      if (this.layer) return
      const source = new VectorSource({})
      const style = typeof this.styleFunction === 'function'
        ? this.styleFunction
        : defaultStyleCreator(this)
      this.layer = new VectorLayer({
        zIndex: this.zIndex,
        source,
        style
      })
      map.addLayer(this.layer)
      this.draw(this.json)
      /**
       * 初始化完成时触发
       * @event ready
       */
      this.$emit('ready', this)
    },
    dispose() {
      if (this.myMap && this.myMap.map && this.layer) {
        this.clear()
        this.myMap.map.removeLayer(this.layer)
      }
    },
    /**
     * 绘制图形，当json数据发生改变时，需要调用该方法重绘
     * @param {object} json
     */
    draw(json) {
      if (!json || !this.layer) return
      this.clear()
      const geoJson = geoJsonDecode(json)
      let features = new GeoJSON().readFeatures(geoJson) || []
      features = features.map(feature => {
        feature.__vm__ = this
        return feature
      })
      const source = this.layer.getSource()
      source.addFeatures(features)
    },
    /**
     * 清除图形
     */
    clear() {
      if (!this.layer) {
        const source = this.layer.getSource()
        source.clear()
      }
    },
    /**
     * 获取全部图形
     * @return {array}
     */
    getFeatures() {
      if (!this.layer) return []
      const source = this.layer.getSource()
      return source.getFeatures()
    },
    /**
     * 根据名称获取 Feature
     * @param {string} name
     * @return {Feature}
     */
    getFeature(name) {
      const features = this.getFeatures()
      return features.find(f => f.get('name') === name)
    },
    /**
     * 获取图形区域名称与经纬度映射
     * @return {Object}
     */
    getCoordinates() {
      const features = this.getFeatures()
      const coordinates = Object.create(null)
      features.forEach(f => {
        const name = f.get('name')
        coordinates[name] = f.get('cp')
      })
      return coordinates
    },
    /**
     * 继承鼠标经过设置图形的层级和文本字体
     * @param feature
     * @param style
     */
    syncStyle(feature, style) {
      if (!this.layer) return null
      const zIndex = this.zIndex || 1 + 1
      style.setZIndex(zIndex)
      if (!this.showText) return
      const styleFunction = this.layer.getStyle()
      const featureStyle = styleFunction(feature)
      const styleText = featureStyle.getText()
      if (!styleText) return
      const content = styleText.getText()
      const font = styleText.getFont()
      const text = style.getText()
      if (content && text) {
        text.setText(content)
        text.setFont(font)
      }
    },
    handleMouseEnter(e, feature) {
      if (!this.layer) return
      const style = typeof this.hoverStyle === 'function'
        ? this.hoverStyle()
        : parseStyle(this.hoverStyle)

      this.syncStyle(feature, style)
      feature.setStyle(style)
    },
    handleMouseLeave(e, feature) {
      if (!this.layer) return
      feature.setStyle(null)
    }
  },
  created() {
    this.myMap.mapReady(this.init)
    if (this.hoverStyle) {
      this.$on('mouseenter', this.handleMouseEnter)
      this.$on('mouseleave', this.handleMouseLeave)
    }
  },
  beforeDestroy() {
    this.dispose()
    this.$off()
  }
}
