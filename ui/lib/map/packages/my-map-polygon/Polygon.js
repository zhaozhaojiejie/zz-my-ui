/**
 * 多边形覆盖物组件
 * @module $ui/map/my-map-polygon
 */
import featureMixin from '../../mixins/feature'
import Polygon from 'ol/geom/Polygon'

export default {
  name: 'MyMapPolygon',
  mixins: [featureMixin],
  /**
   * 属性参数, 继承 [$ui/map/mixins/feature]{@link module:$ui/map/mixins/feature}
   * @member props
   * @property {Array} [coordinates] 经纬度数组，是一个二维数组，必须三个点以上，首尾的点要相同, 才能构成多边形
   */
  props: {
    coordinates: {
      type: Array,
      required: true
    }
  },
  methods: {
    drawHandler() {
      return new Polygon([this.coordinates])
    },
    modifyHandler(geometry) {
      geometry.setCoordinates([this.coordinates])
    }
  }
}
