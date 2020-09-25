/**
 * 颜色选择器组件，继承Base
 * @module $ui/components/sp-color-picker
 */

import {ColorPicker} from 'element-ui'
import Base from '../Base'

export default {
  name: 'spColorPicker',
  mixins: [Base],
  components: {
    ColorPicker
  },
  props: {
    value: String
  },
  render() {
    const vnode = (
      <ColorPicker ref="comp"
              class="sp-color-picker"
              {...{props: this.innerProps, on: this.$listeners, attrs: this.innerProps}}
              vModel={this.fieldValue}>
      </ColorPicker>
    )
    
    return this.renderComponent(vnode)
  }
  
}
