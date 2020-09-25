# Dialog 弹窗组件

模态对话框。需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
文档 <api-link href="components/sp-dialog">spDialog</api-link>

## 代码演示

### 基础用法

:::demo(dialog-1)
```html
<template>
    <div>
      <el-button type="primary" @click="open">简单弹窗</el-button>
      <sp-dialog :visible.sync="visible" target="body" title="标题文字" width="400px" height="200px">
        这里是内容
      </sp-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    }
  }
}
</script>

```
:::

### 带遮罩层

:::demo(dialog-2)
```html
<template>
    <div>
      <el-button type="primary" @click="open">打开弹窗</el-button>
      <sp-dialog :visible.sync="visible"
                  modal
                  target="body"
                  icon="el-icon-menu"
                  title="标题文字"
                  width="400px" 
                  height="200px">
        这里是内容
      </sp-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    }
  }
}
</script>

```
:::

### 主题风格

:::demo(dialog-3)
```html
<template>
    <div>
      <el-button type="primary" @click="open1">Primary</el-button>
      <el-button type="primary" @click="open2">Light</el-button>
      <el-button type="primary" @click="open3">Dark</el-button>
      <sp-dialog :visible.sync="visible1"
                  target="body"
                  theme="primary"
                  icon="el-icon-menu"
                  title="标题文字"
                  draggable
                  resizable
                  maximizable
                  minimizable
                  width="400px" 
                  height="200px">
        这里是内容
      </sp-dialog>
      <sp-dialog :visible.sync="visible2"
                  theme="light"
                  target="body"
                  icon="el-icon-menu"
                  title="标题文字"
                  draggable
                  resizable
                  maximizable
                  minimizable
                  width="400px" 
                  height="200px">
        这里是内容
      </sp-dialog>
      <sp-dialog :visible.sync="visible3"
                  theme="dark"
                  target="body"
                  icon="el-icon-menu"
                  title="标题文字"
                  draggable
                  resizable
                  maximizable
                  minimizable
                  width="400px" 
                  height="200px">
        这里是内容
      </sp-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false
    }
  },
  methods: {
    open1() {
      this.visible1 = true
    },
    open2() {
      this.visible2 = true
    },
    open3() {
      this.visible3 = true
    }
  }
}
</script>

```
:::

### 可拖拽与改变尺寸

:::demo(dialog-4)
```html
<template>
    <div>
      <el-button type="primary" @click="open">打开</el-button>
      <sp-dialog :visible.sync="visible"
                  theme="primary"
                  target="body"
                  icon="el-icon-menu"
                  title="标题文字"
                  draggable
                  resizable
                  maximizable
                  minimizable
                  width="400px" 
                  height="200px">
        这里是内容
      </sp-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    }
  }
}
</script>

```
:::


### 最大化、最小化

visible 与 最小化的区别，两者都不可见，visible销毁内部组件，最小化仅是隐藏，组件实例没有销毁。

:::demo(dialog-5)
```html
<template>
    <div>
      <el-button type="primary" @click="open">打开</el-button>
      <el-button @click="show">显示</el-button> 
    
      <sp-dialog  ref="dialog" 
                  :visible.sync="visible"
                  target="body"
                  theme="primary"
                  icon="el-icon-menu"
                  title="标题文字"
                  draggable
                  resizable
                  maximizable
                  minimizable
                  width="400px" 
                  height="200px">
        这里是内容
      </sp-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    },
    show() {
      this.$refs.dialog.show()
    }
  }
}
</script>

```
:::


### 加载中提示

:::demo(dialog-6)
```html
<template>
    <div>
      <el-button type="primary" @click="open">打开弹窗</el-button>
      <sp-dialog :visible.sync="visible" target="body" loading title="标题文字" width="400px" height="200px">
        这里是内容
      </sp-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    }
  }
}
</script>

```
:::


### 加载页面

:::demo(dialog-7)
```html
<template>
    <div>
      <el-button type="primary" @click="open">打开弹窗</el-button>
      <sp-dialog  ref="dialog" 
                  target="body"
                  :visible.sync="visible"
                  theme="primary"
                  icon="el-icon-menu"
                  title="标题文字"
                  src="/sp/"
                  :footer="false"
                  draggable
                  resizable
                  maximizable
                  minimizable
                  width="80%" 
                  height="80%">
      </sp-dialog>
    </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = true
    }
  }
}
</script>

```
:::

### 服务调用

用于动态创建弹窗

:::demo(dialog-8)
```html
<template>
   <div>
     <el-button @click="createDialog">创建</el-button>
     <el-button @click="hideDialog">隐藏</el-button>
     <el-button @click="showDialog">显示</el-button>
     <el-button @click="closeDialog">销毁</el-button>
   </div>
</template>

<script>
import {spDialog} from '$ui'

export default {
  data() {
    return {
      dialog: null
    }
  },
  methods: {
    createDialog() {
     this.dialog = spDialog.create({
        title: '标题',
        width: '300px',
        height: '200px',
        draggable: true,
        target: 'body'
     }, '这里是内容文本，也可以是vnode')
    },
    closeDialog() {
      this.dialog && this.dialog.$destroy()
      this.dialog = null
    },
    showDialog() {
      this.dialog && this.dialog.show()
    },
    hideDialog() {
      this.dialog && this.dialog.hide()
    }
  }
}
</script>

```
:::

### 弹窗表单

结合spForm实现弹窗表单

:::demo
```html
<template>
  <div>
    <el-button type="primary" @click="open">打开弹窗</el-button>
    <sp-dialog :visible.sync="visible" target="body" title="表单" width="60%" draggable resizable :footer="false">
      <sp-form :model="model"
               :rules="rules"
               footer-align="right"
               label-position="top"
               :on-submit="handleSubmit">
        <sp-input name="title" label="标题"></sp-input>
        <sp-range name="range" label="日期范围" mode="date" :props="{valueFormat:'yyyy-MM-dd'}"></sp-range>
      </sp-form>
    </sp-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        model: {
          title: '回填标题',
          range: ['2019-11-01', '2019-11-15']
        },
        rules: {
          title: {required: true, message: '标题是必填项'}
        }
      }
    },
    methods: {
      handleSubmit(model) {
        return new Promise(resolve => {
          console.log(model)
          setTimeout(() => {
            this.$message.success('提交数据成功')
            this.visible = false
            resolve()
          }, 2000)
        })
      },
      open() {
        this.visible = true
      }
    }
  }
</script>

```
:::
