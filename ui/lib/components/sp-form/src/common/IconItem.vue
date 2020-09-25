<template>
  <div class="sp-picker-panel-icon-item" :class="{'is-checked':checked}">
    <spIcon :name="name" :svg="svg"></spIcon>
    <div class="icon-item__text">{{name}}</div>
  </div>
</template>

<script>
  import {spIcon} from '$ui'

  export default {
    components: {
      spIcon
    },
    props: {
      name: String,
      svg: Boolean,
      checked: Boolean
    }
  }
</script>
