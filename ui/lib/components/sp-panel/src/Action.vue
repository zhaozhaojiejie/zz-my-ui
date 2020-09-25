<template>
  <div class="sp-panel-action" :class="classes">
    <spIcon v-if="icon" v-bind="iconOptions"></spIcon>
    <slot>{{text}}</slot>
  </div>
</template>

<script>
  import {spIcon} from '$ui'

  export default {
    components: {
      spIcon
    },
    props: {
      icon: [String, Object],
      text: String
    },
    computed: {
      iconOptions() {
        if (!this.icon) return null
        return typeof this.icon === 'string'
          ? {name: this.icon}
          : this.icon
      },
      classes() {
        return {
          'is-only-icon': this.icon && !this.text && !this.$slots.default
        }
      }
    }
  }
</script>

