# 内置连线模板

## 直线连线

:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>

  import {Diagram, link} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2}
        ],
        options: {
          linkTemplate: link({
            label: {
              text: 'link'
            }
          })
        }
      }
    }
  }
</script>

```
:::

## 曲线连线
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>

  import {Diagram, bezier} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2}
        ],
        options: {
          linkTemplate: bezier({
            label: {
              text: 'link'
            },
            props: {
              // 可设置曲线的弧度
              curviness: 20
            }
          })
        }
      }
    }
  }
</script>
```
:::

## 直角拐线
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, corner} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2}
        ],
        options: {
          linkTemplate: corner({
            label: {
              text: 'link'
            }
          })
        }
      }
    }
  }
</script>

```
:::

## 箭头
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, corner} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2}
        ],
        options: {
          linkTemplate: corner({
            toArrow: true,
            fromArrow: true,
            label: {
              text: 'link'
            }
          })
        }
      }
    }
  }
</script>

```
:::

## 数据绑定
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, link} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2, text: '父子'}
        ],
        options: {
          linkTemplate: link({
            toArrow: true,
            label: {
              $bindings: ['text']
            }
          })
        }
      }
    }
  }
</script>

```
:::

## 事件
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, link} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2, text: '父子'}
        ],
        options: {
          linkTemplate: link({
            toArrow: true,
            label: {
              $bindings: ['text']
            },
            $events: {
              click: this.handleClick
            }
          })
        }
      }
    },
    methods: {
      handleClick(e, obj) {
        this.$message.info(`click: ${JSON.stringify(obj.data)}`)
        console.log('click', e, obj)
      }
    }
  }
</script>

```
:::

## 配色

:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, bezier, theme, templateMap} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2, category: 'color1'},
          {from: 1, to: 2, category: 'color2'},
          {from: 1, to: 2, category: 'color3'},
          {from: 1, to: 2, category: 'color4'},
          {from: 1, to: 2, category: 'color5'},
          {from: 1, to: 2, category: 'color6'}
        ],
        options: {
          linkTemplateMap: this.createTemplateMap()
        }
      }
    },
    methods: {
      createTemplateMap() {
        const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const map = {}
        colors.forEach(color => {
          map[color] = bezier({
            toArrow: true,
            label: {
              text: color
            }
          }, theme[color])
        })
        return templateMap(map)
      }
    }
  }
</script>

```
:::
