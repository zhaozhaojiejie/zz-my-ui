# 脚本命令

工程包含了一些开发辅助命令

## 安装依赖

在互联网环境用 `npm install` 安装，如果安装不成功可以尝试用淘宝镜像 

```sh
npm install --registry=https://registry.npm.taobao.org
```

在非互联网环境安装命令

```sh
npm run install
```

:::warning 注意
需要在内网环境[部署node_modules](config.md#install)  
:::


## 初始化项目

```sh
npm run ready [-f]
```
在需要初始化项目临时文件时使用， 该命令会依次运行 修复node_modules、生成ElementUI组件、生成UI主题、生成代码。

参数 -f  表示先清除临时目录再创建

## 预编译主题

```sh 
npm run theme [name]
```

仅编译 ElementUI 主题 `npm run theme el` 

仅编译 UI 主题 `npm run theme ui` 

同时编译两者 `npm run theme`

## 生成代码

```sh 
npm run coder [-f]
```
当修改了schemas，需要用该命令重新生成代码

参数 -f  表示先清除目录再生成代码

## 生成路由配置

```sh 
npm run route [action] [app]
```
根据视图组件文件构建路由配置信息

action 可选值： `build` 或 `watch`

app 子应用名称，空标识是主应用

### 主应用路由

生成主应用路由配置
```sh 
npm run route build
```

监听主应用文件变化自动创建配置
```sh 
npm run route watch
```

### 子应用路由

生成子应用路由配置
```sh 
npm run route build [子应用名称]
```

监听子应用文件变化自动创建配置
```sh 
npm run route watch [子应用名称]
```

## 启动开发环境

```sh 
npm run dev
```

## 编译主应用

```sh 
npm run build
```

## 启动预览服务

在需要检验编译后的应用是否运行正常，可以用该命令启动web服务测试
```sh 
npm run preview
```

## 代码校验
```sh 
npm run lint
```

## 运行单元测试
```sh 
npm run test:unit
```

## 构建桥类库
```sh 
npm run bridge
```

## 启动文档服务
```sh 
npm run start
```

## 发布项目

批量编译打包，包括主应用和全部子应用
```sh 
npm run release
```

## 子应用

```sh 
npm run app [action] [name] [port]
```

### 创建子应用

```sh 
npm run app add [name] [port]
```
例如创建一个 名为 app1 ,启动端口 为 8001

`npm run app add app1 8001`

### 删除子应用

```sh 
npm run app remove [name]
```

### 启动子应用开发环境
```sh 
npm run dev:[name]
```

### 编译子应用

```sh 
npm run build:[name]
```

### 批量编译子应用

```sh 
npm run app build
```
