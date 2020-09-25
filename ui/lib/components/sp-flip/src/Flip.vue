<template>
<div :class="`sp-flip sp-flip__${size}`" :style="{fontSize:fontSize}">
    <div :class="{'sp-flip__set':true,'sp-flip-previous':previous}">
      <div class="sp-flip__top" :style="innerStyles">
        <span class="sp-flip__wrap">{{oldNumber}}</span>
      </div>
      <div class="sp-flip__shadow-top"></div>
      <div class="sp-flip__bottom" :style="innerStyles">
        <span class="sp-flip__wrap" :style="bottomWrapStyle">{{oldNumber}}</span>
      </div>
      <div class="sp-flip__shadow-bottom"></div>
    </div>

    <div :class="{'sp-flip__set':true,'sp-flip-active':active}">
      <div class="sp-flip__top" :style="innerStyles">
        <span class="sp-flip__wrap">{{newNumber}}</span>
      </div>
      <div class="sp-flip__shadow-top"></div>
      <div class="sp-flip__bottom" :style="innerStyles">
        <span class="sp-flip__wrap" :style="bottomWrapStyle">{{newNumber}}</span>
      </div>
      <div class="sp-flip__shadow-bottom"></div>
    </div>
  </div>
</template>

<script>
/**
 * sp-flip 数字反转
 * @module $ui/components/sp-flip
 */
export default {
  name: 'spFlip',
  /**
   * 属性参数
   * @property {String|Number} [number] 需显示的数字，只能为0-9的正整数
   * @property {String} [color] 卡片的背景色
   * @property {String} [fontSize] 卡片字体的大小
   * @property {String} [size] 卡片的宽度
   */
  props: {
    number: {
      type: [String, Number],
      required: true,
      validator: function (val) {
        return /^[0-9]$/.test(Number.parseInt(val))
      }
    },
    color: {
      type: String,
      default: '#333'
    },
    fontSize: {
      type: String
    },
    size: {
      type: String,
      validator(val) {
        return ['mini', 'small', 'medium'].includes(val)
      },
      default: 'medium'
    }
  },
  data() {
    return {
      previous: true,
      active: true,
      timer: null,
      newNumber: null,
      oldNumber: null,
      bottomWrapStyle: null
    }
  },
  computed: {
    /**
     * 改变整个数字翻页的背景颜色
     */
    innerStyles() {
      return {
        backgroundColor: this.color
      }
    }
  },
  watch: {
    number: {
      handler(newNumber, oldNumber) {
        this.previous = false
        this.active = false
        this.timer = setTimeout(() => {
          this.newNumber = newNumber
          this.oldNumber = oldNumber
          this.previous = true
          this.active = true
        }, 10)
      },
      immediate: true
    },
    size(val) {
      // 修改因改变整个数字翻页的宽高引起的下层数字的显示问题
      this.bottomWrapStyle = {
        marginTop: '-' + this.$el.clientHeight / 2 + 'px'
      }
    } 
  },
  methods: {},
  created() { 
  },
  mounted() {
    this.bottomWrapStyle = {marginTop: '-' + this.$el.clientHeight / 2 + 'px'}
  },
  beforeDestroy() {
    window.clearTimeout(this.timer)
  }
}
</script>