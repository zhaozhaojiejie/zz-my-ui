<template>
  <div class="my-go-sidebar" :class="classes" :style="styles">
    <slot></slot>
    <div class="my-go-sidebar__collapsible" @click="handleCollapse">
      <i :class="arrow"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
    inject: ['myDiagram'],
    props: {
      width: {
        type: Number,
        default: 300
      },
      collapsible: Boolean,
      collapsed: Boolean
    },
    computed: {
      classes() {
        return {
          'is-collapsed': !!this.collapsed,
          'is-dark': this.myDiagram?.dark
        }
      },
      styles() {
        const {top, bottom} = this.myDiagram?.rect
        return {
          width: `${this.width}px`,
          top: `${top}px`,
          bottom: `${bottom}px`
        }
      },
      arrow() {
        return this.collapsed ? 'el-icon-arrow-left' : 'el-icon-arrow-right'
      }
    },
    watch: {
      collapsed: {
        immediate: true,
        handler(val) {
          this.myDiagram.rect.right = val ? 0 : this.width
        }
      }
    },
    methods: {
      handleCollapse() {
        this.$emit('update:collapsed', !this.collapsed)
      }
    },
    beforeDestroy() {
      this.myDiagram.rect.right = 0
    }
  }
</script>
