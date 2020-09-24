/**
 * Line组件
 * @module $ui/map/my-map-line
 */
import LineString from 'ol/geom/LineString'
import featureMixin from '../../mixins/feature'
import strokeMixin from '../../mixins/stroke'
import {createBezierCurvePoints} from '../../utils/util'
import createArrow from '../../utils/arrow'

export default {
  name: 'MyMapLine',
  mixins: [strokeMixin, featureMixin],
  /**
   * 属性参数, 继承 [$ui/map/mixins/feature]{@link module:$ui/map/mixins/feature}
   * @member props
   * @property {number[]} [coordinates] 地图坐标
   * @property {string} [color] 颜色
   * @property {number} [width] 线条宽度
   * @property {string} [lineCap]
   * @property {string} [lineJoin]
   * @property {number[]} [lineDash]
   * @property {number} [lineDashOffset]
   * @property {boolean|object} [arrow] 显示箭头
   * @property {boolean} [arrowEach] 每段线都带箭头
   * @property {boolean} [bezier] 显示曲线
   */
  props: {
    coordinates: {
      type: Array,
      default() {
        return []
      }
    },
    // 箭头配置
    arrow: {
      type: [Boolean, String, Object],
      default: false
    },
    arrowEach: Boolean,
    // 曲线
    bezier: Boolean
  },
  methods: {
    lastSegmentStyle() {
      const length = this.coordinates.length
      if (length >= 2) {
        const start = this.coordinates[length - 2]
        const end = this.coordinates[length - 1]
        return createArrow(start, end, this.arrow, {color: this.color})
      }
    },
    setStyle() {
      if (!this.feature) return
      const styles = this.createLineStyle(strokeMixin.props)
      if (this.arrow) {
        if (this.arrowEach) {
          const geometry = this.feature.getGeometry()
          geometry.forEachSegment((start, end) => {
            styles.push(createArrow(start, end, this.arrow))
          })
        } else {
          const lastStyle = this.lastSegmentStyle()
          styles.push(lastStyle)
        }
      }
      this.feature.setStyle(styles)
    },
    createLine() {
      return this.bezier ? createBezierCurvePoints(this.coordinates) : this.coordinates
    },
    drawHandler() {
      const line = this.createLine()
      return new LineString(line)
    },
    modifyHandler(geometry) {
      const line = this.createLine()
      geometry.setCoordinates(line)
    }
  }
}
