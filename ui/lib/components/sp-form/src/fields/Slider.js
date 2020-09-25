/**
 * 文本框组件，继承Base
 * @module $ui/components/sp-slider
 */

import {Slider} from 'element-ui'
import Base from '../Base'

export default {
  name: 'spSlider',
  mixins: [Base],
  components: {
    Slider
  },
  props: {
    value: Number
  },
  methods: {
    getDefaultValue() {
      return 0
    }
  },
  render() {
    const vnode = (
      <Slider ref="comp"
              class="sp-slider"
              {...{props: this.innerProps, on: this.$listeners, attrs: this.innerProps}}
              vModel={this.fieldValue}>
      </Slider>
    )
    
    return this.renderComponent(vnode)
  }
  
}
