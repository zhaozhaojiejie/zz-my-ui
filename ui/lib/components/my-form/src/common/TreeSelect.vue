<template>
  <BasePicker class="my-tree-select"
              :disabled="readonly || disabled"
              ref="picker"
              popper-class="my-tree-select__popover"
              ref-class="my-tree-select__ref">
    <template v-slot:reference>
      <TagInput v-if="multiple"
                :placeholder="placeholder"
                :size="size"
                :value="tags"
                :disabled="disabled"
                :readonly="readonly"
                :collapse-tags="collapseTags"
                :closable="closable"
                :allow-create="false"
                @remove="handleRemove"
                icon="el-icon-arrow-down"></TagInput>
      <ElInput v-else
               :value="checked ? checked[keyMap.label]:''"
               :placeholder="placeholder"
               :size="size"
               :disabled="disabled"
               :readonly="readonly"
               suffix-icon="el-icon-arrow-down"></ElInput>
    </template>

    <div class="my-tree-select__content">
      <ElInput v-if="filter"
               class="my-tree-select__filter"
               v-model="query"
               size="small"
               clearable
               placeholder="请输入筛选关键字"></ElInput>
      <Tree class="my-tree-select__tree is-line"
            ref="tree"
            v-bind="tree"
            :highlight-current="!multiple"
            :show-checkbox="multiple"
            @current-change="handleCurrentChange"
            @check-change="handleCheckChange"
            :node-key="keyMap.value"
            :filter-node-method="filterNodeMethod"
            :current-node-key="currentNodeKey"
            :default-checked-keys="defaultCheckedKeys"
            :data="optionsTree"
            :style="treeStyle">
        <template v-slot="{node, data}">
            <span :class="{'is-disabled':node[keyMap.disabled]}">
              <slot :node="node"
                    :data="data">{{node[keyMap.label]}}</slot></span>
        </template>
      </Tree>
    </div>

  </BasePicker>
</template>

<script>
  /**
   * 下拉树组件
   * @module $ui/components/my-form/src/common/TreeSelect
   */
  import {Input, Tree} from 'element-ui'
  import BasePicker from './BasePicker'
  import TagInput from './TagInput'
  import {create as createTree} from '$ui/utils/tree'
  import {isEqual} from '$ui/utils/util'

  /**
   * 属性参数
   * @member props
   * @property {string|number|array} [value] 值，多选为数组，支持双向绑定
   * @property {array} [options] 选项数组 [{id, parentId, label, value}]
   * @property {Object} [keyMap] 字段映射 {id, parentId, label, value, disabled}
   * @property {boolean} [multiple] 开启多选
   * @property {string} [size] 尺寸，可选值：'medium', 'small', 'mini', ''
   * @property {boolean} [disabled]  禁用
   * @property {boolean} [readonly] 只读
   * @property {number} [minWidth=300] 弹出层的最小宽度
   * @property {number} [maxHeight] 弹出层的最大高度
   * @property {boolean|function} [filter] 筛选函数， false即不开启筛选功能
   * @property {*} [root=null] 树的根节点，parentId的值
   * @property {boolean} [collapseTags]  折叠标签，多选有效
   * @property {boolean} [closable] 允许关闭标签，多选有效
   * @property {object} [tree] el-tree的其他参数
   *
   */
  export default {

    components: {
      ElInput: Input,
      TagInput,
      Tree,
      BasePicker
    },
    props: {
      // 值
      value: [String, Number, Array],
      // 选项数据
      options: {
        type: Array,
        default() {
          return []
        }
      },
      // 字段映射
      keyMap: {
        type: Object,
        default() {
          return {
            id: 'id',
            parentId: 'parentId',
            label: 'label',
            disabled: 'disabled',
            value: 'value'
          }
        }
      },
      // 开启多选
      multiple: Boolean,
      placeholder: String,
      // 尺寸
      size: {
        type: String,
        default: '',
        validator(val) {
          return ['medium', 'small', 'mini', ''].includes(val)
        }
      },
      // 禁用
      disabled: Boolean,
      // 只读
      readonly: Boolean,

      // 筛选函数
      filter: {
        type: [Boolean, Function],
        default: true
      },
      // 树的根节点，parentId的值
      root: {
        type: [String, Number, Boolean],
        default: null
      },
      // 折叠标签，多选有效
      collapseTags: Boolean,
      // 允许关闭标签，多选有效
      closable: {
        type: Boolean,
        default: true
      },
      // 树其他参数
      tree: {
        type: Object,
        default() {
          return {}
        }
      },
      // 弹出层的最大高度
      maxHeight: {
        type: Number,
        default: 300
      }
    },
    data() {
      return {
        checked: null,
        query: ''
      }
    },
    computed: {
      treeStyle() {
        return {
          maxHeight: `${this.maxHeight}px`
        }
      },
      optionsTree() {
        const {id, parentId} = this.keyMap
        return createTree(this.options || [], this.root, id, parentId)
      },
      currentNodeKey() {
        if (this.multiple) {
          return
        }
        return this.checked ? this.checked[this.keyMap.value] : undefined
      },
      defaultCheckedKeys() {
        if (!this.multiple) return
        const {value} = this.keyMap
        return this.checked ? this.checked.map(n => n[value]) : []
      },
      filterNodeMethod() {
        const {label} = this.keyMap
        return typeof this.filter === 'function' ? this.filter : (value, data) => {
          if (!value) return true;
          return data[label].indexOf(value) !== -1;
        }
      },
      tags() {
        const {label} = this.keyMap
        return (this.checked || []).map(n => n[label])
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          const {value} = this.keyMap
          if (isEqual(val, this.checked)) return
          if (this.multiple) {
            const vals = val ? [].concat(val) : []
            this.checked = this.options.filter(item => {
              return vals.includes(item[value])
            })
          } else {
            this.checked = this.options.find(item => {
              return val === item[value]
            })
          }
        }
      },
      checked(val) {
        this.$emit('change', val)
      },
      query(val) {
        this.$refs.tree.filter(val)
      }
    },
    methods: {
      handleCurrentChange(item, node) {
        if (this.multiple || item.disabled || this.readonly || this.disabled) return
        this.checked = item
        this.$emit('input', item[this.keyMap.value])
        this.$nextTick(() => {
          this.$refs.picker.visible = false
        })

      },
      handleCheckChange() {
        this.checked = this.$refs.tree.getCheckedNodes()
        const {value} = this.keyMap
        this.$emit('input', this.checked.map(n => n[value]))
      },
      handleRemove(index) {
        if (this.checked) {
          this.checked.splice(index, 1)
          const {value} = this.keyMap
          const keys = this.checked.map(n => n[value])
          this.$refs.tree.setCheckedNodes(keys)
          this.$emit('input', keys)
          this.$refs.picker.visible = false
        }
      }
    }
  }
</script>

