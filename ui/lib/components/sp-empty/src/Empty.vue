<template>
  <div class="sp-empty" :class="classes">
    <div class="sp-empty__body">
      <slot>
        <div class="sp-empty__img"><img :src="image"/></div>
        <p class="sp-empty__tip">{{tip}}</p>
      </slot>
    </div>
  </div>
</template>

<script>
  /**
   * 空状态
   * @module $ui/components/sp-empty
   */

  const IMAGE_SIMPLE = require('$ui/assets/img/PRESENTED_IMAGE_SIMPLE.png')
  const IMAGE_DEFAULT = require('$ui/assets/img/PRESENTED_IMAGE_DEFAULT.png')

  /**
   * 插槽
   * @member slots
   * @property {string} default 定义内容
   */
  export default {
    IMAGE_SIMPLE,
    IMAGE_DEFAULT,
    name: 'spEmpty',
    /**
     * 属性参数
     * @member props
     * @property {String} [tip=暂无数据] 提示文字
     * @property {String} [image=spEmpty.IMAGE_DEFAULT] 图片地址，内置了 spEmpty.IMAGE_DEFAULT 和 spEmpty.IMAGE_SIMPLE
     * @property {Boolean} [fit] 是否填满父容器，图片水平、垂直都居中
     */
    props: {
      tip: {
        type: String,
        default: '暂无数据'
      },
      image: {
        type: String,
        default: IMAGE_DEFAULT
      },
      fit: Boolean
    },
    computed: {
      classes() {
        return {
          'is-fit': this.fit
        }
      }
    }
  }
</script>
