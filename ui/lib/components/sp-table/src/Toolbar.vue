<template>
  <div class="sp-table-toolbar" :class="classes">
    <div class="sp-table-toolbar__title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="sp-table-toolbar__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      size: String
    },
    computed: {
      classes() {
        return {
          [`sp-table-toolbar--${this.size}`]: !!this.size
        }
      }
    }
  }
</script>

