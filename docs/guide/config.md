# 配置

`SP` 遵循约定大于配置的原则，`MyWeb`工程模板默认已是最佳的实践配置，能满足绝大部分的应用场景， 通常不需要修改配置。 
但也避免不了会出现特殊的情况，因此`SP`也提供了几种方式的配置。

## my.config.js
`my.config.js` 是工程配置，即对开发环境、编译、辅助工具等与项目实现功能或业务无关的配置。

配置文件名必须为 `my.config.js`, 并且只能放置在项目工程根目录下， 如果不存在该文件可以手动新建。

文件用`js`编写，采用CommonJS规范导出模块。如：

```js 
module.exports = {
  devServerPort: 8000
}
```

### publicPath
部署应用时的基本 URL, 与 `vue-cli` 的 `publicPath` 配置一样。
默认：'/'

### entry
`Webpack` 配置的入口文件路径， 默认：'./src/main.js'

### devServerPort
开发环境启动端口号，默认: 8000

### devServerProxy
开发环境代理配置, 默认：null
如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。

建议还是由后端解决接口跨域问题。

配置示例：
```js 
module.exports = {
  devServerProxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
  }
}
```
:::warning 注意
不能设置为空对象 {}
:::

### previewServerPort
预览服务器端口，默认：7000

### outputDir
生成的生产环境构建文件的目录， 默认：dist

### assetsDir
放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
默认：assets

### extendContentBase
扩展的静态资源目录，数组形式，支持多个，只对主站有效。默认：[]

### lintOnSave
是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码， 默认：error

设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。

如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。

### prefetch
开启预加载，页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。默认：true

Prefetch 链接将会消耗带宽。
如果你的应用很大且有很多 async chunk，而用户主要使用的是对带宽较敏感的移动端，
那么你可能需要关掉 prefetch 链接并手动选择要提前获取的代码区块。

### dll
生产环境打包dll。默认：['vue', 'vue-router', 'vuex', 'axios', 'path-to-regexp', 'nprogress', 'qiankun']

### docsDevPort
文档开发环境启动端口号。默认：3001

### docsBaseUrl
文档部署目录。默认：'/my/'

### docsOutputDir
文档编译输出目录。默认：web

### autoRoutes
自动生成路由配置。默认： true

### serverPort
服务端启动端口号，默认：7001

### staticConfig
开启静态配置。默认：true

### coder
代码生成器配置对象。请参考[代码生成器](coder.md)

### transpileDependencies
默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。

默认：['@xdh/my']

### productionSourceMap
生成环境是否生成SourceMap, 默认不生成

### mock
开启模拟支持，默认值： process.env.NODE_ENV !== 'production'， 默认在开发环境下开启

### microApp
开启微应用支持，默认：false
在项目不需要做主应用时，建议关闭，设置为false，可高减少打包文件体积，提高性能。

### chainWebpack
Webpack自定义配置。

是一个函数，会接收一个基于 [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) 的 `ChainableConfig` 实例。允许对内部的 `webpack` 配置进行更细粒度的修改。

更多细节可查阅：配合 [webpack > 链式操作](https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7)


## ui/config

`ui/config` 是项目的运行时配置。支持获取和设置。项目的源码目录 `@/config.js` 文件就是用来设置 `ui/config`


设置：
```js
import {set as setConfig} from '$ui/config'

setConfig({
  router: {
    mode: 'hash',
    base: '/'
  }
})
```

获取：
```js 
import config from '$ui/config'
console.log(config.router)
```

### debug
开启debug模式，默认在开发模式开启，在产品模式关闭。关闭后 Vue实例内置与`$log`相关的方法不再打印信息。

### appName
子应用名称

### routePrefix
路由path前缀，只对hash模式的子应用有效

### router 
实例化VueRouter 参数选项对象，有2个属性 {mode, base}

#### mode 
路由模式，可选值：hash / history ， 默认：hash

#### base
应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"

### autoRoutes
应用自动创建的路由表配置，默认: true

### vuex
Vuex实例化参数配置

#### strict
进入严格模式，默认：true， 在严格模式下，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。

### keys
属性名映射 用来适配前后端接口交互参数和响应数据字段名称。
```js
  keys: {
    code: 'code',    // 响应状态码 
    data: 'data',    // 响应数据
    message: 'msg',  // 错误信息
    total: 'total',  // 记录数
    list: 'list',    // 列表数据
    page: 'page',    // 页码
    limit: 'limit',  // 每页几条
    pages: 'pages'   // 总页数
  }
```

### statusCode
请求响应状态码

```js 
  statusCode: {
    // 响应成功
    success: 200,
    
    // 未登录, 或登录失效
    notLogin: 401,
    
    // 权限不足
    authorize: 403,
    
    // 系统内部错误
    error: 500
  }
```
### axios
axios 实例配置

```js
  axios: {
    /**
     * 请求头
     */
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    /**
     * 超时时间
     */
    timeout: 0,
    /**
     * 携带验证
     */
    withCredentials: false,
    /**
     * 响应数据类型
     */
    responseType: 'json',
    /**
     * 请求内容长度
     */
    maxContentLength: -1
  }
 
```

### svg
svg图标配置

```js 
  svg: {
    viewBox: '0 0 1024 1024',
    width: '1em',
    height: '1em',
    fill: 'currentColor'
  }
```

### mock

配置模拟数据实例化参数， 可以是 `Object` 或 `Boolean`。 改配置只对开发模式下有效，生产模式不加载模拟数据。

对象形式配置超时：
```js
{
  timeout: '200-500'
}
```

### microApp
应用微服务启动配置参数，默认值：
```js 
{
    // 是否开启预加载，默认为 true。
    prefetch: false,
    //  可选，是否为单实例场景，默认为 true
    singular: true,
    // 可选，是否开启沙箱，默认为 true, 在开发环境开启sandbox时加载子应用切换主题，热更新会报错
    sandbox: process.env.NODE_ENV === 'production'
  }
```

### analysis
启用统计埋点，默认：false

### access
权限实例化参数， 参考 [权限控制](access.md#配置)

## install

在非互联网环境安装依赖需要把 node_modules 部署到内网`git` 或 `svn`， 然后配置 `package.json`

```json
{

  "install": {
    "type": "git",
    "branch": "master",
    "repository": "https://gitee.com/newgateway/node_modules.git"
  }

}
```

### type 

仓库类型 `git` 或 `svn`

### branch

分支名称，仅对 `git` 有效

### repository

仓库地址
