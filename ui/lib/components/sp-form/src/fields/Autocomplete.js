/**
 * 输入联想组件，继承Base
 * @module $ui/components/sp-autocomplete
 */

import {Autocomplete} from 'element-ui'
import Base from '../Base'

export default {
  name: 'spAutocomplete',
  mixins: [Base],
  components: {
    Autocomplete
  },
  props: {
    value: String
  },
  render() {
    const scopedSlots = this.$scopedSlots.default
      ? {
        default: (props) => {
          return this.$scopedSlots.default(props)
        }
        
      }
      : null;
    
    const vnode = (
      <Autocomplete ref="comp"
                    class="sp-autocomplete"
                    {
                      ...{
                        props: this.innerProps,
                        on: {
                          ...this.$listeners
                        },
                        attrs: this.innerProps,
                        scopedSlots: scopedSlots
                      }
                    }
                    vModel={this.fieldValue}>
        
        {this.createSlots(['prefix', 'suffix', 'prepend', 'append'])}
      </Autocomplete>
    )
    
    return this.renderComponent(vnode)
  },
  mounted() {
    this.extendMethods(this.$refs.comp, ['focus'])
  }
  
}
