<template>
  <Tooltip v-bind="tooltipProps">
    <div class="sp-go-toolbar__item" :class="classes" @click="handleClick">
      <spIcon v-bind="iconProps"></spIcon>
    </div>
  </Tooltip>
</template>

<script>
  import {spIcon} from '$ui'
  import {Tooltip} from 'element-ui'
  import '../utils/icons'

  export default {
    name: 'ToolbarItem',
    inject: ['myDiagram'],
    components: {
      spIcon,
      Tooltip
    },
    props: {
      name: String,
      type: String,
      disabled: Boolean,
      tooltip: [String, Object],
      icon: [String, Object],
      vertical: Boolean,
      options: Object
    },
    computed: {
      classes() {
        return {
          'is-disabled': this.disabled,
          'is-dark': this.myDiagram?.dark
        }
      },
      tooltipProps() {
        const effect = this.myDiagram?.dark ? 'light' : 'dark'
        return typeof this.tooltip === 'string'
          ? {
            content: this.tooltip,
            disabled: this.disabled,
            placement: this.vertical ? 'right' : 'top',
            effect
          }
          : {
            placement: this.vertical ? 'right' : 'top',
            disabled: this.disabled,
            effect,
            ...this.tooltip
          }
      },
      iconProps() {
        return typeof this.icon === 'string'
          ? {
            name: this.icon
          }
          : this.icon
      }
    },
    methods: {
      handleClick() {
        if (this.disabled) return
        this.$emit('click', this)
      }
    }
  }
</script>
