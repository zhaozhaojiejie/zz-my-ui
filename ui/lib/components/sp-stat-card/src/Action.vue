<template>
  <div class="sp-stat-card-action">
    <Tooltip v-bind="tooltipProps">
      <slot>
        <spIcon v-bind="iconProps"></spIcon>
      </slot>
    </Tooltip>
  </div>
</template>

<script>
  import {spIcon} from '$ui'
  import {Tooltip} from 'element-ui'

  export default {
    name: 'Action',
    components: {
      spIcon,
      Tooltip
    },
    props: {
      icon: [String, Object],
      tooltip: [String, Object]
    },
    computed: {
      iconProps() {
        return typeof this.icon === 'string'
          ? {name: this.icon}
          : this.icon
      },
      tooltipProps() {
        if (!this.tooltip) return {disabled: true}
        return typeof this.tooltip === 'string'
          ? {
            content: this.tooltip,
            placement: 'top'
          }
          : {
            placement: 'top',
            ...this.tooltip
          }
      }
    }
  }
</script>

<style scoped>

</style>
