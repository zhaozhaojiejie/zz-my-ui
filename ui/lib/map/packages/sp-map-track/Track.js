/**
 * 轨迹组件
 * @module $ui/map/sp-map-track
 */
import MapLine from '../sp-map-line'
import parseStyle from '../../utils/style'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'

const defaultEffect = {
  circle: {
    fill: '#409eff',
    radius: 6
  }
}

export default {
  name: 'spMapTrack',
  mixins: [MapLine],
  /**
   * 属性参数，继承 [$ui/map/sp-map-line]{@link module:$ui/map/sp-map-line}
   * @member props
   * @property {boolean} [auto=true] 自动播放
   * @property {boolean} [loop=true] 动画循环
   * @property {string|object|function} [effect] 动画样式配置，字符串配置图片，object配置样式描述对象，function返回Style
   * @property {number} [period=10] 动画周期，单位：秒
   */
  props: {
    // 自动播放
    auto: {
      type: Boolean,
      default: true
    },
    // 循环
    loop: {
      type: Boolean,
      default: true
    },
    // 轨迹样式
    effect: {
      type: [Object, String, Function],
      default() {
        return defaultEffect
      }
    },
    // 动画时间，秒
    period: {
      type: Number,
      default: 10
    }
  },
  methods: {
    createEffectStyle(rotation) {
      if (!this.effect) return null
      const paramType = typeof this.effect
      let styles = []
      switch (paramType) {
        case 'function':
          styles = styles.concat(this.effect(this, rotation))
          break
        case 'object':
          styles.push(parseStyle(this.effect))
          break
        case 'string':
          styles.push(parseStyle({
            icon: {
              src: this.effect,
              rotateWithView: false,
              rotation: -rotation,
              scale: 0.5
            }
          }))
          break
      }
      return styles
    },
    getRotation(prev, next) {
      const dx = prev[0] - next[0]
      const dy = prev[1] - next[1]
      return Math.atan2(dy, dx)
    },
    effectRender() {
      const geometry = this.feature.getGeometry()
      const coordinates = geometry.getCoordinates()
      if (!this.effectFeature) {
        this.effectFeature = new Feature(new Point(coordinates[0]))
        this.myMap.addFeature(this.effectFeature)
      }
      const {effectFeature, period} = this

      const start = new Date().getTime()
      const animate = () => {
        const tick = new Date().getTime()
        const fraction = (tick - start) / (period * 1000)
        if (fraction > 1) {
          this.loop && this.effectRender()
          return
        }
        const coordinate = geometry.getCoordinateAt(fraction)
        const nextCoordinate = geometry.getCoordinateAt(Math.min(fraction + 0.0001, 1))
        const rotation = this.getRotation(coordinate, nextCoordinate)
        effectFeature.getGeometry().setCoordinates(coordinate)
        effectFeature.setStyle(this.createEffectStyle(rotation))
        this.$emit('move', coordinate, rotation)
        this.aId = window.requestAnimationFrame(animate)
      }
      animate()
    },
    start() {
      this.effectRender()
    },
    stop() {
      this.aId && window.cancelAnimationFrame(this.aId)
    }
  },
  created() {
    if (this.auto) {
      this.$on('featureDraw', this.effectRender)
    }
  },
  beforeDestroy() {
    if (this.effectFeature) {
      this.myMap.removeFeature(this.effectFeature)
    }
    this.aId && window.cancelAnimationFrame(this.aId)
    this.$off('featureDraw', this.effectRender)
  }
}
