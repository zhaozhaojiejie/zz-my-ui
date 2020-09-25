/**
 * 圆图形覆盖物组件
 * @module $ui/map/sp-map-circle
 */
import Circle from 'ol/geom/Circle'
import featureMixin from '../../mixins/feature'

export default {
  name: 'spMapCircle',
  mixins: [featureMixin],
  /**
   * 属性参数, 继承 [$ui/map/mixins/feature]{@link module:$ui/map/mixins/feature}
   * @member props
   * @property {number[]} [center] 圆形中心点经纬度
   * @property {number} [radius] 设置圆的半径。半径的单位:米
   */
  props: {
    center: {
      type: Array,
      required: true
    },
    // 设置圆的半径。半径的单位:米
    radius: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 单位米转换成投影单位值
    getRadius() {
      const metersPerUnit = this.myMap.getMetersPerUnit()
      return metersPerUnit ? this.radius / metersPerUnit : 0
    },
    drawHandler() {
      return new Circle(this.center, this.getRadius())
    },
    modifyHandler(geometry) {
      geometry.setCenter(this.center)
      geometry.setRadius(this.getRadius())
    }
  }
}
