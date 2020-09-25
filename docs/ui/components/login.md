# Login 登录

文档 <api-link href="components/sp-login">spLogin</api-link>

## 基本用法
:::demo
```html
<template>
 <sp-login :login="login"></sp-login>
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
    <sp-login :login="login" center transparent></sp-login>
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
 <sp-login :login="login" pki></sp-login>
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
    <sp-login :login="login">
        <div slot="extra">
            <el-checkbox>记住密码</el-checkbox>
        </div>
        <div slot="footer" style="text-align: right">
            <el-link type="primary">登录帮助</el-link>
        </div>
    </sp-login>
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

