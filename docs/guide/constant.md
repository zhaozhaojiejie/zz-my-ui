# 常量和静态配置

## 常量

在项目中经常需要定义常量（应用运行后不更改的属性）复用，以提高代码可维护性。例如：服务接口地址、秘钥、应用名称、站点路径等等。

### 定义常量

项目中的常量统一在 `/src/constant.js` 文件中定义，如：

```js
export const API_HOST = 'http://127.0.0.1:8080'
```

### 调用常量

需要调用时导入即可，如：

```js 
import {API_HOST} from '@/constant'
console.log(API_HOST)
```

## 静态配置

### 什么是静态配置？

项目代码需要经过webpack打包，任何代码的改动都需要重新编译。
在实践中经常需要同一份代码需要部署到多个环境，各个环境的常量值会不同。静态配置就是把常量抽取到一个不通过webpack打包的文件，在编译后依然可以修改。

### 定义静态配置

静态配置是在 `/public/config.js` 文件中定义

静态配置需要与常量定义结合, 如：

`/src/constant.js`

```js 
/**
 * 读取静态配置
 * @private
 */
const __MY_CONFIG__ = window.__MY_CONFIG__ || {}

/**
 * 接口服务器
 * @type {*|string}
 */
export const API_HOST = __MY_CONFIG__['API_HOST'] || 'http://127.0.0.1:8080'

```
 
`/public/config.js`

```js 
(function (global) {
  global.__MY_CONFIG__ = {
    
    // 接口服务
    API_HOST: 'http://172.21.14.99:8000'
  }

})(window)
```

上述代码实现了把 常量 `API_HOST` 抽到了静态配置， 在编译打包后的产物依然可以对 `config.js` 进行修改，而不需要重复打包。
