# Layout 布局

布局是具有最多五个区域的容器：北，南，东，西和中部。中心区域面板是必需的，而边缘区域面板是可选的。
可以通过拖动边框来调整每个边缘区域面板的大小，用户可以构建所需的复杂布局。
组件文档 <api-link href="components/my-layout">MyLayout</api-link>

## 何时使用

通常用作页面主体框架布局

## 代码示例

### 基本用法

:::demo(layout_1)
```html
<template>
  <my-layout>
     <template v-slot:north>North</template> 
     <template v-slot:west>West</template> 
     <template v-slot:east>East</template> 
     <template v-slot:south>South</template> 
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
  
}
</style>

```
:::

### 设置尺寸

:::demo(layout_2)
```html
<template>
  <my-layout :north="{height: 100}"
              :south="{height: 100}"
              :west="{width: 200}"
              :east="{width: 200}">
     <template v-slot:north>North</template> 
     <template v-slot:west>West</template> 
     <template v-slot:east>East</template> 
     <template v-slot:south>South</template> 
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
  
}
</style>

```
:::


### 适配父节点

:::demo(layout_3)
```html
<template>
  <div style="height: 400px">
    <my-layout fit
                :north="{height: 80}"
                :south="{height: 60}"
                :west="{width: 200}"
                :east="{width: 200}">
       <template v-slot:north>North</template> 
       <template v-slot:west>West</template> 
       <template v-slot:east>East</template> 
       <template v-slot:south>South</template> 
       <div>Main</div>
    </my-layout>
  </div>  
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
}
</style>

```
:::

### 显示分隔和边框

:::demo(layout_4)
```html
<template>
  <my-layout border split>
     <template v-slot:north>North</template> 
     <template v-slot:west>West</template> 
     <template v-slot:east>East</template> 
     <template v-slot:south>South</template> 
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     line-height: 160px;
  }
  .my-layout__default {
    line-height: 160px;
  }
  
}
</style>

```
:::


### 指定排列方向

:::demo(layout_5)
```html
<template>
  <my-layout border direction="horizontal">
     <template v-slot:north>North</template> 
     <template v-slot:west>West</template> 
     <template v-slot:east>East</template> 
     <template v-slot:south>South</template> 
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     line-height: 160px;
  }
  .my-layout__default {
    line-height: 160px;
  }
  
}
</style>

```
:::




### 常见布局

#### 布局一

:::demo
```html
<template>
  <my-layout>
     <template v-slot:north>North</template>
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
}
</style>
```
:::

#### 布局二

:::demo
```html
<template>
  <my-layout>
     <template v-slot:north>North</template>
     <template v-slot:south>South</template>
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
}
</style>
```
:::

#### 布局三

:::demo
```html
<template>
  <my-layout>
     <template v-slot:north>North</template>
     <template v-slot:west>West</template>
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
}
</style>
```
:::

#### 布局四

:::demo
```html
<template>
  <my-layout>
     <template v-slot:north>North</template>
     <template v-slot:west>West</template>
     <template v-slot:south>South</template>
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
}
</style>
```
:::

#### 布局五

:::demo
```html
<template>
  <my-layout>
     <template v-slot:west>West</template>
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
}
</style>
```
:::

#### 布局六

:::demo
```html
<template>
  <my-layout>
     <template v-slot:west>West</template>
     <template v-slot:east>East</template>
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
}
</style>
```
:::


#### 布局七

:::demo
```html
<template>
  <my-layout direction="horizontal">
     <template v-slot:north>North</template>
     <template v-slot:west>West</template>
     <div>Main</div>
  </my-layout>
</template>

<script>
import {MyLayout} from '$ui'

export default {
  components: {
    MyLayout
  }
}
</script>

<style lang="scss" scoped>
/deep/ {
   .my-layout__region {
      text-align: center;
   }
  .my-layout__north, .my-layout__south {
    background: #b3c0d1;
    line-height: 60px;
  }
  .my-layout__west, .my-layout__east {
     background: #d3dce6;
     line-height: 160px;
  }
  .my-layout__default {
    background: #e9eef3;
    line-height: 160px;
  }
}
</style>
```
:::







