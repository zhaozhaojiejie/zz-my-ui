import Base from './Base'

export default {
  name: 'spFormCustom',
  mixins: [Base],
  props: {},
  render() {
    const vnode = (
      <div class="sp-form-custom">
        {this.$slots.default}
      </div>
    )
    return this.renderComponent(vnode)
  }
}
