<template>
  <MapPanel :class="classes" v-bind="panelOptions" v-clickoutside="handleClickOutside">
    <template v-slot:title>
      <slot name="title"></slot>
    </template>
    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
    <slot></slot>
    <template v-slot:append>
      <div :class="switchClass" @click="handleSwitch">
        <i :class="iconClass"></i>
      </div>
    </template>
  </MapPanel>
</template>

<script>
  import MapPanel from '../sp-map-panel'
  import clickoutside from 'element-ui/lib/utils/clickoutside'

  export default {
    name: 'spMapDrawer',
    directives: {
      clickoutside
    },
    components: {
      MapPanel
    },
    props: {
      // 停靠位置
      placement: {
        type: String,
        default: 'left',
        validator(val) {
          return ['left', 'right', 'top', 'bottom'].includes(val)
        }
      },
      collapsed: Boolean,
      closeOnClickOutside: Boolean
    },
    data() {
      return {
        currentCollapsed: this.collapsed
      }
    },
    computed: {
      size() {
        let {width, height} = this.$attrs
        const placement = this.placement
        if (width && height) return {width, height}
        if (['left', 'right'].includes(placement)) {
          height = '100%'
        } else {
          width = '100%'
        }
        return {width, height}
      },
      panelOptions() {
        let placement = ''
        if (['left', 'right'].includes(this.placement)) {
          placement = `${this.placement}-center`
        } else {
          placement = `center-${this.placement}`
        }
        return {
          ...this.$attrs,
          ...this.size,
          margin: 0,
          placement
        }
      },
      classes() {
        return {
          'sp-map-drawer': true,
          'is-collapsed': this.currentCollapsed,
          [`is-placement-${this.placement}`]: !!this.placement
        }
      },
      switchClass() {
        return {
          'sp-map-drawer__switch': true,
          [`is-${this.placement}`]: !!this.placement,
          [`is-${this.$attrs.theme}`]: !!this.$attrs.theme
        }
      },
      iconClass() {
        const collapsed = this.currentCollapsed
        switch (this.placement) {
          case 'left':
            return `el-icon-caret-${collapsed ? 'right' : 'left'}`
          case 'right':
            return `el-icon-caret-${collapsed ? 'left' : 'right'}`
          case 'top':
            return `el-icon-caret-${collapsed ? 'bottom' : 'top'}`
          case 'bottom':
            return `el-icon-caret-${collapsed ? 'top' : 'bottom'}`
        }
        return ''
      }
    },
    methods: {
      handleSwitch() {
        this.currentCollapsed = !this.currentCollapsed
      },
      handleClickOutside() {
        if (this.closeOnClickOutside) {
          this.currentCollapsed = true
        }
      }
    }
  }
</script>
