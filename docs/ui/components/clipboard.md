# Clipboard 复制剪切

基于clipboard.js 实现的现代化的拷贝文字组件
组件文档 <api-link href="components/my-clipboard">MyClipboard</api-link>

## 何时使用

拷贝文字不应当是一件困难的事. 不需要过多繁杂的配置或者下载很多脚本文件。

## 代码演示

### 基础用法

:::demo
```html
<template>
    <el-input :value="value">
      <template v-slot:append>
        <my-clipboard :text="value" tooltip>
         <el-button>复制</el-button>
        </my-clipboard>
      </template>
    </el-input>
</template>

<script>
import {MyClipboard} from '$ui'
export default {
  components: {
    MyClipboard
  },
  data() {
    return  {
      value: 'Clipboard 复制剪切'
    }
  }
}
</script>

```
:::

### 从另一个元素剪切文本

:::demo
```html
<template>
  <div>
     <el-input id="input" type="textarea" v-model="value"></el-input>
     <my-clipboard tag="div" target=".el-textarea__inner" action="cut" style="margin-top:10px;">
        <el-button type="primary">复制到剪切板</el-button> 
     </my-clipboard>
  </div>
</template>

<script>
import {MyClipboard} from '$ui'
export default {
  components: {
    MyClipboard
  },
  data() {
    return  {
      value: '拷贝文字不应当是一件困难的事. 不需要过多繁杂的配置或者下载很多脚本文件'
    }
  }
}
</script>

```
:::

### 从属性复制文本

:::demo
```html
<template>
  <my-clipboard :text="text" tooltip>
    <el-button type="primary">复制到剪切板</el-button>
  </my-clipboard>
</template>

<script>
import {MyClipboard} from '$ui'
export default {
  components: {
    MyClipboard
  },
  data() {
    return  {
      text: '拷贝文字不应当是一件困难的事. 不需要过多繁杂的配置或者下载很多脚本文件'
    }
  }
}
</script>

```
:::

### 消息提示

:::demo
```html
<template>
  <my-clipboard :text="text" message>
    <el-button type="primary">复制到剪切板</el-button>
  </my-clipboard>
</template>

<script>
import {MyClipboard} from '$ui'
export default {
  components: {
    MyClipboard
  },
  data() {
    return  {
      text: '拷贝文字不应当是一件困难的事. 不需要过多繁杂的配置或者下载很多脚本文件'
    }
  }
}
</script>

```
:::

