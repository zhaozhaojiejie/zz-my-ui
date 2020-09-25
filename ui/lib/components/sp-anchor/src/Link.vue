<template>
  <div class="sp-anchor-link" :class="classes" @click.stop="handleClick">
    <ElLink class="sp-anchor-link__title"
            ref="title"
            :type="currentType"
            :underline="underline"
            :icon="iconString"
            :href="href">
      <spIcon v-if="iconSvg" v-bind="iconSvg"></spIcon>
      <slot name="title" v-bind="$props">{{title}}</slot>
    </ElLink>
    <spAnchorLink v-for="(child,index) in children"
                  v-bind="child"
                  :key="index"
                  :active="active"
                  @click="handleChildClick">
      <template v-if="$scopedSlots.title" v-slot:title="props">
        <slot name="title" v-bind="props">{{title}}</slot>
      </template>
    </spAnchorLink>
  </div>
</template>

<script>
  import {Link} from 'element-ui'
  import {spIcon} from '$ui'

  export default {
    name: 'spAnchorLink',
    components: {
      ElLink: Link,
      spIcon
    },
    inject: ['myAnchor'],
    props: {
      type: {
        type: String,
        default: 'default',
        validator(val) {
          return ['primary', 'success', 'warning', 'danger', 'info', 'default'].includes(val)
        }
      },
      activeType: {
        type: String,
        default: 'primary',
        validator(val) {
          return ['primary', 'success', 'warning', 'danger', 'info', 'default'].includes(val)
        }
      },
      underline: {
        type: Boolean,
        default: false
      },
      disabled: Boolean,
      href: String,
      icon: [String, Object],
      anchor: String,
      active: Object,
      title: String,
      children: Array
    },
    computed: {
      currentType() {
        return this.isActive ? this.activeType : this.type
      },
      iconString() {
        return typeof this.icon === 'string' ? this.icon : null
      },
      iconSvg() {
        return typeof this.icon === 'object' ? this.icon : null
      },
      isActive() {
        return this === this.active
      },
      classes() {
        return {
          'is-active': this.isActive
        }
      }
    },
    methods: {
      handleClick() {
        this.$emit('click', this)
      },
      handleChildClick(vm) {
        this.$emit('click', vm)
      }
    },
    created() {
      if (this.myAnchor) {
        this.myAnchor.links.push(this)
      }
    },
    beforeDestroy() {
      if (this.myAnchor) {
        const index = this.myAnchor.links.findIndex(link => link === this)
        this.myAnchor.links.splice(index, 1)
      }
    }
  }
</script>

<style scoped>

</style>
