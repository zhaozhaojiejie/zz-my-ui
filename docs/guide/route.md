# 自动配置路由

`spWeb` 4.x 开始支持自动生成路由配置表。在开发模式时会自动检测 `views` 目录的文件变化，自动生成对应的页面路由。无需手工配置。
自动生成路由是默认开启的，你可以通过配置[关闭这个功能](config.md#autoroutes)。

自动生成的路由配置文件存放在 `/.sp/routes/` 文件夹下

## 命名规范

`views` 文件夹下只能放置文件夹或`.vue`文件。命名必须要全小写，多个单词用`-`分隔，如：`user-info`


## 特殊的页面命名

有几个固定命名的文件，有特定意义和功能，包括： `index.vue`、 `_404.vue`、`_layout.vue`

### index.vue

首页或目录的首页，解析器在遇到这个文件时会生成一个命名为空字符串的路由项。

如：`/views/index.vue` 生成的路由配置
```js
export default function ({
  get
}) {
  return [{
    path: '',
    component: get('index'),
    meta: null
  }]
}

```


### _404.vue

当路由没有匹配到规则时展示的页面。

如：`/views/_404.vue` 生成的路由配置

```js
export default function ({
  get
}) {
  return [{
    path: '',
    component: get('index'),
    meta: null
  }, {
    path: '/*',
    component: get('_404')
  }]
}

```


### 404.vue
当路由没有匹配到规则时展示的页面。
与 _404.vue的区别是，_404.vue不放入子路由，而404.vue放入子路由。



### _layout.vue

如果页面有公共的部分，需要用多级路由来实现。需要在当前目录下创建 `_layout.vue`。 当一个文件存在 `_layout.vue`时，
该文件夹下的vue文件（除了`_404.vue`、以`_`命名开头的文件）都加入到子路由。 

:::warning
_layout.vue 文件需要包含 `router-view` 才能加载路由页面 
:::

如： 新增 `/views/_layout.vue` 生成的路由配置

```js 
export default function ({
  get
}) {
  return [{
    path: '/',
    component: get('_layout'),
    children: [{
      path: '',
      component: get('index'),
      meta: null
    }]
  }, {
    path: '/*',
    component: get('_404')
  }]
}

```

### 以`_`开头的文件

如果其中有些同级的页面希望不加入子路由中，可以命名以`_`开头即可。
生成的路由`path` 不包含开头的`_`字符

例如登录页面，通常是独立的页面，不需要包含公共部分

新增 `/views/_login.vue` 生成的路由配置

```js
export default function ({
  get
}) {
  return [{
    path: '/',
    component: get('_layout'),
    children: [{
      path: '',
      component: get('index'),
      meta: null
    }]
  }, {
    path: '/login',
    component: get('_login'),
    meta: null
  }, {
    path: '/*',
    component: get('_404')
  }]
}

```

### 以`$`开头的文件

当路由path是动态参数时，文件名需要以`$`开头。
例如：访问路由需要传递参数名为id的页面，新建文件 `/views/users/$id.vue` 生成的路由配置

```js 
export default function ({
  get
}) {
  return [{
    path: '/',
    component: get('_layout'),
    children: [{
      path: '',
      component: get('index'),
      meta: null
    }, {
      path: '/users/:id',
      component: get('users/$id'),
      meta: null
    }]
  }, {
    path: '/login',
    component: get('_login'),
    meta: null
  }, {
    path: '/*',
    component: get('_404')
  }]
}

```

## 定义路由元信息

路由原型可以通过 `Front Matter` 的方式定义。
front matter 必须是 vue 文件中的第一部分，并且必须采用在三点划线之间书写的有效的 YAML。 这是一个基本的例子：

```md 
---
title: Blogging Like a Hacker
lang: en-US
---
```

### keepAlive

工程预设了 keepAlive 可以变量，用来控制当前路由加载的页面组件是否需要保持 keepAlive

```html
---
keepAlive: true
---
<template>
  <div>
    Index
  </div>
</template>

<script>
  export default {}
</script>


```



## 路由守卫

`Access`提供了路由守卫的功能，可用 `Front Matter` 的方式或自定义函数实现，详情请参考 [Access的路由守卫实现](access.md#路由守卫)

## 手工编写路由表

自动配置路由的功能默认开启，如需手动编写路由，可配置 `/src/config.js`

```js 
import {set as setConfig} from '$ui/config'

// 写入运行时配置
setConfig({
  // 关闭自动生成路由配置
  autoRoutes: false
})

```

当关闭自动配置路由时，你需要自行编写路由配置，文件：`/src/router/routes.js`

```js 
export default function ({get}) {
  return [
    {
      path: '/path',
      component: get('path')
    }
  ]
}

```

`get`方法传入相对`views`目录的文件路径
