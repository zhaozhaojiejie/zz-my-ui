# 内置分组模板

## 默认分组
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, group} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, isGroup: true},
          {key: 2, group: 1},
          {key: 3, group: 1},
          {key: 4, group: 1},
          {key: 5},
          {key: 6}
        ],
        links: [
          {from: 1, to: 5},
          {from: 2, to: 6},
          {from: 2, to: 3},
          {from: 2, to: 4},
          {from: 3, to: 4}
        ],
        options: {
          groupTemplate: group()
        }
      }
    }
  }
</script>

```
:::

## 标题和折叠
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, group} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, isGroup: true},
          {key: 2, group: 1},
          {key: 3, group: 1},
          {key: 4, group: 1},
          {key: 5},
          {key: 6}
        ],
        links: [
          {from: 1, to: 5},
          {from: 2, to: 6},
          {from: 2, to: 3},
          {from: 2, to: 4},
          {from: 3, to: 4}
        ],
        options: {
          groupTemplate: group({
            title: {
              text: '分组名称'
            },
            button: true
          })
        }
      }
    }
  }
</script>

```
:::


## 分组内部布局
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, group, force} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, isGroup: true},
          {key: 2, group: 1},
          {key: 3, group: 1},
          {key: 4, group: 1},
          {key: 5},
          {key: 6}
        ],
        links: [
          {from: 1, to: 5},
          {from: 2, to: 6},
          {from: 2, to: 3},
          {from: 2, to: 4},
          {from: 3, to: 4}
        ],
        options: {
          groupTemplate: group({
            title: {
              text: '分组名称'
            },
            button: true,
            layout: force()
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
  import {Diagram, group, force} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, isGroup: true, title: '相同兴趣圈子', expand: false},
          {key: 2, group: 1},
          {key: 3, group: 1},
          {key: 4, group: 1},
          {key: 5},
          {key: 6}
        ],
        links: [
          {from: 1, to: 5},
          {from: 2, to: 6},
          {from: 2, to: 3},
          {from: 2, to: 4},
          {from: 3, to: 4}
        ],
        options: {
          groupTemplate: group({
            title: {
              $bindings: {
                text: 'title'
              }
            },
            button: true,
            layout: force(),
            $bindings: {
              isSubGraphExpanded: 'expand'
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
  import {Diagram, group, force} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, isGroup: true, title: '相同兴趣圈子'},
          {key: 2, group: 1},
          {key: 3, group: 1},
          {key: 4, group: 1},
          {key: 5},
          {key: 6}
        ],
        links: [
          {from: 1, to: 5},
          {from: 2, to: 6},
          {from: 2, to: 3},
          {from: 2, to: 4},
          {from: 3, to: 4}
        ],
        options: {
          groupTemplate: group({
            title: {
              $bindings: {
                text: 'title'
              }
            },
            button: true,
            $events: {
              subGraphExpandedChanged: this.subGraphExpandedChanged,
              click: this.handleClick
            }
          })
        }
      }
    },
    methods: {
      subGraphExpandedChanged(group) {
        console.log(group.isSubGraphExpanded)
      },
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
           :options="options"></Diagram>
</template>
<script>
  import {Diagram, group, templateMap, theme, grid} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, isGroup: true, category: 'color1'},
          {key: 2, isGroup: true, category: 'color2'},
          {key: 3, isGroup: true, category: 'color3'},
          {key: 4, isGroup: true, category: 'color4'},
          {key: 5, isGroup: true, category: 'color5'},
          {key: 6, isGroup: true, category: 'color6'}
        ],
        options: {
          layout: grid(),
          groupTemplateMap: this.createTemplateMap()
        }
      }
    },
    methods: {
      createTemplateMap() {
        const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const map = {}
        colors.forEach(n => {
          map[n] = group({
            title: {
              text: '分组名称'
            },
            button: true
          }, theme[n])
        })
        return templateMap(map)
      }
    }
  }
</script>

```
:::
