# 代码生成器

## 概述


Vue是一个以数据驱动的MVVM框架，在开发大型应用时，推荐使用Vuex作数据状态管理。前后端分离开发模式协作时也面临着对接口响应模拟数据需求。
根据Vue推荐的开发实践，在开发一个相对规模较大的应用，底层与后端交互时，代码分为以下几个部分：

| 代码块 | 说明 |
|----|----|
| api | 抽取出API请求 |
| store | 状态管理vuex，包含actions、mutations、modules、 mutation-types |
| mock | 模拟数据模板 |

在实践中，我们发现上述的代码重复率非常高，新增和修改都费力，并且是没技术含量的体力活。 但又必须要这样做，不适合以公共函数的形式重用，为了解决这个重复的体力活，我们开发了代码生成器，用工具来代替体力活。


对于前后端的数据交互都可以归纳为是对实体的 新增、修改、删除、查询。

代码生成器的原理是也是按照对实体的增、删、改、查规范，利用NodeJs根据接口的配置文件（包含请求路径、请求选项、状态管理、模拟数据）按指定模板创建符合Vue开发规范的js文件到工程指定目录下。

### 示例

以下通过一个用户的实体配置，讲解由代码生成器生成的代码文件

1、新建文件 `/schemas/user.js` 以下配置实现用户的增、删、改、查接口调用、状态管理，并响应模拟数据

```javascript
module.exports = {
  vuex: true, // 是否采用vuex模式， 代码模式支持 vuex 和 mixin，false表示采用mixin模式

  // 实体模型
  model: {
    path: '/api/demo/user', // 请求实体api路径

    // 模拟实体属性字段数据
    columns: {
      id: '@guid',
      name: '@cname',
      email: '@email'
    }
  }
}
```

:::tip
新建实体配置文件必须要在/schemas/目录下，可以建目录。
:::

2、运行命令 `npm run coder` 或 `npm run dev`  生成代码，代码文件目录在 `/.my/code/`, 目录结构如下：

![Alt text](data:image/png;base64,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)




## 约定

代码生成器生成的代码需要与后端接口有预先的约定

### 请求URL的约定

前后端分离开发最佳实践是采用RESTful的接口形式进行通信，在此我们对请求URL进行统一的规范约定

| 请求类型 | 前端约定的方法前缀 | 请求方法类型 | URL格式 | 示例 |
|----|----|----|----|----|
| 新增 | add | POST | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]| http://127.0.0.1:80/api/users |
| 更新 | update | PATCH | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]| http://127.0.0.1:80/api/users |
| 删除 | remove | DELETE | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]/\[主键ID\]| http://127.0.0.1:80/api/users/123 |
| 查询单个实体 | get | GET | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]/\[主键ID\]| http://127.0.0.1:80/api/users/123 |
| 分页查询多个实体 | fetch | GET | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]| http://127.0.0.1:80/api/users |
| 批量删除 | batch | POST | http://\[主机ip\]:\[端口\]/\[路径\]/\[实体名称\]/remove| http://127.0.0.1:80/api/userss/remove |

### 请求传参的约定

GET和POST两种请求方式的的传参约定

| 请求方式 | 传参形式 | 示例 |
|----|----|----|
| GET | Url查询字符串，中文需要转码 | http://127.0.0.1:80/api/user/list?keyword=%E5%A7%93%E5%90%8D |
| DELETE | Url查询字符串，中文需要转码 | http://127.0.0.1:80/api/user/list?keyword=%E5%A7%93%E5%90%8D |
| POST | JSON格式字符串，请求头需要加上Content—Type=application/json | http://127.0.0.1:80/api/user/save <br> {"name":"kenny", "password":"123"} |
| PATCH | JSON格式字符串，请求头需要加上Content—Type=application/json | http://127.0.0.1:80/api/user/remove <br> {"name":"kenny", "password":"123"} |

### 分页查询多个实体，请求参数约定

| 参数名 | 说明 |
|----|----|
| limit | 每页几条数据 |
| page | 页码，从1开始 |


### 响应数据的约定


| 请求类型 | 成功响应 | 异常响应 |
|----|----|----|
| 新增 | `{"code": 0, "data": {...model}, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 更新 | `{"code": 0, "data": true, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 删除 | `{"code": 0, "data": true, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 查询单个实体 | `{"code": 0, "data": {...model}, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 分页查询多个实体 | `{"code": 0, "data": {"list": [{...model},...], "page":1, "pages": 1000, "total": 10000), "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|
| 批量删除 | `{"code": 0, "data": true, "msg": "成功"}`|`{"code": 403, "msg": "权限不足"}`|

:::tip
新增的请求建议返回新增后的实体对象，便于前端实现增、删、改、查功能
:::

### 分页查询多个实体 响应示例
```json
{
  "msg": "成功",
  "code": 0,
  "data": {
    "limit": 10,
    "list": [{
      "appId": "9b2b8839bc8f4edbb9ef783cb9ea1d2f",
      "code": "navigation",
      "contextPath": "/navigation",
      "menus": null,
      "name": "后台管理",
      "orderNum": 1,
      "pkValue": "9b2b8839bc8f4edbb9ef783cb9ea1d2f",
      "remark": "3"
    }, {
      "appId": "384f5ee687f04cd9b4e6410350d4e07c",
      "code": "resource",
      "contextPath": "/resource",
      "menus": null,
      "name": "资源库",
      "orderNum": 2,
      "pkValue": "384f5ee687f04cd9b4e6410350d4e07c",
      "remark": null
    }, {
      "appId": "e9ce35e8731448de9ab0f94a1eaa4ff9",
      "code": "4",
      "contextPath": "3",
      "menus": null,
      "name": "12",
      "orderNum": 12,
      "pkValue": "e9ce35e8731448de9ab0f94a1eaa4ff9",
      "remark": "33"
    }],
    "page": 1,
    "pages": 1,
    "total": 3
  }
}
```

### 响应码code的约定

```html
0：执行成功
401：未登录（需要重新登录）
403：权限不足
500：系统内部错误（非业务代码里显式抛出的异常，例如由于数据不正确导致空指针异常、数据库异常等等）
```

### 请求跨域问题解决方案

前后端分离开发模式，由于前后端可以进行单独部署，请求跨域问题很常见，解决方法主要有两种方式：

1. 采用nginx代理
2. 接口响应头开启Cross （推荐）

响应头需要做以下配置, 同时后端需要开放OPTIONS类型的请求，跨域带cookie的请求时，浏览器先试探性发送OPTIONS请求，成功后才发起真正的请求

```html
 Access-Control-Allow-Credentials:true
 Access-Control-Allow-Origin:请求的host
```

如：
```html
 Access-Control-Allow-Credentials:true
 Access-Control-Allow-Origin:http://www.fbknav.cn:98
```

:::tip
建议后端代码不要写死Access-Control-Allow-Origin，可以从请求头中动态获取 Origin
:::

如果接口不需跨域带cookie验证信息，可以简单设置
```html
 Access-Control-Allow-Origin: *
```



## 全局配置

当后端提供的接口与约定的规范不一致的时候，可以通过配置进行相应的调整做适配，但建议还是按前端建议的约定规范。

:::tip
注意：不是任何接口都能通过全局来适配, 要具体问题具体分析。 全局配置的文件路径：`/my.config.js`, [配置说明](config.md#my-config-js)
:::



## 常用的配置项

### pathPrefix

配置api请求地址前缀, String类型， 默认为空字符串，即请求和页面所在的服务器， 如果后台服务接口与页面部署的服务器不一样时，可以全局配置，也可以在实体配置prefix选项。

:::tip
注意：配置pathPrefix的值必须要在 `/src/config.js` 中有定义，否则报错。
:::


### methodTypeMap

数据请求类型对应http请求方法的映射， 默认值：
```json
 {
    fetch: 'get',
    get: 'get',
    add: 'post',
    update: 'post',
    remove: 'get'
    batch: 'post'
  }
```

### methodSuffixMap

数据请求类型对应api地址的后缀映射， 默认值：
```json
{
    fetch: '',
    get: '/:id',
    add: '',
    update: '',
    remove: '/:id',
    batch: '/remove'
}
```
### methodCommentMap
请求方法对应的中文注释
```json
{
    fetch: '获取<%=cname%>列表',
    get: '获取<%=cname%>单条记录',
    add: '新增<%=cname%>',
    update: '更新<%=cname%>',
    remove: '删除<%=cname%>',
    batch: '批量删除<%=cname%>'
}
 ```

### batchEnabled

是否全局开启生成批量删除，默认值：true
这个设置是新增的，在老版本下缺少这个配置，就是false


### stateListName

store 或 mixin 状态保存列表的字段名称，和接口响应数据对应， 默认：list

### stateModelName

store 或 mixin 状态保存单个实体字段名称，默认：model

### statePageName

store 或 mixin 状态保当前页码的字段名称，和接口响应数据对应， 默认：page

### statePageSizeName

store 或 mixin 状态保存页大小的字段名称，和接口响应数据对应，默认：limit

### stateTotalName

store 或 mixin 状态保存数据总条数字段名称，和接口响应数据对应，默认：total

### mockDataName

Mock响应数据字段名称，默认：data

### mockCodeName

Mock响应状态字段名称，默认：code

### mockMsgName

Mock响应信息说明字段名称，默认：msg

### successCodeValue

Mock响应成功时的code值，默认：0




## 模型配置

一个标准的模型配置文件如下，建议相同的实体操作都在一个文件里配置。

```javascript
module.exports = {
  vuex: false,             // 是否生成store，如果设置false，不生成store，只会生成mixin, 默认值false
  name: '用户信息',        // 模型名称，用来生成注释文档
  model: {
    path: '/api/users',   // 接口地址路径，必须
    title: '',            // 接口说明，用来生成注释文档
    prefix: '',           // 接口地址前缀，可选，默认为空, 名称必须要在 src/config.js中定义，否则报错
    methods: ['fetch', 'get', 'add', 'update', 'remove', 'batch'],  // 生成请求方法，默认全部，如需要自定义，设置为false
    transform: '',         // 响应数据转换函数，可选，函数名称必须要在 src/mapping/index.js 中定义，否则会报错
    options: {},          // ajax 参数选项，可选
    name:'',              // 自定义方法名称，methods为false，必须要设置
    columns: {},          // 模拟数据字段mock模板，可选
    template: '',         // Mock自定义模板函数名称, 名称必须在/src/mock/templates.js中能找到，设置了该值，columns将失效
    method: '',           // 自定义方法按那种方式生成store或mixin，可选， 在 methods为false时有效,可选值：fetch/get/add/update/remove
    state: '',             // 定义状态保存的名称，methods为false时并且method为空时，必须要设置state 和 name
    disabled: false      // 是否禁用该配置项， 设置为true，代码生成器将忽略该配置
  }
}
```

:::tip
上述配置，除了path是必须要填写之外，其他选项都是可选的， model支持 Array或Object类型配置
:::


### 1、实现对一个实体进行增、删、改、查
```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user'
  }
}
```
:::tip
当请求响应的数据无组件或页面之间的共享需求时，可以使用mixin模式，把数据存储到组件内部data，而不是存储到store。启用mixin模式，只需设置vuex为false
:::


### 2、实现对一个实体进行增、删、改、查，并且带模拟数据
```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user',
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```

### 3、只需要增、删、改、查中得某些操作，可以指定生成你需要的方法
```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user',
    // 需要生成的方法，可以按需要设置
    methods: ['fetch', 'get', 'add', 'update', 'remove'],
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```

### 4、自定义方法配置
当有接口不合适归类为通用的增、删、改、查 或 接口响应数据格式较特别，可以使用自定义方法配置，如：用户登录

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user/login',
    methods: false,
    name: 'login',
    state: 'loginInfo',
    columns: {
      id: '@guid',
      name: '@cname',
      loginTime: '@date'
    }
  }
}
```
上述配置表示调用 login 方法 请求接口返回模拟数据，并存储到store对应实体对象的loginInfo属性里

:::tip
methods为false时，必须要设置name
:::

:::tip
vuex模式，methods为false，并且method为空时，必须要设置state
:::

:::tip
method的值必须是fetch get add update remove batch 中的一个
:::

### 5、同一个实体模型配置多个方法

model支持Array的配置项, 以下示例配置了user的增、删、改、查，登录、注销接口

```javascript
module.exports = {
  vuex: true,
  model: [
    {
      path: '/api/users',
      columns: {
        id: '@guid',
        name: '@cname'
      }
    },
    {
      path: '/api/user/login',
      methods: false,
      state: 'loginInfo',
      name: 'login',
      columns: {
        id: '@guid',
        name: '@cname',
        loginTime: '@date'
      }
    },
    {
      path: '/api/user/logout',
      methods: false,
      state: 'logoutInfo',
      name: 'logout',
      columns: {
        logoutTime: '@date'
      }
    }
  ]
}

```

### 6、自定义Ajax参数选项

当api要求特殊，不能通过全局配置来解决时，可以通过配置 `options` 对 ajax的参数进行设置, 如：

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user/login',
    options: {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
}
```

### 7、自定义模拟数据模板

当需要模拟的数据不能通过定义列columns来满足需求时，可以自定义template， 如模拟一个树结构，需要编写一个模板函数，模板函数必须要在 `/src/mock/templates.js` 中定义，示范代码如下：

```javascript
/**
 * 模拟一个树结构
 * @param Mock Mock实例
 * @param url 请求的url
 * @param query 查询参数对象
 * @returns {Object}
 */
export const createTree = function (Mock, url, query) {
  let root = Mock.mock({
    'list|30': [{
      'id|+1': 1,
      'label': '@ctitle',
      'parentId': null
    }]
  })
  let data = Mock.mock({
    'list|100': [{
      'id|+1': 31,
      'label': '@ctitle',
      'parentId': function () {
        return Math.floor(Math.random() * 50)
      }
    }]
  })
  return {code: 0, data: {list: root.list.concat(data.list)}, message: ''}
}
```

代码生成器配置

```javascript
module.exports = {
  vuex: true,
  model: [{
    path: '/api/menus/tree',
    methods: false,
    name: 'getTree',
    state: 'tree',
    template: 'createTree' // 调用模板生成模拟数据
  }]
}

```


### 8、自定义数据转换函数

当需要后端接口响应的数据进行转换时，可以通过配置转换函数来处理。转换函数必须要在 `/src/mapping/index.js` 中定义
```javascript
/**
 * 数据转换函数示例
 * @param json 原始数据，即借口响应的json
 * @param method 接口调用方法名称
 * @param data 请求发送的数据对象
 * @param params 请求的url参数对象
 * @returns {*}
 */
export function dataMap (json, method, data, params) {
  // 对原始数据进行修改后，return 出去
  return json
}

```

代码生成器配置

```javascript
module.exports = {
  vuex: true,
  model: [{
    path: '/api/menus/tree',
    methods: false,
    name: 'getTree',
    state: 'tree',
    transform: 'dataMap' // 调用数据转换函数
  }]
}

```

### 9、指定请求接口地址前缀

请求接口地址前缀默认取全局配置的 pathPrefix ，如果有特殊接口，前缀与全局配置的不同时，可以在文件 `/src/config.js` 新增配置，然后在配置代码生成器。

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user',
    prefix: 'OTHER_PATH', // 设置与全局配置不同的前缀
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```


## 调用方式

代码生成器配置支持vuex 和 mixin 两种模式，以下分别对两种模式进行调用说明。

### vuex 模式调用

如代码生成器架构配置，新建文件 `/schemas/user.js`, 文件内容如下：

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user',
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```

上述配置，生成代码后，创建了文件 `/.my/code/store/user.js`， 可以在vue组件内import需要调用的方法，并绑定到模板，如：

```html
<template>
  <div>
      <p v-for="item in user.list"> {{item.name} } </p>
  </div>
</template>
```
```javascript
import user from '$my/code/store/user'
export default {
  mixins: [user],
  created() {
    // 触发获取列表的 action
    this.fetchUser({
         data: {
            page: 1,
            limit: 10
          }
    })
  }
}
```


### mixin 模式调用

如代码生成器架构配置，新建文件 `/coder/schemas/user.js`, 文件内容如下：

```javascript
module.exports = {
  vuex: false,  // 启用mixin模式
  model: {
    path: '/api/user',
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```


上述配置，生成代码后，创建了文件 `/.my/code/mixin/user.js`， 可以在vue组件内mixins方式继承 user 的方法获取数据，并绑定到模板，如：

```html
<template>
  <div>
      <p v-for="item in user.list"> {{item.name} } </p>
  </div>
</template>

```
```javascript
import user from '$my/code/mixin/user'
export default {
  mixins: [user], // 混合集成 user
  created() {
    // 调用获取列表方法
    this.fetchUser({
         data: {
            page: 1,
            limit: 10
          }
    })
  }
}
```






## 常见问题

### 1、POST数据时，后端接口接收不到前端传递的参数。

前端框架在默认情况下，POST数据是以 application/json 的方式传输JSON字符串。如果后端对传递的数据不是反序列化JSON的，需要对接收参数的代码进行改造。

如果后端接口有某些原因不能修改，可以在前端发送的请求头做处理。

代码生成器的配置以表单的形式提交数据实例：

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user/login',
    options: {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
}
```
:::tip
表单提交二进制流用 'Content-type': 'multipart/form-data'
:::

### 2、请求接口跨域报错

前后端分离开发模式，由于前后端可以进行单独部署，请求跨域问题很常见，解决方法主要有两种方式：

1. 采用nginx代理
2. 接口响应头开启Cross （推荐）

响应头需要做以下配置, 同时后端需要开放OPTIONS类型的请求，跨域带cookie的请求时，浏览器先试探性发送OPTIONS请求，成功后才发起真正的请求

```html
 Access-Control-Allow-Credentials:true
 Access-Control-Allow-Origin:请求的host
```

如：
```html
 Access-Control-Allow-Credentials:true
 Access-Control-Allow-Origin:http://www.fbknav.cn:98
```

:::tip
建议后端代码不要写死Access-Control-Allow-Origin，可以从请求头中动态获取 Origin
:::

如果接口不需跨域带cookie验证信息，可以简单设置
```html
 Access-Control-Allow-Origin: *
```
