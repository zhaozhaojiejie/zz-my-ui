# Palette组件

## 基础用法

:::demo
```html
<template>
 <Diagram :nodes="nodes" 
          :links="links" 
          :options="init" 
          :on-model-change="handleModelChange">
   <Palette :options="init" :nodes="palettes"></Palette>
 </Diagram>
</template>
<script>
  import {Palette, Diagram, templateMap, circle, link, theme} from '$ui/gojs'

  export default {
    components: {
      Diagram,
      Palette
    },
    data() {
      return {
        nodes: [
          {key: 1, category: 'color1', text: 'color1'},
          {key: 2, category: 'color2', text: 'color2'},
          {key: 3, category: 'color3', text: 'color3'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 2, to: 3}
        ],
        palettes: [
          {text: 'default'},
          {category: 'color1', text: 'color1'},
          {category: 'color2', text: 'color2'},
          {category: 'color3', text: 'color3'},
          {category: 'color4', text: 'color4'},
          {category: 'color5', text: 'color5'},
          {category: 'color6', text: 'color6'}
        ]
      }
    },
    methods: {
      init(diagram) {
        diagram.nodeTemplateMap = this.createNodeMap()
        diagram.linkTemplate = link({toArrow: true})
        return diagram
      },
      createNodeMap() {
        const colors = [null, 'color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const map = {}
        colors.forEach(n => {
          map[n || ''] = circle({
            shape: {
              width: 60,
              height: 60,
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer'
            },
            label: {
              $bindings: ['text']
            }
          }, theme[n])
        })
        return templateMap(map)
      },
      handleModelChange(e) {
        console.log('model change:', e)
      }
    }

  }
</script>
<style lang="scss" scoped>
  .el-row {
    height: 600px;

    .el-col {
      height: 100%;
    }
  }

  .sp-go-palette {
    border-right: 1px solid #eee;
  }
</style>

```
:::
