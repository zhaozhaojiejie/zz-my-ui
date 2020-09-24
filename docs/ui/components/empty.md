# Empty 空状态

空状态时的展示占位图。
组件文档 <api-link href="components/my-empty">MyEmpty</api-link>

## 何时使用

- 当目前没有数据时，用于显式的用户提示。
- 初始化场景时的引导创建流程。

## 代码演示

### 基础用法

:::demo
```html
<template>
 <my-empty></my-empty>
</template>

<script>
import {MyEmpty} from '$ui'
export default {
  components: {
    MyEmpty
  }
}
</script>

```
:::

### 选择图片

可以通过设置 `image` 为 `MyEmpty.IMAGE_SIMPLE` 选择另一种风格的图片。也可设置为自定义图片地址

:::demo
```html
<template>
 <my-empty :image="image"></my-empty>
</template>

<script>
import {MyEmpty} from '$ui'
export default {
  components: {
    MyEmpty
  },
  data() {
    return {
      image: MyEmpty.IMAGE_SIMPLE
    }
  }
}
</script>

```
:::

### 设置文本

:::demo
```html
<template>
 <my-empty tip="该栏目下无内容"></my-empty>
</template>

<script>
import {MyEmpty} from '$ui'
export default {
  components: {
    MyEmpty
  }
}
</script>

```
:::

### 自定义内容

:::demo
```html
<template>
 <my-empty>
    <p>您还没创建任何内容！</p>
    <el-button icon="el-icon-plus" type="primary">创建</el-button>
 </my-empty>
</template>

<script>
import {MyEmpty} from '$ui'
export default {
  components: {
    MyEmpty
  }
}
</script>

```
:::

### 填满父容器

:::demo
```html
<template>
 <my-panel title="标题">
    <div style="height:400px">
        <my-empty fit></my-empty>
    </div>
 </my-panel>

</template>

<script>
import {MyEmpty, MyPanel} from '$ui'
export default {
  components: {
    MyEmpty,
    MyPanel
  }
}
</script>

```
:::


