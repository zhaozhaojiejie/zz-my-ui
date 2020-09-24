# 子应用微服务

子应用是`Sp`框架特色功能，支持前端微服务。 
工程目录下`src`是主应用的源码，`apps`是子应用目录，每个应用单独一个文件夹存放。 子应用创建命令参考：[子应用命令](cmd.md#子应用)

## 主应用

当子应用创建后，需要在主应用注册，才可以通过路由前缀启动对应的子应用。

通过配置 `@/apps.js` 完成应用注册，如：
```js 
export default [
  'app1', 
  'app2'
]
```
上面通过快速配置完成对两个应用 `app1`、`app2` 注册。 配置文件是一个数组，数组项可以是字符串或对象，字符串表示应用的名称。对象属性包含：

- `mode`  路由模式，支持 hash / history
- `name`  应用名称
- `publicPath` 部署路径
- `container` 应用加载的容器选择器，默认 #app-container
- `entry` 应用访问地址
- `activeRule` 微应用的激活规则
    - 支持直接配置字符串或字符串数组，如 activeRule: '/app1' 或 activeRule: ['/app1', '/app2']，当配置为字符串时会直接跟 url 中的路径部分做前缀匹配，匹配成功表明当前应用会被激活。
    - 支持配置一个 active function 函数或一组 active function。函数会传入当前 location 作为参数，函数返回 true 时表明当前微应用会被激活。如 location => location.pathname.startsWith('/app1')。

:::warning 注意
页面上不能同时显示多个依赖于路由的微应用，因为浏览器只有一个 url，如果有多个依赖路由的微应用同时被激活，那么必定会导致其中一个 404。
:::

## 子应用工程配置
子应用的工程配置信息存放在`package.json` 中的 `apps` 字段，如：
```json 
{
  "apps": {
    "app2": {
      "name": "app2",
      "port": 8003,
      "autoRoutes": true,
      "publicPath": null,
      "outputDir": null,
      "staticConfig": false,
      "mock": true,
      "contentBase": []
    },
    "app1": {
      "name": "app1",
      "port": 8002,
      "autoRoutes": true,
      "publicPath": null,
      "outputDir": null,
      "staticConfig": true,
      "mock": false,
      "contentBase": []
    }
  }
}
```
可以按需要更改。


## 子应用运行时配置

子应用运行时配置 于 主应用配置方式类似，参考 [ui/config](config.md#ui-config)
