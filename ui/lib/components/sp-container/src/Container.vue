<template>
  <div class="sp-container" :class="classes">
    <div class="sp-container__inner" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'spContainer',
    props: {
      fit: Boolean,
      theme: {
        type: String,
        default: '',
        validator(val) {
          return ['', 'primary', 'info', 'warning', 'danger', 'success'].includes(val)
        }
      },
      border: Boolean,
      shadow: Boolean,
      bodyStyle: Object
    },
    computed: {
      classes() {
        return {
          'is-fit': this.fit,
          'is-border': this.border,
          [`sp-container--${this.theme}`]: !!this.theme,
          'is-shadow': this.shadow
        }
      }
    }

  }

</script>
