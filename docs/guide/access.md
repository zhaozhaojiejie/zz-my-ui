# 权限控制

权限控制是`My`框架的重要组成模块，提供了接口请求拦截、路由守卫、视图控制等全方位的细粒度的鉴权配置。

## 如何工作？

在启动Vue应用的同时，会实例化一个`Access`实例，在后续操作过程中，调用`$access.login({roles, can, token}})` 、 `$access.setRole(roles)`或使用`$access.setCan(can)`再重新设置角色及权限。当然这些都是响应式的，也就是说，你的视图会随着以上变更发生变化。

## 功能点

- 鉴权： `Access` 提供了基本的鉴权，如：`$access.is('角色')`，`$access.has('能力')`，`$access.isLogin()`。 通常用在对视图的控制。
- 请求拦截： 可以对发起的请求在请求头统一注入token， 统一判断请求响应授权情况跳转。
- 路由守卫：根据路由配置的中间件处理路由页面进入条件，可以方便在路由中实现鉴权。

## 配置

`Access`可通过 `@/config.js` 做个性配置或功能的开启、关闭。如：

```js
import {set as setConfig} from '$ui/config'

setConfig({
  // 权限控制实例化配置 
  access: {
    // 启用请求权限控制
    axios: true,
    // 启用路由权限控制
    router: true,
    // 缓存存储方式 session 或 local
    storage: 'session',
    // 登录页面路径
    loginPath: '/login',
    // 权限不足页面路径
    authorizePath: '/403'
  }
})

```

完整的配置项包括

<<< @/ui/lib/access/config.js

## 实例方法

### $access.login(data)

写入登录信息，通常在用户登录成功时调用，写入角色、权限编码、token等用户信息。参数对象data选项
```js
{
  roles: Array, // 角色列表
  can: Array, // 权限编码列表
  token: String // 登录token
}
```
其中 roles 与 can 必须要有一个，即可以用角色或权限编码鉴权，或两者同时使用。
可以传入其他自定义的数据项

### $access.get() 

获取用户权限数据, 即 `$access.login(data)` 传入的数据

### $access.isLogin() 

用户登录鉴权，判断当前用户是否已经登录

### $access.is(role, required)
用户角色鉴权，验证用户是否匹配该角色
```js
  /**
   * 鉴权，是否有该角色
   * @param {string|string[]} role 角色或角色数组
   * @param {boolean} [required=false] 是否全匹配
   * @return {boolean}
   */
  is(role, required) {
    const roles = this.vm.access.roles
    if (!roles) return false
    
    const matches = [].concat(role)
    return required
      ? matches.every(n => roles.includes(n))
      : matches.some(n => roles.includes(n))
  }
  
```



### $access.has(can, required)
用户权限编码鉴权，验证是否有改编码的权限
```js 
  /**
   * 鉴权，是否有该权限
   * @param {string|string[]} can 权限编码或编码数组
   * @param {boolean} [required=false] 是否全匹配
   * @return {boolean}
   */
  has(can, required) {
    const canArray = this.vm.access.can
    if (!canArray) return false
    
    const matches = [].concat(can)
    return required
      ? matches.every(n => canArray.includes(n) || this.match(n))
      : matches.some(n => canArray.includes(n) || this.match(n))
  }
  
```

### $access.match(code)
用户权限编码父级鉴权，验证是否有该父级的编码
```js 
  /**
   * 匹配是否存在父级权限
   * @param {string} code 权限编码
   * @return {boolean}
   *
   * @example
   * match('menu') // 查询是否有 menu# 开头的权限编码， #是默认层级分隔符
   *
   */
  match(code) {
    const canArray = this.vm.access.can
    if (!canArray) return false
    return canArray.some(item => item.startsWith(`${code}${this.options.canParentSplit}`))
  }
```


### $access.logout()
注销登录，清空登录信息，并跳转到登录页面


## 视图鉴权

在模板使用`v-if` `v-show` 指令 或按钮的`disabled`属性控制，如：

```html 
<template>
  <el-button v-if="$access.is('admin')">按钮</el-button>
  <el-button v-if="$access.has('update')">按钮</el-button>
  <el-button :disabled="!$access.has('update')">按钮</el-button>
</template>

```
 

## 路由守卫

### 使用路由中间件功能

`Access` 默认提供了登录，鉴权中间件，使用路由相关功能，也比较简单。只需要在路由中`meta`中，添加`access`字段，是数组类型。如：
```js
export default function ({get}) {
  return [
    {
      path: '/',
      component: get('index'),
      meta: {
        access: ['login', 'can:add|update']
      }
    }
  ]
}
```


### 中间件运行及原理
`Access`路由中间件是基于`vue-router`的全局钩子`beforeEach`、`afterEach`。
与路由自带钩子的运行模式不同，路由中间件，是顺序执行的，前面中间件只有执行成功后，后续的中间件才可以继续执行。内部执行是基于 `ui/utils/queue`


### 中间件语法
`Access` 中内置了三个中间件，分别为：login、role、can

中间件使用，例如格式如下：
```bash
name:args,args....
```

- name： 中间件名称
- args: 传给中间件的参数，多个参数以，隔开

示例：
```sh 
access: ['login']  // 需要登录访问
access: ['login', 'role:administrator'] // 需要登录，并且登录的用户角色是administrator
access: ['login', 'role:administrator|teacher'] // 需要登录，并且登录的用户角色是administrator或者是teacher
access: ['login', 'role:administrator|teacher,true'] // 需要登录，并且登录的用户角色是administrator并且是teacher
access: ['login', 'can:add|update']  // 需要登录访问, 权限编码包含add 或 update
```

can中间件，通用是用来判断是否拥有某个权限或某一类权限，当然，也支持角色的判断。实际调用时，其实是通过$access上的can方法实现。示例如下
```sh 
access: ['login', 'can:update_article'],    // 有更新文章的权限
access: ['login', 'can:update_article|delete_article'],   // 有更新文章或删除文件的权限
access: ['login', 'can:update_article|delete_article,true'], // 同时有更新及删除文章权限
```
有时，可能需要判断用户同时有某个角色或某些权限，组件role中件虽然可以实现，但是一个can中间件实现会更加简单。如下：
```sh 
access: ['login', 'can:admin.update_article'],  // 拥有管理员身份，且有update_article的权限
access: ['login', 'can:admin.*|delete_article'], // 是管理员或有删除文章权限
```

### 自动创建路由配置写法

在vue单文件顶部写上

```html 
---
access:
- login
- role:admin
---
```

### 自定义路由守卫

如不想使用Access提供的中间件守卫功能，可以自定义 `beforeEach`  和 `afterEach` ，在配置中文件修改

```js 
import {set as setConfig} from '$ui/config'

// 写入运行时配置
setConfig({
  
  access: {    
    // 启用路由权限控制
    router: true,
    
    beforeEach: (to, from, next) => {
      // 逻辑实现
      next()
    },
    
    afterEach: (to, from) => {}
    
  },
  mock: {
    timeout: '200-500'
  }
})

```



## 请求拦截

在token的模式，Access 在每个请求的请求头注入 Authorization，通过`config.js`对相关配置进行更改。

如需要特殊拦截功能，可以配置 

```js
  
  // 请求拦截函数，axios=true 有效
  request: ({access}, options, config) => {
    // 在这里实现对请求前的处理
    return config
  },
  
  // 请求响应成功拦截函数，axios=true 有效
  response: ({$router}, options, res) => {
    // 在这里实现响应后的处理
    return res
  },
  
  // 请求响应失败拦截函数，axios=true 有效
  responseFail: null,
```


