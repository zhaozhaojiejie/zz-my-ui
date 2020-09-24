<template>
  <div class="my-go-overview" :class="classes" :style="styles"></div>
</template>

<script>
  import go from '../utils/lib'
  import creator from '../utils/creator'

  const defaultOptions = function () {
    return {
      contentAlignment: go.Spot.Center
    }
  }

  export default {
    name: 'Overview',
    inject: ['myDiagram'],
    props: {
      options: {
        type: [Object, Function]
      },
      placement: {
        type: String,
        default: 'right-bottom',
        validator(val) {
          return ['left-bottom', 'left-top', 'right-top', 'right-bottom'].includes(val)
        }
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '160px'
      },
      margin: {
        type: Number,
        default: 10
      }
    },
    data() {
      this.overview = null
      return {}
    },
    computed: {
      classes() {
        return {
          [`is-${this.placement}`]: !!this.placement,
          'is-dark': this.myDiagram?.dark
        }
      },
      styles() {
        const {left, top, right, bottom} = this.myDiagram.rect
        const map = {
          'left-top': {
            left: `${left}px`,
            top: `${top}px`
          },
          'left-bottom': {
            left: `${left}px`,
            bottom: `${bottom}px`
          },
          'right-top': {
            right: `${right}px`,
            top: `${top}px`
          },
          'right-bottom': {
            right: `${right}px`,
            bottom: `${bottom}px`
          }
        }
        return {
          width: this.width,
          height: this.height,
          margin: `${this.margin}px`,
          ...map[this.placement]
        }
      }
    },
    mounted() {
      const parent = this?.myDiagram
      if (parent) {
        parent.$once('_ready', diagram => {
          this.overview = typeof this.options === 'function'
            ? this.options(creator({
              name: go.Overview,
              props: defaultOptions()
            }))
            : creator({
              name: go.Overview,
              props: {
                ...defaultOptions(),
                ...this.options
              }
            })
          if (diagram && this.overview) {
            this.overview.div = this.$el
            this.overview.observed = diagram
          }
        })
      }
    },
    beforeDestroy() {
      if (this.overview) {
        this.overview.div = null
        this.overview.observed = null
        this.overview = null
      }

    }
  }
</script>
