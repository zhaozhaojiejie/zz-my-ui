/**
 * 文字覆盖物组件
 * @module $ui/map/my-map-text
 */
import Point from 'ol/geom/Point'
import parseStyle from '../../utils/style'
import featureMixin from '../../mixins/feature'

export default {
  name: 'MyMapText',
  mixins: [featureMixin],
  /**
   * 属性参数, 继承 [$ui/map/mixins/feature]{@link module:$ui/map/mixins/feature}
   * @member props
   * @property {string} [font] 文字样式
   * @property {number} [maxAngle] 偏移角度
   * @property {number} [offsetX] X方向偏移
   * @property {number} [offsetY] Y方向偏移
   * @property {boolean} [overflow]
   * @property {string} [placement] 定位方式 'point' 'line'
   * @property {number} [scale] 放大缩小比例
   * @property {boolean} [rotateWithView] 是否根据地图视口旋转
   * @property {string} [text] 显示文字
   * @property {string} [textAlign] 文字横向对齐
   * @property {string} [textBaseline] 文字对齐基线
   * @property {string} [backgroundFill] 文字背景色
   * @property {string} [backgroundStroke] 文字背景边框
   * @property {number[]} [padding] 文字背景填充距离 默认[0,0,0,0]
   * @property {number[]} [coordinate] 地图坐标
   */
  props: {
    font: {
      type: String,
      default: '12px'
    },
    maxAngle: Number,
    offsetX: Number,
    offsetY: Number,
    overflow: Boolean,
    placement: {
      type: String,
      default: 'point',
      validator(val) {
        return ['point', 'line'].includes(val)
      }
    },
    scale: Number,
    rotateWithView: Boolean,
    rotation: Number,
    text: String,
    textAlign: String,
    textBaseline: String,
    backgroundFill: String,
    backgroundStroke: Object,
    padding: Array,
    coordinate: {
      type: Array,
      required: true
    },
    stroke: Object,
    fill: String
  },
  methods: {
    drawHandler() {
      return new Point(this.coordinate)
    },
    // 重写 setStyle
    setStyle() {
      if (!this.feature) return
      const style = parseStyle({
        text: {
          ...this.$props
        }
      })
      this.feature.setStyle(style)
    },
    modifyHandler(geometry) {
      geometry.setCoordinates(this.coordinate)
    }
  }
}
