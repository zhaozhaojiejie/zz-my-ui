# 新德汇地图应用类库

基于Openlayers的地图应用Vue组件。内置了百度、高德、天地图瓦片，并支持与方正、超图、山海经纬、航天精一等PGIS厂商对接。 
包含文本、图形、html、热力图、轨迹回放等20个组件，支持与ECharts结合实现散点、飞行迁徙等基于地理位置的图表，满足项目常见需求。
 使用者不需要有地图相关专业知识，甚至不需要写任何JS代码就能实现通用功能

![架构图](/my/img/map/my-map.png)


## 开发指南

- [官网](http://newgateway.gitee.io/my/)
- [开发指南](http://newgateway.gitee.io/my/guide/)
- [基础组件库](http://newgateway.gitee.io/my/ui/components/)
- [地图应用类库](http://newgateway.gitee.io/my/ui/map/)

## 预览

![info](/my/img/map/2.jpg)

![info](/my/img/map/3.jpg)

![info](/my/img/map/4.jpg)

![info](/my/img/map/5.jpg)

![info](/my/img/map/6.jpg)

![info](/my/img/map/7.jpg)


## 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```sh 
npm i @chipspc/pc --save
```

## 快速上手

可通过以下两种使用 `My`

### 一、采用项目工程模板创建项目【推荐】

官网提供的基于Vue项目的一站式解决方案。

```sh 
git clone https://gitee.com/newgateway/my-web.git
```

只需把工程模板项目获取下来就可以使用，包括全部功能，开箱即用。

### 二、调用组件库功能

如只需用到 `My` 其中的某些组件，可以在已有的项目工程中安装，并完成配置。步骤：

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
  <my-map></my-map>
</template>

<script>
  import {MyMap} from '$ui/map'
  export default {
    components: {
      MyMap
    }
  }
</script>
```

