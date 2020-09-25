<template>
  <li v-if="divider"
      class="sp-contextmenu__divider"></li>
  <li v-else
      class="sp-contextmenu__item"
      :class="classes"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click.prevent.stop="handleClick">
    <div class="sp-contextmenu__left">
    <span class="sp-contextmenu__icon">
      <spIcon v-if="iconProps" v-bind="iconProps"></spIcon>
    </span>
      <span class="sp-contextmenu__label">{{label}}</span>
    </div>
    <div class="sp-contextmenu__right">
      <span v-if="info" class="sp-contextmenu__info">{{info}}</span>
      <i v-if="hasChild" class="sp-contextmenu__arrow el-icon-caret-right"></i>
    </div>
    <slot v-if="active" :active="active" :children="children"></slot>
  </li>

</template>

<script>
  import {spIcon} from '$ui'

  export default {
    components: {
      spIcon
    },
    props: {
      icon: [String, Object],
      label: String,
      info: String,
      disabled: Boolean,
      divider: Boolean,
      children: Array
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      iconProps() {
        if (!this.icon) return null
        return typeof this.icon === 'object'
          ? this.icon
          : {
            name: this.icon
          }
      },
      classes() {
        return {
          'is-disabled': this.disabled,
          'is-has-child': this.hasChild
        }
      },
      hasChild() {
        return this.children && this.children.length > 0
      }
    },
    methods: {
      handleMouseEnter(e) {
        this.active = true
        if (this.hasChild) {
          this.$nextTick(() => {
            this.$emit('submenu', this)
          })
        }

      },
      handleMouseLeave(e) {
        this.active = false
      },
      handleClick(e) {
        if (this.disabled) {
          return
        }
        this.$emit('click', this)

      }
    }
  }
</script>


