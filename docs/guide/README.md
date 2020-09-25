# 薯片UI


基于 Vue + ElementUI 。专注于中台系统快速搭建，框架已在多个项目实战检验。

## 特色：

- 搭载代码生成器，可生成底层api调用、vuex管理、模拟数据代码； 
- 内置常用超过150个基础UI组件；
- 集成图表库、地图应用类库；
- 支持子前端微服务子应用，可独立开发、运行、部署；
- 自动生成路由；
- 组件自动注册及按需加载；
- 支持自定义主题，可以实现在线切换；
- 支持静态配置。



## 开发指南

- [官网](http://newgateway.gitee.io/my/)
- [开发指南](http://newgateway.gitee.io/my/guide/)
- [基础组件库](http://newgateway.gitee.io/my/ui/components/)
- [地图应用类库](http://newgateway.gitee.io/my/ui/map/)
- [组件主题预览](http://newgateway.gitee.io/my-web/#/suit)


## 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```sh 
npm i @chipspc/pc --save
```

## 快速上手

可通过以下使用 `薯片`

### 一、调用组件库功能

如只需用到 `薯片` 其中的某些组件，可以在已有的项目工程中安装，并完成配置。步骤：

#### 1、安装组件库和相关插件

安装组件
```sh 
npm i element-ui @chipspc/pc --save
```

安装项目依赖插件
```sh 
npm i babel-plugin-component node-sass sass-loader --save-dev
```

#### 2、配置 `babel.config.js`

组件采用了按需加载，需要 在`babel.config.js` 加上插件，如：
```js  
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ...require('@chipspc/pc/core/babel.plugins')
  ]
}
```

#### 3、配置 `vue.config.js`

需要在`vue.config.js`加上别名，如：

```js 
module.exports = {
  transpileDependencies: ['@chipspc/pc'],
  chainWebpack(chain) {
    chain.resolve.alias.set('$ui', '@chipspc/pc/ui/lib')
  }
}
```

#### 4、引用组件
到此，你可以开始引入组件开始编码了，如：
```html 
<template>
  <div>
    <Button type="primary">Button</Button>
    <MyPanel title="Title">Content</MyPanel>
  </div>
</template>

<script>
  import {Button} from 'element-ui'
  import {MyPanel} from '$ui'
  export default {
    components: {
      Button,
      MyPanel
    }
  }
</script>
```
