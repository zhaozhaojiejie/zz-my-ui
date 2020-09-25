<template>
  <sp-float :class="classes">
    <sp-float-item ref="left" float="left" class="sp-navbar__left">

      <!-- 切换按钮 -->
      <span v-if="collapsible" @click="handleTrigger" class="sp-navbar__trigger">
        <sp-icon :name="triggerIcon" svg></sp-icon>
      </span>

      <!-- 品牌区 -->
      <div v-if="logo || title" class="sp-navbar__brand">
        <a :href="href">
          <slot name="brand" :title="title" :logo="logo">
            <img class="sp-navbar__logo" v-if="logo" :src="logo" :alt="title">
            <h1 class="sp-navbar__title" v-if="title">{{title}}</h1>
          </slot>
          <span v-if="version" class="sp-navbar__version">{{version}}</span>
        </a>
      </div>

    </sp-float-item>

    <!-- 自定义内容区 -->
    <sp-float-item v-if="$slots.default" ref="content" float="left" class="sp-navbar__content">
      <slot></slot>
    </sp-float-item>

    <!-- 菜单区 -->
    <sp-float-item v-if="menus && menus.length" float="left" class="sp-navbar__menu" :style="menuStyle">
      <sp-menu v-bind="menuOptions" :data="menus" @select="handleSelect">
        <template v-if="$scopedSlots['menu-item']" v-slot:title="{item}">
          <slot name="menu-item" :item="item"></slot>
        </template>
      </sp-menu>
    </sp-float-item>

    <sp-float-item ref="right" float="right" class="sp-navbar__right">
      <!-- 工具按钮放置区 -->
      <div class="sp-navbar__actions" :class="[`is-${theme}`]">
        <slot name="actions"></slot>
      </div>
    </sp-float-item>

  </sp-float>
</template>

<script>

  /**
   * 导航条组件
   * @module $ui/components/sp-navbar
   */
  import {spFloat, spFloatItem, spIcon, spMenu} from '$ui'
  import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
  import defaultLogo from '$ui/assets/myweb.png'
  import '$ui/icons/indent'
  import '$ui/icons/outdent'

  /**
   * 插槽
   * @member slots
   * @property {string} brand 作用域插槽，定义品牌区的logo 和 标题， 参数：logo、title
   * @property {string} default 默认插槽，定义额外内容
   * @property {string} menu-item 作用域插槽，定义菜单项，参数：item 菜单项对象
   * @property {string} actions 定义操作区内容
   */

  export default {
    name: 'spNavbar',
    components: {
      spFloat,
      spFloatItem,
      spIcon,
      spMenu
    },
    /**
     * 属性参数
     * @member props
     * @property {string} [logo] logo图片地址
     * @property {string} [title] 标题名称，如系统名称
     * @property {string} [version] 版本号
     * @property {string} [href] 品牌区链接地址，通常设置系统首页
     * @property {boolean} [collapsible=false] 显示触发切换折叠按钮
     * @property {boolean} [collapsed=false] 折叠，collapsible 为true时有效，支持sync修饰符
     * @property {array} [menus] 菜单数据, 项字段参考 sp-menu 组件
     * @property {object} [menuProps] 菜单组件实例化参数，字段参考 sp-menu 组件
     * @property {string} [theme=light] 主题，可选值：'light', 'dark', 'primary', 'gradual'
     * @property {boolean} [shadow] 显示阴影
     */
    props: {
      // logo 图片
      logo: {
        type: String,
        default: defaultLogo
      },
      // 系统名称
      title: String,

      // 系统版本号
      version: String,
      // 品牌链接地址
      href: {
        type: String
      },
      // 显示触发折叠按钮
      collapsible: Boolean,

      // 折叠，collapsible 为true时有效
      collapsed: Boolean,

      // 菜单数据
      menus: Array,

      // 菜单参数
      menuProps: Object,

      // 主题
      theme: {
        type: String,
        default: 'light',
        validator(val) {
          return ['light', 'dark', 'primary', 'gradual', 'black'].includes(val)
        }
      },
      // 显示阴影
      shadow: Boolean

    },
    data() {
      return {
        leftWidth: 0,
        rightWidth: 0,
        contentWidth: 0
      }
    },
    computed: {
      classes() {
        return {
          'sp-navbar': true,
          [`is-${this.theme}`]: !!this.theme,
          'is-shadow': this.shadow
        }
      },
      triggerIcon() {
        return this.collapsed
          ? 'icon-indent'
          : 'icon-outdent'
      },
      menuOptions() {
        return {
          ...(this.menuProps || {}),
          mode: 'horizontal',
          theme: this.theme
        }
      },
      menuStyle() {
        return {
          width: `calc(100% - ${this.leftWidth + this.rightWidth + this.contentWidth}px)`
        }
      }
    },
    methods: {
      handleTrigger() {
        if (!this.collapsible) return
        this.$emit('update:collapsed', !this.collapsed)
      },
      handleSelect(item) {
        /**
         * 菜单项选中时触发
         * @event select
         * @param {Object} item 菜单项对象
         */
        this.$emit('select', item)
      },
      updateWidth() {
        if (this.$refs.left) {
          const rect = this.$refs.left.$el.getBoundingClientRect()
          this.leftWidth = rect.width
        }
        if (this.$refs.right) {
          const rect = this.$refs.right.$el.getBoundingClientRect()
          this.rightWidth = rect.width
        }
        if (this.$refs.content) {
          const rect = this.$refs.content.$el.getBoundingClientRect()
          this.contentWidth = rect.width
        }
      },
      bindEvents() {
        if (this.$refs.left) {
          addResizeListener(this.$refs.left.$el, this.updateWidth)
        }
        if (this.$refs.right) {
          addResizeListener(this.$refs.right.$el, this.updateWidth)
        }
        if (this.$refs.content) {
          addResizeListener(this.$refs.content.$el, this.updateWidth)
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.updateWidth()
      }, 0)

      this.bindEvents()

    },
    beforeDestroy() {
      if (this.$refs.left) {
        removeResizeListener(this.$refs.left.$el, this.updateWidth)
      }
      if (this.$refs.right) {
        removeResizeListener(this.$refs.right.$el, this.updateWidth)
      }
      if (this.$refs.content) {
        removeResizeListener(this.$refs.content.$el, this.updateWidth)
      }
    }
  }
</script>

