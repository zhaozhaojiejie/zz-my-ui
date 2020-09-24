# Highlight 关键字高亮

## 基础用法

:::demo
```html 
<template>
  <my-highlight :keys="['项目工程化方案', '前端微服务']">
    MyWeb是一套为前端开发者准备的基于Vue的项目工程化方案。
    专注于公检法行业中台系统快速搭建，框架已在多个项目实战检验。 
    搭配代码生成器，可生成api调用、vuex管理、模拟数据代码； 
    内置常用超过70个组件、扩展；子模块支持前端微服务，可以批量编译打包；独立开发、运行、部署；支持更新升级。
  </my-highlight>
</template>
```
:::


## 绑定事件

:::demo
```html 
<template>
  <my-highlight :keys="['项目工程化', '前端微服务']" type="danger" @click=handleClick>
    MyWeb是一套为前端开发者准备的基于Vue的项目工程化方案。
    专注于公检法行业中台系统快速搭建，框架已在多个项目实战检验。 
    搭配代码生成器，可生成api调用、vuex管理、模拟数据代码； 
    内置常用超过70个组件、扩展；子模块支持前端微服务，可以批量编译打包；独立开发、运行、部署；支持更新升级。
  </my-highlight>
</template>
<script>
export default {
  methods: {
    handleClick(e) {
      alert(e.target.innerHTML)
    }
  }
}
</script>
```
:::
