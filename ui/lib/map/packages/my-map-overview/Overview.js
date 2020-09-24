/**
 * 切换地图图层组件
 * @module $ui/map/my-map-overview
 */
import {OverviewMap} from 'ol/control'
import {createLayer} from '../../utils/layer'

/**
 * 属性参数
 * @member props
 * @property {string} [theme] 主体样式
 * @property {boolean} [collapsible] 是否可以收起
 * @property {boolean} [collapsed] 是否收起
 * @property {string} [label] Text label to use for the collapsed overviewmap button. Instead of text, also an element (e.g. a span element) can be used
 * @property {string} [collapseLabel] Text label to use for the expanded overviewmap button. Instead of text, also an element (e.g. a span element) can be used.
 * @property {boolean} [rotateWithView] Whether the control view should rotate with the main map view.
 * @property {string} [tipLabel]  Text label to use for the button tip.
 * @property {boolean} [invert] 颜色反相
 */
export default {
  name: 'MyMapOverview',
  inject: ['myMap'],
  props: {
    theme: {
      type: String,
      default: 'light',
      validator(val) {
        return ['light', 'dark'].includes(val)
      }
    },
    // Whether the control can be collapsed or not.
    collapsible: {
      type: Boolean,
      default: true
    },
    // Whether the control should start collapsed or not (expanded).
    collapsed: {
      type: Boolean,
      default: true
    },
    // Text label to use for the collapsed overviewmap button. Instead of text, also an element (e.g. a span element) can be used.
    label: String,
    // Text label to use for the expanded overviewmap button. Instead of text, also an element (e.g. a span element) can be used.
    collapseLabel: String,
    // Whether the control view should rotate with the main map view.
    rotateWithView: Boolean,
    // Text label to use for the button tip.
    tipLabel: {
      type: String,
      default: '缩略图'
    },
    // 颜色反相
    invert: Boolean
  },
  render() {
    return null
  },
  data() {
    return {
      adapter: null
    }
  },
  watch: {
    adapter() {
      this.$nextTick(this.draw)
    }
  },
  methods: {
    draw() {
      if (!this.adapter) return
      this.removeControl()
      const layer = createLayer(this.adapter)
      const invert = this.invert ? 'my-map-overview--invert' : ''
      this.overview = new OverviewMap({
        ...this.$props,
        layers: [layer],
        className: `ol-overviewmap my-map-overview is-${this.theme} ${invert}`
      })
      this.myMap.map.addControl(this.overview)
    },
    removeControl() {
      this.overview && this.myMap.map.removeControl(this.overview)
    },
    layerChangeHandler(adapter) {
      this.adapter = adapter
    }
  },
  created() {
    this.myMap.$on('my-map-layers:change', this.layerChangeHandler)
    this.myMap.mapReady(() => {
      this.adapter = this.myMap.adapter
    })
  },
  beforeDestroy() {
    this.removeControl()
    this.myMap.$off('my-map-layers:change', this.layerChangeHandler)
  }

}
