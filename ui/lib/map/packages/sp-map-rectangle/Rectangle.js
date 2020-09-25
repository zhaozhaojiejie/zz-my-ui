/**
 * 矩形图形组件
 * @module $ui/map/sp-map-rectangle
 */
import featureMixin from '../../mixins/feature'
import Polygon from 'ol/geom/Polygon'

export default {
  name: 'spMapRectangle',
  mixins: [featureMixin],
  /**
   * 属性参数, 继承 [$ui/map/mixins/feature]{@link module:$ui/map/mixins/feature}
   * @member props
   * @property {number[]} [coordinate] 圆形中心点经纬度
   * @property {number} [width] 宽度，单位： 米
   * @property {number} [height] 高度，单位： 米
   */
  props: {
    // 矩形左上角的经纬度
    coordinate: {
      type: Array,
      required: true
    },
    // 宽度，单位： 米
    width: {
      type: Number,
      default: 0,
      required: true
    },
    // 高度，单位： 米
    height: {
      type: Number,
      default: 0,
      required: true
    }
  },
  methods: {
    getCoordinates() {
      const metersPerUnit = this.myMap.getMetersPerUnit()
      const width = metersPerUnit ? this.width / metersPerUnit : 0
      const height = metersPerUnit ? this.height / metersPerUnit : 0
      const [x, y] = this.coordinate
      return [
        this.coordinate,
        [x + width, y],
        [x + width, y - height],
        [x, y - height],
        this.coordinate
      ]
    },
    drawHandler() {
      return new Polygon([this.getCoordinates()])
    },
    modifyHandler(geometry) {
      geometry.setCoordinates([this.getCoordinates()])
    }
  }
}
