<template>
  <div class="my-go-toolbar" :class="classes">
    <template v-for="(item,index) in toolItems">
      <Divider v-if="typeof item==='string'"
               :key="index"
               class="my-go-toolbar__divider"
               direction="vertical"></Divider>
      <ToolbarItem v-else
                   v-bind="item"
                   :key="index"
                   @click="handleClick"></ToolbarItem>
    </template>

  </div>
</template>

<script>

  import {Divider} from 'element-ui'
  import ToolbarItem from './ToolbarItem'
  import tools from '../utils/tools'
  // import go from '../utils/lib'

  const defaultItems = [
    'json',
    'image',
    '|',
    'undo',
    'redo',
    '|',
    'circle',
    'tree',
    'network',
    'grid',
    '|',
    'hide',
    'show',
    'uniform',
    'select',
    'invert',
    '|',
    'zoomIn',
    'zoomOut'
  ]

  export default {
    name: 'Toolbar',
    inject: ['myDiagram'],
    components: {
      Divider,
      ToolbarItem
    },
    props: {
      items: {
        type: Array,
        default() {
          return defaultItems
        }
      }
    },
    computed: {
      toolItems() {
        return this.items.map(n => {
          if (typeof n === 'string') {
            return tools[n] || null
          }
          return n
        }).filter(n => !!n)
      },
      classes() {
        return {
          'is-dark': this.myDiagram?.dark
        }
      }
    },
    methods: {
      handleClick(vm) {
        const {name, type, options} = vm
        switch (type) {
          case 'layout':
            this.myDiagram.layout(name, options)
            break
          case 'undo':
            this.undo()
            break
          case 'redo':
            this.redo()
            break
          case 'uniform':
            this.myDiagram.uniform()
            break
          case 'select':
            if (name === 'select') {
              this.myDiagram.select()
            } else {
              this.myDiagram.selectInvert()
            }
            break
          case 'zoom':
            if (name === 'in') {
              this.zoomIn()
            } else {
              this.zoomOut()
            }
            break
          case 'hide':
            this.myDiagram.hide(this.myDiagram?.diagram.selection)
            break
          case 'show':
            this.myDiagram.show()
            break
          case 'export':
            this.exportFile(name)
            break
        }
        this.$emit('click', vm)
      },
      undo() {
        const r = this.myDiagram.undo()
        if (!r) {
          this.$message.warning('没有可撤销项')
        }
      },
      redo() {
        const r = this.myDiagram.redo()
        if (!r) {
          this.$message.warning('没有重做项')
        }
      },
      zoomIn() {
        const diagram = this.myDiagram.diagram
        diagram.scale *= 1.1
      },
      zoomOut() {
        const diagram = this.myDiagram.diagram
        diagram.scale *= 0.9
      },
      exportFile(name) {
        switch (name) {
          case 'image':
            this.myDiagram.toImage()
            break
          case 'json':
            this.myDiagram.toJson()
            break
          case 'excel':
            break
        }
      }
    },
    created() {
      this.myDiagram.rect.top = 50
    },
    beforeDestroy() {
      this.myDiagram.rect.top = 0
    }
  }
</script>

