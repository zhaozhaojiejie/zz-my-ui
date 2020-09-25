/**
 * 级联组件，继承Base
 * @module $ui/components/sp-cascader
 */

import {Cascader} from 'element-ui'
import Base from '../Base'
import {create as createTree} from '$ui/utils/tree'

/**
 * 插槽
 * @member slots
 * @property {string} default 作用域插槽， 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据
 */

export default {
  name: 'spCascader',
  mixins: [Base],
  components: {
    Cascader
  },
  /**
   * 扩展参数
   * @member props
   * @property {*} [root] 数据项根节点的值
   */
  props: {
    value: [Array, String, Number],
    // 树的根节点，parentId的值
    root: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  methods: {
    getDefaultValue() {
      return []
    }
  },
  computed: {
    optionsTree() {
      const {id, parentId} = this.keyMap
      return createTree(this.currentOptions || [], this.root, id, parentId)
    }
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
      <Cascader ref="comp"
                class="sp-cascader"
                {
                  ...{
                    props: this.innerProps,
                    on: {
                      ...this.$listeners
                    },
                    // attrs: this.innerProps,
                    scopedSlots: scopedSlots
                  }
                }
                options={this.optionsTree}
                vModel={this.fieldValue}>
        {this.createSlots(['empty'])}
      </Cascader>
    )
    return this.renderComponent(vnode)
  },
  mounted() {
    this.extendMethods(this.$refs.comp, ['getCheckedNodes'])
  }
  
}
