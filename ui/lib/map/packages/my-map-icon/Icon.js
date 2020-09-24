/**
 * icon覆盖物组件
 * @module $ui/map/my-map-icon
 */
import MyMapHtml from '../my-map-html/Html'
import {MyIcon} from '$ui'

export default {
  name: 'MyMapIcon',
  components: {
    MyMapHtml,
    MyIcon
  },
  /**
   * 属性参数, 继承 [$ui/map/packages/my-map-html]{@link module:$ui/map/packages/my-map-html}
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
      <MyMapHtml {...{props: this.$attrs}} style={this.iconStyle}>
        <MyIcon {...iconProps}></MyIcon>
      </MyMapHtml>
    )
  }
}
