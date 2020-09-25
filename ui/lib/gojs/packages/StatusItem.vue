<template>
  <div class="sp-go-status-item" :class="classes">
    <span class="sp-go-status-item__title">{{title}}</span>
    <span class="sp-go-status-item__item"
          v-for="item in items" :key="item.label">{{item.label}}: {{item.value}}</span>
  </div>
</template>

<script>
  export default {
    name: 'StatusItem',
    inject: ['myDiagram'],
    props: {
      title: String,
      // [{label, value}]
      items: Array
    },
    computed: {
      classes() {
        return {
          'is-dark': this.myDiagram?.dark
        }
      }
    }
  }
</script>
