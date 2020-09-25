import echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import {log, tip} from '$ui/utils/log'
import {debounce} from '$ui/utils/util'
import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
import merge from 'lodash/merge'
import setExtend from '$ui/charts/utils/extend'
import {DEFAULT_THEME} from '$ui/charts/utils/constant'

/**
 * 图表基础组件
 * @module $ui/charts/sp-chart
 */
export default {
  name: 'spChart',
  /**
   * 属性参数
   * @member props
   * @property {string} [width=auto] 图表宽度
   * @property {string} [height=400px] 高度
   * @property {boolean} [fit] 适应父容器
   * @property {object} [options] ECharts 原生配置选项
   * @property {object} [extend] 扩展ECharts配置选项
   * @property {string|object} [theme=light]
   * @property {boolean} [loading] 显示加载中
   * @property {boolean} [debug] 打印构建的ECharts option内容
   * @property {object} [settings] 个性图表配置
   * @property {object} [data] 图表数据, {columns, rows, layout}
   */
  props: {
    // 宽度
    width: {
      type: String,
      default: 'auto'
    },

    // 高度
    height: {
      type: String,
      default: '400px'
    },

    // 适应父容器
    fit: Boolean,

    // ECharts 配置选项
    options: {
      type: Object
    },

    // 扩展 options
    extend: [Object, Function],

    // 主题
    theme: {
      type: [String, Object],
      default: DEFAULT_THEME
    },

    // 显示加载动画
    loading: Boolean,

    // 打印 options
    debug: {
      type: Boolean
    },

    // 图表私有设置
    settings: {
      type: Object,
      default() {
        return {}
      }
    },

    // 图表数据 echarts dataset
    data: {
      type: [Object, Array],
      default() {
        return {}
      }
    },
    // 地图名称
    map: String,

    // 地图geojson对象或构建函数，函数必须返回Promise
    register: [Object, Function],

    // 坐标集合 如：{'广州': [120.3234, 33.4329]}
    coords: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      // 地图region坐标集合
      coordinates: {}
    }
  },
  computed: {
    classes() {
      return {
        [`sp-chart-${this._uid}`]: true,
        'sp-chart': true
      }
    },
    styles() {
      return {
        width: this.fit ? '100%' : this.width,
        height: this.fit ? '100%' : this.height
      }
    }
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.$nextTick(this.setOption)
      }
    },
    extend: {
      deep: true,
      handler() {
        this.$nextTick(this.setOption)
      }
    },
    settings: {
      deep: true,
      handler() {
        this.$nextTick(this.setOption)
      }
    },
    data: {
      deep: true,
      handler() {
        this.$nextTick(this.setOption)
      }
    },
    loading(val) {
      if (!this.chart) return
      val ? this.chart.showLoading() : this.chart.hideLoading()
    },
    map() {
      this.registerMap()
        .then(this.setOption)
        .catch(e => e)
    },
    coords: {
      handler(val) {
        this.coordinates = Object.assign(this.coordinates, val)
      },
      immediate: true
    }
  },
  methods: {
    init() {
      this.chart = echarts.init(this.$el, this.theme)
      // 绑定echarts事件
      Object.entries(this.$listeners).forEach(([name, handler]) => {
        this.chart.on(name, handler)
      })
      this.loading && this.chart.showLoading()
      this.setOption()

      addResizeListener(this.$el, this.proxyResize)
    },
    // ECharts原生 setOption
    nativeSetOption(options) {
      if (this.debug) {
        // 打印模拟请求日志
        tip(this.$options.name, this._uid)
        log(options)
        log('----------')
      }
      this.chart.setOption(options)
    },
    setOption() {
      // echarts 实例化完成才能 setOption
      if (!this.chart) return
      // 如果设置了 options，其他设置失效，全采用原生ECharts option参数
      if (this.options) {
        this.nativeSetOption(this.options)
        return
      }
      // adapter 由子类实现, 解析私有图表的配置
      const settings = this.$options.adapter ? this.$options.adapter(this) : {}

      // 构造原生echarts option
      const options = merge({}, this.options || {}, settings)

      // 扩展 options
      if (this.extend) {
        setExtend(options, typeof this.extend === 'function' ? this.extend() : this.extend)
      }

      this.nativeSetOption(options)
    },
    dispose() {
      if (!this.chart) return
      Object.entries(this.$listeners).forEach(([name, handler]) => {
        this.chart.off(name, handler)
      })
      this.chart.dispose()
      this.chart = null
      removeResizeListener(this.$el, this.proxyResize)
    },
    resize() {
      if (!this.chart) return
      this.$nextTick(this.chart.resize)
    },
    recordCoords(geo) {
      if (!geo || !geo.features) return
      geo.features.forEach(feat => {
        const properties = feat.properties
        this.coordinates[properties.name] = properties.cp
      })
    },
    registerMap() {
      const {register, map} = this

      // 必须 register 和 map都存在才能注册
      if (!register || !map) return Promise.reject(new Error(null))

      // 如果地图已经注册，不做处理
      const registerGeo = this.echarts.getMap(map)
      if (registerGeo) {
        this.recordCoords(registerGeo.geoJson)
        return Promise.resolve()
      }

      // 如果是函数，执行函数，返回geojson注册
      if (typeof register === 'function') {
        return register(this).then(geo => {
          this.echarts.registerMap(map, geo)
          this.recordCoords(geo)
          return geo
        })
      } else {
        this.echarts.registerMap(map, register)
        this.recordCoords(register)
        return Promise.resolve()
      }
    }
  },
  render() {
    return (
      <div class={this.classes} style={this.styles}>sp-chart</div>
    )
  },
  beforeCreate() {
    this.echarts = echarts
  },
  created() {
    this.registerMap()
      .then(this.setOption)
      .catch(e => e)
    this.proxyResize = debounce(this.resize, 100)
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.dispose()
  }

}
