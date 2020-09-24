import parseStyle from '../utils/style'
import {mergeProps} from '../utils/util'

/**
 * 线条公共参数
 * @module $ui/map/mixins/stroke
 */
export default {
  props: {
    color: {
      type: String,
      default: '#409eff'
    },
    width: {
      type: Number,
      default: 3
    },
    lineCap: {
      type: String,
      default: 'round',
      validator(val) {
        return ['butt', 'round', 'square'].includes(val)
      }
    },
    lineJoin: {
      type: String,
      default: 'round',
      validator(val) {
        return ['bevel', 'round', 'miter'].includes(val)
      }
    },
    lineDash: {
      type: Array
    },
    lineDashOffset: Number,
    miterLimit: Number
  },
  methods: {
    createLineStyle(props, strokeProps = {}) {
      const stroke = mergeProps(this, Object.keys(props))
      Object.assign(stroke, strokeProps)
      const {fill, zIndex, styleText, styleFunction} = this
      const text = {
        placement: 'line',
        rotateWithView: true,
        ...styleText
      }
      const style = typeof styleFunction === 'function'
        ? styleFunction(this)
        : parseStyle({
          fill,
          stroke,
          zIndex,
          text
        })
      return [style]
    }
  }
}
