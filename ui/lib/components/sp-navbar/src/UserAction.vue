<script>

  /**
   * 用户信息工具按钮， 只能用在 sp-navbar 的 actions 插槽
   *  @module $ui/components/sp-navbar-UserAction
   */
  import {spAvatar} from '$ui'
  import dropdown from './dropdown'

  /**
   * 点击图标触发
   * @event click
   */

  /**
   * 点击下来菜单项目触发
   * @event command
   * @param {string} command 菜单项名称
   */


  export default {
    mixins: [dropdown],
    components: {
      spAvatar
    },
    /**
     * 属性参数
     * @member props
     * @property {string|object} [avatar] 头像配置，参考 sp-avatar 对象
     * @property {string} [username] 用户名称
     * @property {string} [extra] 额外信息，如部门，角色
     * @property {object} [dropdownOptions] 下拉菜单配置, 参考 el-dropdown 组件
     * @property {array} [dropdownItems] 下拉菜单数据 {text, icon, command, disabled, divided}
     */
    props: {
      avatar: [String, Object],
      username: String,
      extra: String
    },
    computed: {
      avatarOptions() {
        return typeof this.avatar === 'string'
          ? {
            src: this.avatar
          }
          : {
            ...this.avatar
          }
      },
      avatarText() {
        if (this.avatarOptions.src) return null
        if (!this.username) return null
        return this.username.substring(0, 1)
      }
    },
    render() {
      const textNodes = []
      if (this.username) {
        textNodes.push(<span class="sp-navbar-user-action__name">{this.username}</span>)
      }
      if (this.extra) {
        textNodes.push(<span class="sp-navbar-user-action__extra">{this.extra}</span>)
      }

      let vnode = (
        <span class="sp-navbar-user-action__wrapper">
          <sp-avatar {...{props: this.avatarOptions}}>{this.avatarText}</sp-avatar>
          <div class="sp-navbar-user-action__text">{textNodes}</div>
        </span>
      )


      if (this.dropdownItems) {
        vnode = this.wrapDropdown(vnode)
      }

      return (
        <span class="sp-navbar-action sp-navbar-user-action" {...{on: this.$listeners}}>
          {vnode}
        </span>
      )
    }
  }
</script>
