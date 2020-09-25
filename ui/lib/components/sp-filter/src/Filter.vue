<template>
  <spForm class="sp-filter"
          :class="classes"
          v-bind="formOptions"
          v-on="$listeners"
          :item-width="itemWidth">
    <slot></slot>
  </spForm>
</template>

<script>
  /**
   * 查询表单组件, 继承spForm
   * @module $ui/components/sp-filter
   */

  import {spForm} from '$ui'
  import responsive, {responsiveArray} from '$ui/utils/responsive'

  // 默认参数
  const defaultValues = {
    inline: true,
    footerAlign: 'right',
    submitText: '查询',
    size: 'small',
    footerExpandBlock: false,
    footerFloat: false
  }

  /**
   * 插槽
   * @member slots
   * @property {string} default 默认插槽，定义表单项
   */
  export default {
    name: 'spFilter',
    components: {
      spForm
    },
    /**
     * 属性参数，支持spFrom全部参数，并增加以下参数
     * @member props
     * @property {number|object} [columns] 一行显示几项, 可设置响应式
     *
     */
    props: {
      // 一行显示几项
      columns: {
        type: [Number, Object],
        default() {
          return {
            xs: 1,
            sm: 2,
            md: 2,
            lg: 3,
            xl: 3,
            xxl: 4
          }
        }
      }
    },
    data() {
      return {
        // 响应式场景
        screens: {},
        currentColumn: 1
      }
    },
    computed: {
      classes() {
        return {
          [`is-${this.$attrs.size}`]: !!this.$attrs.size
        }
      },
      itemWidth() {
        return `calc(${100 / this.currentColumn}% - 10px)`
      },
      formOptions() {
        return {
          ...defaultValues,
          ...this.$attrs
        }
      }
    },
    watch: {
      columns: {
        immediate: true,
        handler() {
          this.setupResponsive()
          this.currentColumn = this.getResponsiveValue()
        }
      },
      screens() {
        this.currentColumn = this.getResponsiveValue()
      }
    },
    methods: {
      // 开启响应式
      setupResponsive() {
        this.token && responsive.off(this.token)

        // 参数是对象类型，即开启响应式
        if (typeof this.columns !== 'object') return

        this.token = responsive.on(screens => {
          this.screens = screens
        })
      },
      // 获取当前响应式的列数
      getResponsiveValue() {
        const columns = this.columns
        const defaultValue = 1
        if (!columns) return defaultValue
        // 参数是对象类型，即开启响应式
        if (typeof columns === 'object') {
          for (let i = 0; i < responsiveArray.length; i++) {
            const breakpoint = responsiveArray[i]
            if (this.screens[breakpoint]) {
              return columns[breakpoint] || defaultValue
            }
          }
        }

        // 数字类型
        return columns

      }
    },
    beforeDestroy() {
      this.token && responsive.off(this.token)
    }
  }
</script>
