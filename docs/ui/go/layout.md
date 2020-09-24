# 布局设置

## 力导向网络布局
:::demo
```html
<template>
  <Diagram height="600px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, circle, force} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [],
        links: [],
        options: {
          layout: force(),
          nodeTemplate: circle({
            shape: {
              $bindings: ['fill']
            }
          })
        }
      }
    },
    created() {
      const {nodes, links} = mockGraph(50, 100, 5, 10)
      this.nodes = nodes
      this.links = links
    }
  }
</script>

```
:::


## 网格布局
:::demo
```html
<template>
  <Diagram height="600px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, circle, grid} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [],
        links: [],
        options: {
          layout: grid(),
          nodeTemplate: circle({
            shape: {
              $bindings: ['fill']
            }
          })
        }
      }
    },
    created() {
      const {nodes, links} = mockGraph(50, 100, 5, 10)
      this.nodes = nodes
      this.links = links
    }
  }
</script>

```
:::

## 圆形布局
:::demo
```html
<template>
  <Diagram height="600px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, circle, circular} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [],
        links: [],
        options: {
          layout: circular(),
          nodeTemplate: circle({
            shape: {
              $bindings: ['fill']
            }
          })
        }
      }
    },
    created() {
      const {nodes, links} = mockGraph(50, 100, 5, 10)
      this.nodes = nodes
      this.links = links
    }
  }
</script>

```
:::

## 树结构布局
:::demo
```html
<template>
  <Diagram height="600px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, circle, tree} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [],
        links: [],
        options: {
          layout: tree(),
          nodeTemplate: circle({
            shape: {
              $bindings: ['fill']
            }
          })
        }
      }
    },
    created() {
      const {nodes, links} = mockGraph(50, 100, 5, 10)
      this.nodes = nodes
      this.links = links
    }
  }
</script>

```
:::

## 分层有向布局
:::demo
```html
<template>
  <Diagram height="600px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, circle, layered} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [],
        links: [],
        options: {
          layout: layered(),
          nodeTemplate: circle({
            shape: {
              $bindings: ['fill']
            }
          })
        }
      }
    },
    created() {
      const {nodes, links} = mockGraph(50, 100, 5, 10)
      this.nodes = nodes
      this.links = links
    }
  }
</script>

```
:::
