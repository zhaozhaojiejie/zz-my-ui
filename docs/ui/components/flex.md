# Flex 布局组件

布局的传统解决方案，基于盒状模型，依赖 display 属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

2009年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

Flex布局包含两个组件: 
<api-link href="components/my-flex">MyFlex</api-link>、
<api-link href="components/my-flex-item">MyFlexItem</api-link> 

## Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
.box{
  display: flex;
}
```

行内元素也可以使用 Flex 布局。
```css
.box{
  display: inline-flex;
}
```
:::warning
注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
:::

## 基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![flex](/xdh-web/img/flex.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

## 代码演示

### 排列方向

flex-direction属性决定主轴的方向（即项目的排列方向）。

:::demo
```html
<template>
   <div>
      <el-radio-group v-model="direction">
        <el-radio v-for="item in directionArray" :label="item">{{item}}</el-radio>
      </el-radio-group>
      <my-flex :direction="direction">
        <my-flex-item v-for="n in 4" :key="n">{{n}}</my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      direction:'row',
      directionArray: [
        'row',
        'row-reverse',
        'column',
        'column-reverse'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
}
</style>

```
:::


### 换行

默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

:::demo
```html
<template>
   <div>
      <el-radio-group v-model="wrap">
        <el-radio v-for="item in wrapArray" :label="item">{{item}}</el-radio>
      </el-radio-group>
      <my-flex :wrap="wrap">
        <my-flex-item v-for="n in 9" :key="n">{{n}}</my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      wrap:'nowrap',
      wrapArray: [
        'nowrap',
        'wrap',
        'wrap-reverse'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
}
</style>

```
:::

### 主轴对齐

justify-content属性定义了项目在主轴上的对齐方式。

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。


:::demo
```html
<template>
   <div>
      <el-radio-group v-model="justify">
        <el-radio v-for="item in justifyArray" :label="item">{{item}}</el-radio>
      </el-radio-group>
      <my-flex :justify="justify">
        <my-flex-item v-for="n in 4" :key="n">{{n}}</my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      justify:'flex-start',
      justifyArray: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
}
</style>

```
:::

### 交叉轴对齐

align-items属性定义项目在交叉轴上如何对齐。

- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

:::demo
```html
<template>
   <div>
      <el-radio-group v-model="alignItems">
        <el-radio v-for="item in alignItemsArray" :label="item">{{item}}</el-radio>
      </el-radio-group>
      <my-flex :align-items="alignItems">
        <my-flex-item v-for="n in 4" :class="{tall: n%2===0, auto: alignItems==='stretch'}" :key="n">{{n}}</my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      alignItems:'stretch',
      alignItemsArray: [
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'stretch'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex {
  height: 450px;
}
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: initial;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
    
    &.tall {
      height: 400px;
      font-size: 120px;
    }
    &.auto {
      height:auto!important;
    }
}
</style>

```
:::

### 多行对齐方式

align-content属性定义了多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用

- flex-start：交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。

:::demo
```html
<template>
   <div>
      <el-radio-group v-model="alignContent">
        <el-radio v-for="item in alignContentArray" :label="item">{{item}}</el-radio>
      </el-radio-group>
      <my-flex :align-content="alignContent" wrap="wrap">
        <my-flex-item v-for="n in 9" :class="{auto: alignContent==='stretch'}" :key="n">{{n}}</my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      alignContent:'stretch',
      alignContentArray: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'stretch'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex {
  height: 800px;
}
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
    
    &.auto {
      height:auto!important;
    }
}
</style>

```
:::

### 排序

order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

:::demo
```html
<template>
   <div>
      <my-flex>
        <my-flex-item v-for="(item, index) in items" :key="index" :order="item.order">
        {{index+1}} 
        <span>order: {{item.order}}</span>
        </my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      items: [
        {
          order: 4
        },
        {
          order: 1
        },
        {
          order: -1
        },
        {
          order: 3
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
    
    span {
      font-size: 16px;
    }
  
}
</style>

```
:::

### 放大比例

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。


:::demo
```html
<template>
   <div>
      <my-flex>
        <my-flex-item v-for="(item, index) in items" :key="index" :grow="item.grow">
        {{index+1}} 
        <span>grow: {{item.grow}}</span>
        </my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      items: [
        {
          grow: 1
        },
        {
          grow: 2
        },
        {
          grow: 1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
    
    span {
      font-size: 16px;
    }
  
}
</style>

```
:::

### 缩小比例

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

:::demo
```html
<template>
   <div>
      <my-flex>
        <my-flex-item v-for="(item, index) in items" :key="index" :shrink="item.shrink">
        {{index+1}} 
        <span>shrink: {{item.shrink}}</span>
        </my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      items: [
        {
          shrink: 0
        },
        {
          shrink: 1
        },
        {
          shrink: 1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 600px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
    
    span {
      font-size: 16px;
    }
  
}
</style>

```
:::

### basis

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。


:::demo
```html
<template>
   <div>
      <my-flex>
        <my-flex-item v-for="(item, index) in items" :key="index" :basis="item.basis">
        {{index+1}} 
        <span>basis: {{item.basis}}</span>
        </my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      items: [
        {
          basis: '200px'
        },
        {
          basis: '400px'
        },
        {
          basis: '200px'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 600px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
    
    span {
      font-size: 16px;
    }
  
}
</style>

```
:::

### 单独对齐

align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。


:::demo
```html
<template>
   <div>
      <my-flex>
        <my-flex-item v-for="(item, index) in items" :key="index" :align="item.align">
        {{index+1}} 
        <span>align: {{item.align}}</span>
        </my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {
      items: [
        {
          align: 'flex-start'
        },
        {
          align: 'flex-start'
        },
        {
          align: 'flex-end'
        },
        {
          align: 'flex-start'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex {
  height: 400px;
}
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
    
    span {
      font-size: 16px;
    }
  
}
</style>

```
:::

### 适配父容器

:::demo
```html
<template>
   <div style="height: 400px;">
      <my-flex fit>
        <my-flex-item v-for="n in 4" :key="n">{{n}}</my-flex-item>
      </my-flex>
  </div>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 200px;
    line-height: 200px;
    margin: 5px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
}
</style>
```
:::

### 适配列数与边框

:::demo
```html
<template>
      <my-flex :column="4" wrap="wrap" border>
        <my-flex-item v-for="n in 8" :key="n">{{n}}</my-flex-item>
      </my-flex>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    background-color: #ffd200;
    font-size: 100px;
    color: white;
    text-align: center;
}
</style>
```
:::

### 阴影显示时机


:::demo
```html
<template>
      <my-flex :column="4" wrap="wrap" border>
        <my-flex-item v-for="n in 8" :key="n" shadow="hover">{{n}}</my-flex-item>
      </my-flex>
</template>

<script>
import {MyFlex, MyFlexItem} from '$ui'

export default {
  components: {
    MyFlex,
    MyFlexItem
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.my-flex-item {
    width: 200px;
    height: 200px;
    line-height: 200px;
    font-size: 100px;
    color: #ffd200;
    text-align: center;
}
</style>
```
:::



