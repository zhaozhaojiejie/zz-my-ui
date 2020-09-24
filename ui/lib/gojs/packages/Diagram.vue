<template>
  <div class="my-go-diagram"
       :class="classes"
       :style="styles">
    <div ref="content" class="my-go-diagram__content" :style="contentStyle"></div>
    <div v-show="loading" class="my-go-diagram__loading">
      <div class="my-go-diagram__loading-inner">
        <MySpin loading></MySpin>
      </div>
    </div>
    <slot></slot>
  </div>

</template>

<script>
  import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
  import {MySpin} from '$ui'
  import go from '../utils/lib'
  import {debounce} from '$ui/utils/util'
  import creator from '../utils/creator'
  import {force} from '../layouts/index'
  import {circle, link} from '../template/index'
  import factory from '../mixins/factory'
  import layout from '../mixins/layout'
  import finder from '../mixins/finder'
  import '../style/index.scss'


  const defaultOptions = function () {
    return {
      initialAutoScale: go.Diagram.Uniform,
      initialContentAlignment: go.Spot.Center,
      initialDocumentSpot: go.Spot.Center,
      autoScale: go.Diagram.None,
      hasHorizontalScrollbar: false,
      hasVerticalScrollbar: false,
      allowSelect: true,
      'animationManager.isEnabled': true,
      'undoManager.isEnabled': true,
      'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom,
      'toolManager.hoverDelay': 200,
      model: creator({
        name: go.GraphLinksModel,
        props: {
          linkKeyProperty: 'key'
        }
      }),
      nodeTemplate: circle(),
      linkTemplate: link(),
      layout: force()
    }
  }

  export default {
    name: 'Diagram',
    mixins: [
      factory(go.Diagram, defaultOptions, 'content'),
      layout,
      finder
    ],
    components: {
      MySpin
    },
    provide() {
      return {
        myDiagram: this
      }
    },
    props: {
      dark: Boolean,
      fit: Boolean,
      width: String,
      height: {
        type: String,
        default: '600px'
      }
    },
    data() {
      return {
        rect: {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }
      }
    },
    computed: {
      classes() {
        return {
          'is-dark': this.dark
        }
      },
      styles() {
        return {
          width: this.fit ? '100%' : this.width,
          height: this.fit ? '100%' : this.height
        }
      },
      contentStyle() {
        const {left, top, bottom, right} = this.rect
        return {
          left: `${left}px`,
          top: `${top}px`,
          bottom: `${bottom}px`,
          right: `${right}px`
        }
      }
    },
    mounted() {
      this.proxyResize = debounce(this.resize, 200, false)
      addResizeListener(this.$refs.content, this.proxyResize)
    },
    beforeDestroy() {
      this.proxyResize && removeResizeListener(this.$refs.content, this.proxyResize)
    }
  }
</script>

