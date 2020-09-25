# Typography 文本排版

文本的基本格式。 Typography 包含了4个子组件，分别是：

- <api-link href="components/sp-typography">spTypography</api-link> 用于显示文章容器
- <api-link href="components/sp-title">spTitle</api-link> 用于显示标题
- <api-link href="components/sp-paragraph">spParagraph</api-link> 用于显示段落
- <api-link href="components/sp-text">spText</api-link> 用于显示内联文本

## 何时使用

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。

## 代码演示

### 基础

:::demo
```html
<template>
  <sp-typography>
     <sp-title>介绍</sp-title>
     <sp-paragraph>spWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。</sp-paragraph>
     <sp-paragraph>随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（前端开发部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系 spWeb。基于 <sp-text mark>『确定』和『自然』</sp-text>的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于更好的用户体验。</sp-paragraph>
     <sp-title level="2">设计资源</sp-title>
     <sp-paragraph>我们提供完善的设计原则、最佳实践和设计资源文件（<sp-text code>Sketch</sp-text> 和 <sp-text code>Axure</sp-text> ），来帮助业务快速设计出高质量的产品原型。</sp-paragraph>
  </sp-typography>
</template>

<script>
import {spTypography, spTitle, spParagraph, spText} from '$ui'
export default {
  components: {
    spTypography,
    spTitle,
    spParagraph,
    spText
  }
}
</script>

```
:::

### 标题组件

展示不同级别的标题。

:::demo
```html
<template>
  <div>
     <sp-title>h1. spWeb 4.x</sp-title>
     <sp-title level="2">h2. spWeb 4.x</sp-title>
     <sp-title level="3">h3. spWeb 4.x</sp-title>
     <sp-title level="4">h4. spWeb 4.x</sp-title>
  </div>
</template>

<script>
import { spTitle } from '$ui'
export default {
  components: {
    spTitle
  }
}
</script>

```
:::

### 文本组件

内置不同样式的文本。

:::demo
```html
<template>
  <div>
      <sp-text>spWeb 4.x</sp-text> <br />
      <sp-text type="primary">spWeb 4.x</sp-text> <br />
      <sp-text type="secondary">spWeb 4.x</sp-text> <br />
      <sp-text type="warning">spWeb 4.x</sp-text> <br />
      <sp-text type="danger">spWeb 4.x</sp-text> <br />
      <sp-text delete>spWeb 4.x</sp-text> <br />
      <sp-text mark>spWeb 4.x</sp-text> <br />
      <sp-text code>spWeb 4.x</sp-text> <br />
      <sp-text strong>spWeb 4.x</sp-text> <br />
      <sp-text underline>spWeb 4.x</sp-text> <br />
  </div>
</template>

<script>
import { spText } from '$ui'
export default {
  components: {
    spText
  }
}
</script>

<style style="scss" scoped>
 .sp-text {
    margin-bottom: 15px;
 }
</style>

```
:::

### 可以交互

提供额外的交互能力。

:::demo
```html
<template>
  <div style="padding: 30px;">
     <sp-paragraph editable>可以编辑的文本</sp-paragraph>
     <sp-paragraph copyable>可以复制的文本</sp-paragraph>
     <sp-paragraph copyable copy-text="替换的复制文本">可以替换复制的文本</sp-paragraph>
  </div>
</template>

<script>
import { spParagraph } from '$ui'
export default {
  components: {
    spParagraph
  }
}
</script>

```
:::

### 省略号

支持多行文本省略

:::demo
```html
<template>
  <div>
     <sp-paragraph ellipsis>spWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容</sp-paragraph>
     <sp-paragraph ellipsis :rows="2" expandable>
     spWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容.
     spWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容.</sp-paragraph>
  </div>
</template>

<script>
import { spParagraph } from '$ui'
export default {
  components: {
    spParagraph
  }
}
</script>

```
:::

### 省略Tooltip

:::demo
```html
<template>
  <div>
     <sp-paragraph ellipsis tooltip>spWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容</sp-paragraph>
     <sp-paragraph ellipsis :rows="2" tooltip>
     spWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容.
     spWeb产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容.</sp-paragraph>
  </div>
</template>

<script>
import { spParagraph } from '$ui'
export default {
  components: {
    spParagraph
  }
}
</script>

```
:::



