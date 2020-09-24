# 快速上手

GoJS是一个JavaScript库，可以让您轻松地在现代Web浏览器中创建交互式图表。
 `$ui/gojs` 是为了简化使用方式进行的封装的vue组件库。
 
 一个简单的例子。
 
:::demo
```html
<template>
  <Diagram height="400px" :nodes="nodes" :links="links"></Diagram>
</template>
<script>
  import {Diagram} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1'},
          {key: 2, text: 'node2'},
          {key: 3, text: 'node3'},
          {key: 4, text: 'node4'},
          {key: 5, text: 'node5'},
          {key: 6, text: 'node6'},
          {key: 7, text: 'node7'},
          {key: 8, text: 'node8'},
          {key: 9, text: 'node9'},
          {key: 10, text: 'node10'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5},
          {from: 1, to: 6},
          {from: 2, to: 7},
          {from: 2, to: 8},
          {from: 2, to: 9},
          {from: 2, to: 10}
        ]
      }
    }
  }
</script>

```
:::

## 绑定数据


:::demo
```html
<template>
  <Diagram  height="400px" :nodes="nodes" :links="links" :options="options"></Diagram>
</template>
<script>
  import {go, Diagram, circle, link} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1'},
          {key: 2, text: 'node2'},
          {key: 3, text: 'node3'},
          {key: 4, text: 'node4'},
          {key: 5, text: 'node5'},
          {key: 6, text: 'node6'},
          {key: 7, text: 'node7'},
          {key: 8, text: 'node8'},
          {key: 9, text: 'node9'},
          {key: 10, text: 'node10'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5},
          {from: 1, to: 6},
          {from: 2, to: 7},
          {from: 2, to: 8},
          {from: 2, to: 9},
          {from: 2, to: 10}
        ],
        options: {
          nodeTemplate: circle({
            label: {
              $bindings: {
                text: 'text'
              }
            }
          }),
          linkTemplate: link({
            toArrow: {},
            label: {
              $bindings: [
                new go.Binding('text', 'to', (v, o) => {
                  const {from, to} = o.part.data
                  return `link:${from}-${to}`
                })
              ]
            }
          })
        }
      }
    }
  }
</script>

```
:::

## 设置布局


:::demo
```html
<template>
  <Diagram height="400px" :nodes="nodes" :links="links" :options="options"></Diagram>
</template>
<script>
  import {Diagram, circular} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1'},
          {key: 2, text: 'node2'},
          {key: 3, text: 'node3'},
          {key: 4, text: 'node4'},
          {key: 5, text: 'node5'},
          {key: 6, text: 'node6'},
          {key: 7, text: 'node7'},
          {key: 8, text: 'node8'},
          {key: 9, text: 'node9'},
          {key: 10, text: 'node10'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5},
          {from: 1, to: 6},
          {from: 2, to: 7},
          {from: 2, to: 8},
          {from: 2, to: 9},
          {from: 2, to: 10}
        ],
        options: {
          layout: circular()
        }
      }
    }
  }
</script>

```
:::

## 设置模板

:::demo
```html
<template>
  <Diagram :nodes="nodes" :links="links" :options="options"></Diagram>
</template>
<script>

  import {Diagram, circle, diamond, icon, image, rectangle, corner, templateMap} from '$ui/gojs'
  import avatar from '$ui/gojs/sources/人员1.png'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1', category: 'circle'},
          {key: 2, text: 'node2', category: 'diamond'},
          {key: 3, text: 'node3', category: 'icon'},
          {key: 4, text: 'node4', category: 'image'},
          {key: 5, text: 'node5', category: 'rectangle'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5}
        ],
        options: {
          nodeTemplateMap: templateMap({
            circle: circle({
              label: {
                $bindings: {text: 'text'}
              }
            }),
            diamond: diamond({
              label: {
                $bindings: {text: 'text'}
              }
            }),
            icon: icon({
              shape: {},
              label: {
                $bindings: {text: 'text'}
              }
            }),
            image: image({
              shape: {},
              image: {
                source: avatar
              },
              label: {
                $bindings: {text: 'text'}
              }
            }),
            rectangle: rectangle({
              shape: {
                width: 100,
                height: 40
              },
              label: {
                $bindings: {text: 'text'}
              }
            })
          }),
          linkTemplate: corner({
            toArrow: true
          })
        }
      }
    }
  }
</script>

```
:::

### 设置主题

:::demo
```html
<template>
  <Diagram :nodes="nodes" :links="links" :options="options" dark></Diagram>
</template>
<script>

  import {Diagram, circle, diamond, icon, image, rectangle, corner, theme, templateMap} from '$ui/gojs'
  import avatar from '$ui/gojs/sources/人员1.png'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1', category: 'circle'},
          {key: 2, text: 'node2', category: 'diamond'},
          {key: 3, text: 'node3', category: 'icon'},
          {key: 4, text: 'node4', category: 'image'},
          {key: 5, text: 'node5', category: 'rectangle'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5}
        ],
        options: {
          nodeTemplateMap: templateMap({
            circle: circle({
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color1),
            diamond: diamond({
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color2),
            icon: icon({
              shape: {},
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color3),
            image: image({
              shape: {},
              image: {
                source: avatar
              },
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color4),
            rectangle: rectangle({
              shape: {
                width: 100,
                height: 40
              },
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color5)
          }),
          linkTemplate: corner({
            toArrow: true
          }, theme.color1)
        }
      }
    }
  }
</script>

```
:::
