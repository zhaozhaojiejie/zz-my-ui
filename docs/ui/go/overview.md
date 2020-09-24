# 缩略图组件

## 基本用法

:::demo
```html
<template>
    <Diagram height="600px"
             :nodes="nodes"
             :links="links"
             :options="init">
      <Overview></Overview>
    </Diagram>
</template>
<script>
  import {go, Diagram, Overview, circle, link} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'

  export default {
    components: {
      Diagram,
      Overview
    },
    data() {
      const {nodes, links} = mockGraph(100, 100, 5, 10)
      return {
        nodes: nodes,
        links: links
      }
    },
    methods: {
      init(diagram) {
        diagram.initialAutoScale = go.Diagram.None
        diagram.hasHorizontalScrollbar = false
        diagram.hasVerticalScrollbar = false
        diagram.nodeTemplate = circle({
          label: {
            stroke: '#fff',
            $bindings: ['text']
          },
          shape: {
            $bindings: ['fill']
          }
        })

        diagram.linkTemplate = link({
          toArrow: true
        })

        return diagram
      }
    }

  }
</script>

```
:::
