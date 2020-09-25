/**
 * icon覆盖物组件
 * @module $ui/map/sp-map-icon
 */
import spMapHtml from '../sp-map-html/Html'
import {spIcon} from '$ui'

export default {
  name: 'spMapIcon',
  components: {
    spMapHtml,
    spIcon
  },
  /**
   * 属性参数, 继承 [$ui/map/packages/sp-map-html]{@link module:$ui/map/packages/sp-map-html}
   * @member props
   * @property {string} [name] 图标名称
   * @property {boolean} [svg] 是否svg图标
   * @property {number} [size] 尺寸
   * @property {string} [theme] 主题风格，支持 primary / success / warning / danger / info
   * @property {string} [color] 自定义颜色
   */
  props: {
    name: {
      type: String,
      required: true
    },
    svg: Boolean,
    size: Number,
    theme: String,
    color: String
  },
  computed: {
    iconStyle() {
      return {
        fontSize: `${this.size}px`,
        color: this.color
      }
    }
  },
  render() {
    const iconProps = {
      props: this.$props,
      on: this.$listeners
    }
    return (
      <spMapHtml {...{props: this.$attrs}} style={this.iconStyle}>
        <spIcon {...iconProps}></spIcon>
      </spMapHtml>
    )
  }
}
