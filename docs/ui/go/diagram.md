# 图形组件

## 基础示例
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"></Diagram>
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
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2}
        ]
      }
    }
  }
</script>

```
:::

## 初始化配置选项
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="options"></Diagram>
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
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2}
        ],
        options: {
          allowZoom: false,
          allowMove: false
        }
      }
    }
  }
</script>

```
:::

## 初始化配置函数
:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :options="init"></Diagram>
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
          {key: 1},
          {key: 2}
        ],
        links: [
          {from: 1, to: 2}
        ]
      }
    },
    methods: {
      init(diagram) {
        diagram.allowZoom = false
        diagram.allowMove = false
        return diagram
      }
    }
  }
</script>

```
:::

## 模板与数据绑定

:::demo
```html
<template>
  <Diagram height="200px"
           :nodes="nodes"
           :links="links"
           :data="data"
           :options="init"></Diagram>
</template>
<script>
  import {go, Diagram, circle, link} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        // 节点数据
        nodes: [
          {key: 1, text: '张三', fill: '#ad3'},
          {key: 2, text: '李四', fill: '#49c3d4'}
        ],
        // 连线数据
        links: [
          {from: 1, to: 2, text: '朋友'}
        ],
        // 全局或共享的数据
        data: {
          date: new Date().toLocaleDateString()
        }
      }
    },
    methods: {
      init(diagram) {
        diagram.initialAutoScale = go.Diagram.None
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
          toArrow: true,
          label: {
            $bindings: [
              new go.Binding('text', 'date').ofModel()
            ]
          }
        })

        return diagram
      }
    }
  }
</script>

```
:::

## 右键菜单
:::demo
```html
<template>
    <Diagram height="200px"
             :nodes="nodes"
             :links="links"
             :options="init">
      <MyContextmenu ref="menu1" :data="menus" manual></MyContextmenu>
      <MyContextmenu ref="menu2" :data="nodeMenus" manual></MyContextmenu>
    </Diagram>
</template>
<script>
  import {Diagram, circle, link} from '$ui/gojs'
  import {MyContextmenu} from '$ui'

  export default {
    components: {
      Diagram,
      MyContextmenu
    },
    data() {
      return {
        // 节点数据
        nodes: [
          {key: 1, text: '张三', fill: '#ad3'},
          {key: 2, text: '李四', fill: '#49c3d4'}
        ],
        // 连线数据
        links: [
          {from: 1, to: 2, text: '朋友'}
        ],
        menus: [
          {icon: 'el-icon-view', label: '查看'},
          {icon: 'el-icon-edit', label: '编辑'},
          {
            icon: 'el-icon-finished',
            label: '完成',
            children: [
              {label: '二级菜单1'},
              {label: '二级菜单2'},
              {label: '二级菜单3'},
              {label: '二级菜单4'}
            ]
          },
          {icon: 'el-icon-delete', label: '删除'},
          {divider: true},
          {icon: 'el-icon-document', label: '属性'}
        ],
        nodeMenus: [
          {icon: 'el-icon-edit', label: '编辑'},
          {icon: 'el-icon-delete', label: '删除'},
          {divider: true},
          {icon: 'el-icon-document', label: '属性'}
        ]
      }
    },
    methods: {
      init(diagram) {
        diagram.nodeTemplate = circle({
          label: {
            stroke: '#fff',
            $bindings: ['text']
          },
          shape: {
            $bindings: ['fill']
          },
          $events: {
            contextClick: this.showNodeMenu
          }
        })

        diagram.linkTemplate = link({
          toArrow: true,
          label: {
            $bindings: ['text']
          }
        })

        diagram.contextClick = this.showMenu

        return diagram
      },
      showMenu(e) {
        const {pageX, pageY} = e.event
        // 奇怪的bug，直接赋值pageY回触发原生右键菜单
        this.$refs.menu1.show({x: pageX + 1, y: pageY + 1})
        this.$refs.menu2.hide()
      },
      showNodeMenu(e) {
        const {pageX, pageY} = e.event
        // 奇怪的bug，直接赋值pageY回触发原生右键菜单
        this.$refs.menu2.show({x: pageX + 1, y: pageY + 1})
        this.$refs.menu1.hide()
      }
    }

  }
</script>
```
:::
