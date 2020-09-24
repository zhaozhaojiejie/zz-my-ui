# SP-UI


**SP-UI是Web前端一站式项目工程框架。**

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


## 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```sh 
npm i @xdh/my --save
```

## 快速上手

可通过以下两种方式使用 `SP-UI`

### 一、采用项目工程模板创建项目【推荐】

基于Vue项目的一站式解决方案。

```sh 
git clone https://gitee.com/newgateway/my-web.git
```

只需把工程模板项目获取下来就可以使用，包括全部功能，开箱即用。

### 二、调用组件库功能

如只需用到 `SP-UI` 其中的某些组件，可以在已有的项目工程中安装，并完成配置。步骤：

#### 1、安装组件库和相关插件

安装组件库
```sh 
npm i element-ui @xdh/my --save
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
    ...require('@xdh/my/core/babel.plugins')
  ]
}
```

#### 3、配置 `vue.config.js`

需要在`vue.config.js`加上别名，如：

```js 
module.exports = {
  transpileDependencies: ['@xdh/my'],
  chainWebpack(chain) {
    chain.resolve.alias.set('$ui', '@xdh/my/ui/lib')
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
