<template>
  <div class="my-go-palette" :class="classes" :style="styles"></div>
</template>

<script>
  import creator from '../utils/creator'
  import go from '../utils/lib'
  import factory from '../mixins/factory'

  const defaultOptions = function () {
    return {
      initialAutoScale: go.Diagram.None,
      initialContentAlignment: go.Spot.TopCenter,
      'animationManager.initialAnimationStyle': go.AnimationManager.None,
      layout: creator({
        name: go.GridLayout,
        props: {
          wrappingColumn: 1
        }
      }),
      model: creator({
        name: go.GraphLinksModel,
        props: {
          linkKeyProperty: 'key'
        }
      })
    }
  }

  export default {
    name: 'Palette',
    mixins: [factory(go.Palette, defaultOptions)],
    inject: ['myDiagram'],
    props: {
      width: {
        type: Number,
        default: 100
      }
    },
    computed: {
      classes() {
        return {
          'is-dark': this.myDiagram?.dark
        }
      },
      styles() {
        const {top, bottom} = this.myDiagram?.rect
        return {
          width: `${this.width}px`,
          top: `${top}px`,
          bottom: `${bottom}px`
        }
      }
    },
    created() {
      this.myDiagram.rect.left = this.width
    },
    beforeDestroy() {
      this.myDiagram.rect.left = 0
    }
  }
</script>

<style scoped>

</style>
