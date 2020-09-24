/**
 * 缩放控件
 * @module $ui/map/my-map-zoom
 */
import {Zoom, ZoomSlider} from 'ol/control'
import Placement from '../my-map-placement'

export default {
  name: 'MyMapZoom',
  inject: ['myMap'],
  components: {
    Placement
  },
  render() {
    return null
  },
  /**
   * 参数属性
   * @member props
   * @property {string} [placement] 停泊位置，可选值'left-top', 'right-top', 'left-bottom', 'right-bottom'
   * @property {string} [theme] 主题 可选值 'light'(默认), 'dark'
   * @property {string | boolean} [slider] 是否显示拖动条
   */
  props: {
    placement: {
      type: String,
      default: 'left-top',
      validator(val) {
        return ['left-top', 'right-top', 'left-bottom', 'right-bottom'].includes(val)
      }
    },
    slider: Boolean,
    theme: {
      type: String,
      default: 'light',
      validator(val) {
        return ['light', 'dark'].includes(val)
      }
    }
  },
  computed: {
    classes() {
      return Object.keys({
        'my-map-zoom': true,
        [`is-${this.theme}`]: !!this.theme,
        [`is-${this.placement}`]: !!this.placement
      }).join(' ')
    }
  },
  methods: {
    init(map) {
      this.zoom = new Zoom({
        className: this.classes + ' ol-zoom'
      })
      this.zoomSlider = new ZoomSlider({
        className: this.classes + ' ol-zoomslider'
      })
      map.addControl(this.zoom)
      map.addControl(this.zoomSlider)
    }
  },
  created() {
    this.myMap.mapReady(this.init)
  },
  beforeDestroy() {
    const map = this.myMap?.map
    if (map) {
      this.zoom && map.addControl(this.zoom)
      this.zoomSlider && map.addControl(this.zoomSlider)
    }
  }
}
