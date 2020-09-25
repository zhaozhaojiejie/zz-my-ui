<template>
  <div class="sp-go-status-bar" :class="classes">
    <StatusItem v-if="nodeEnabled" title="实体" :items="nodes"></StatusItem>
    <StatusItem v-if="linkEnabled" title="链接" :items="links"></StatusItem>
    <slot :nodes="nodes" :links="links"></slot>
  </div>
</template>

<script>
  import StatusItem from './StatusItem'

  export default {
    name: 'StatusBar',
    components: {
      StatusItem
    },
    inject: ['myDiagram'],
    props: {
      nodeEnabled: {
        type: Boolean,
        default: true
      },
      linkEnabled: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        nodes: null,
        links: null
      }
    },
    computed: {
      classes() {
        return {
          'is-dark': this.myDiagram?.dark
        }
      }
    },
    methods: {
      handleReady(diagram) {
        this.bindEvent(diagram)
        this.collectData()
      },
      handleChange(e) {
        const properties = ['visible', 'isSelected']
        if (properties.includes(e.propertyName)) {
          clearTimeout(this._timeoutId)
          this._timeoutId = setTimeout(this.collectData, 50)
        }
      },
      collectData() {
        const diagram = this.myDiagram?.diagram
        if (!diagram) return
        this.nodes = this.createNodes(diagram.nodes)
        this.links = this.createNodes(diagram.links)
      },
      createNodes(parts) {
        const it = parts.iterator
        const items = [
          {label: '总数', value: 0},
          {label: '选中', value: 0},
          {label: '隐藏', value: 0}
        ]
        items[0].value = parts.count
        while (it.next()) {
          if (it.value.isSelected) {
            ++items[1].value
          }
          if (!it.value.visible) {
            ++items[2].value
          }
        }
        return items
      },
      bindEvent(diagram) {
        diagram.addChangedListener(this.handleChange)
      },
      unbindEvent(diagram) {
        if (!diagram) return
        diagram.removeChangedListener(this.handleChange)
      }
    },
    created() {
      this.myDiagram.rect.bottom = 30
      this.myDiagram.$on('_ready', this.handleReady)
    },
    beforeDestroy() {
      this.myDiagram.rect.bottom = 0
      this.unbindEvent(this.myDiagram?.diagram)
      this.myDiagram.$off('_ready', this.handleReady)
    }
  }
</script>

