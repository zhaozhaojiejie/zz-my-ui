/**
 * 文本框组件，继承Base
 * @module $ui/components/sp-input-number
 */

import {InputNumber} from 'element-ui'
import Base from '../Base'

export default {
  name: 'spInputNumber',
  mixins: [Base],
  components: {
    InputNumber
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
      <InputNumber ref="comp"
                   class="sp-input-number"
                   {...{props: this.innerProps, on: this.$listeners, attrs: this.innerProps}}
                   vModel={this.fieldValue}>
      </InputNumber>
    )
    
    return this.renderComponent(vnode)
  },
  mounted() {
    this.extendMethods(this.$refs.comp, ['focus', 'select'])
  }
  
}
