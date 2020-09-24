# Container 容器

简化版的Panel，提供背景、边框、阴影等视图容器样式。

## 代码示例

### 基础用法
:::demo
```html
<template>
  <my-container shadow>Container</my-container>
</template>

```
:::

### 边框
:::demo
```html
<template>
  <div>
      <my-container border>Container</my-container>
      <my-container border theme="primary">Container</my-container>
      <my-container border theme="success">Container</my-container>
      <my-container border theme="warning">Container</my-container>
      <my-container border theme="danger">Container</my-container>
      <my-container border theme="info">Container</my-container>
  </div>
</template>

```
:::



### 阴影
:::demo
```html
<template>
  <div>
      <my-container shadow>Container</my-container>
      <my-container shadow theme="primary">Container</my-container>
      <my-container shadow theme="success">Container</my-container>
      <my-container shadow theme="warning">Container</my-container>
      <my-container shadow theme="danger">Container</my-container>
      <my-container shadow theme="info">Container</my-container>
  </div>
</template>

```
:::

