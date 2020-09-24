# Login 登录

文档 <api-link href="components/my-login">MyLogin</api-link>

## 基本用法
:::demo
```html
<template>
 <my-login :login="login"></my-login>
</template>
<script>
export default {
  methods: {
    login() {
      return new Promise(resolve => {
         setTimeout(()=>{
           resolve({id:123, token:'abc'})
         }, 1000)
      })
    }
  }
}
</script>
```
:::

## 透明背景

:::demo
```html
<template>
 <div class="bg">
    <my-login :login="login" center transparent></my-login>
 </div>
</template>
<script>
export default {
  methods: {
    login() {
      return new Promise(resolve => {
         setTimeout(()=>{
           resolve({id:123, token:'abc'})
         }, 1000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  position: relative;
  width: 100%;
  height: 600px;
  background: #0e418c;
}
</style>
```
:::

## 显示PKI
:::demo
```html
<template>
 <my-login :login="login" pki></my-login>
</template>
<script>
export default {
  methods: {
    login() {
      return new Promise(resolve => {
         setTimeout(()=>{
           resolve({id:123, token:'abc'})
         }, 1000)
      })
    }
  }
}
</script>
```
:::

## 插槽

:::demo
```html
<template>
    <my-login :login="login">
        <div slot="extra">
            <el-checkbox>记住密码</el-checkbox>
        </div>
        <div slot="footer" style="text-align: right">
            <el-link type="primary">登录帮助</el-link>
        </div>
    </my-login>
</template>
<script>
export default {
  methods: {
    login() {
      return new Promise(resolve => {
         setTimeout(()=>{
           resolve({id:123, token:'abc'})
         }, 1000)
      })
    }
  }
}
</script>
```
:::

