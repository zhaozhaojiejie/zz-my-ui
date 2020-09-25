/**
 * Img覆盖物组件
 * @module $ui/map/sp-map-image
 */
import featureMixin from '../../mixins/feature'
import Point from 'ol/geom/Point'
import parseStyle from '../../utils/style'
import imageMixin from '../../mixins/image'

export default {
  name: 'spMapImage',
  mixins: [imageMixin, featureMixin],
  /**
   * 属性参数
   * @member props
   * @property {string} [src] 图片链接
   * @property {number[]} [coordinate] 经纬度
   * @property {String} [color] 更改图片颜色
   * @property {number[]} [offset] 偏移位置
   * @property {string} [offsetOrigin] Origin of the offset: bottom-left, bottom-right, top-left or top-right.
   * @property {number} [opacity] 透明度
   * @property {number} [scale] 缩放
   * @property {boolean} [rotateWithView] 是否跟着视图旋转
   * @property {boolean} [rotation] 旋转角度
   * @property {Array} [size] 容器尺寸
   *
   */
  props: {
    // Image source URI.
    src: {
      type: String
    },
    // 经纬度
    coordinate: {
      type: Array
    }
  },
  methods: {
    setStyle() {
      if (!this.feature) return
      const style = parseStyle({
        icon: {
          ...this.$props
        }
      })
      this.feature.setStyle(style)
    },
    drawHandler() {
      if (!this.coordinate) return
      return new Point(this.coordinate)
    },
    modifyHandler(geometry) {
      geometry.setCoordinates(this.coordinate)
    }
  }
}
