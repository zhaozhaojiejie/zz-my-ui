<template>
  <div class="sp-description" :class="{'is-top':top,'is-inline':inline}">
    <div
      class="sp-description__title"
      :style="titleStyle"
      :class="titleClass">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="sp-description__content"
         :class="contentClass"
         :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  /**
   * 描述数据组件
   * @module $ui/components/sp-description
   */

  /**
   * 插槽 slots
   * @member slots
   * @property {string} default 默认插槽，展示内容
   * @property {string} title 定义标题内容
   */
  export default {
    name: 'spDescription',
    /**
     * 属性参数
     * @member props
     * @property {string} [title] 标题文本，复杂内容可以用插槽定义
     * @property {number} [width] 标题区宽度， top 为false有效
     * @property {number} [gutter=10]  标题区与内容区的边距
     * @property {string} [align=left] 标题区对齐方式, 可选 'left', 'right', 'center'
     * @property {boolean} [top=false] 标题在顶部
     * @property {boolean} [inline=false] 单行显示
     */
    props: {
      // 标题文本
      title: String,
      // 标题区宽度， top 为false有效
      width: Number,
      // 标题区与内容区的边距
      gutter: {
        type: Number,
        default: 10
      },
      // 标题区对齐方式
      align: {
        type: String,
        default: 'left',
        validator(val) {
          return ['left', 'right', 'center'].includes(val)
        }
      },
      // 标题在顶部
      top: Boolean,
      // 单行显示
      inline: Boolean
    },
    computed: {
      hasTitle() {
        return this.title || this.$slots.title
      },
      titleStyle() {
        return {
          width: this.top ? null : `${this.width}px`
        }
      },
      contentStyle() {
        return {
          display: (this.top || this.width) ? 'block' : 'inline',
          paddingLeft: (this.hasTitle && !this.top)
            ? `${(this.width || 0) + this.gutter}px`
            : null,
          paddingTop: (this.top && this.hasTitle) ? `${this.gutter}px` : null
        }
      },
      titleClass() {
        return {
          [`is-${this.align}`]: !!this.align
        }
      },
      contentClass() {
        return {
          [`is-${this.align}`]: (this.top && !!this.align)
        }
      }
    }
  }
</script>

