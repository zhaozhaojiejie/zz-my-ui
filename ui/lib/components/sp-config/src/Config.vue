<script>
  export default {
    name: 'spConfig',
    props: {},
    provide() {
      return {
        configProvider: this.$props
      }
    },
    render() {
      return this.$slots.default ? this.$slots.default[0] : null;
    }
  }
</script>
