# Marquee 无缝滚动

无缝滚动的列表 文档 <api-link href="components/sp-marquee">spMarquee</api-link>

:::tip
滚动容器需要固定尺寸
:::

## 使用示例

### 基础用法
:::demo(marquee-1)
```html
<template>
  <sp-marquee class="container" :data="list">
    <div v-for="item in list" :key="item.title" class="item">
      <span class="title">{{item.title}}</span>
      <span class="date">{{item.date}}</span>
    </div>
  </sp-marquee>
</template>   

<script>
export default {
    data() {
       return {
          list: []
       }
    },
    created() {
       for(let i=0; i<20; i++){
          this.list.push({
            title: `无缝滚动第${i}行无缝滚动第${i}行`,
            date: '2017-12-16'
          })
       }
    }
}
</script>

<style lang="scss" scoped>
    .container {
      height:150px;
    }
    .item {
       height: 30px;
       line-height: 30px;
    }
    .date{
       margin-left: 50px;
    }
</style>

```
:::

### 向下滚动
:::demo(marquee-2)
```html
<template>
  <sp-marquee class="container" :data="list" direction="down">
    <div v-for="item in list" :key="item.title" class="item">
      <span class="title">{{item.title}}</span>
      <span class="date">{{item.date}}</span>
    </div>
  </sp-marquee>
</template>   

<script>
export default {
    data() {
       return {
          list: []
       }
    },
    created() {
       for(let i=0; i<20; i++){
          this.list.push({
            title: `无缝滚动第${i}行无缝滚动第${i}行`,
            date: '2017-12-16'
          })
       }
    }
}
</script>

<style lang="scss" scoped>
    .container {
      height:150px;
    }
    .item {
       height: 30px;
       line-height: 30px;
    }
    .date{
       margin-left: 50px;
    }
</style>

```
:::

### 向左滚动

:::demo(marquee-3)
```html
<template>
  <sp-marquee class="container" :data="list" direction="left">
    <div v-for="item in list" :key="item" class="item">{{item}}</div>
  </sp-marquee>
</template>   

<script>
export default {
    data() {
       return {
          list: []
       }
    },
    created() {
       for(let i=0; i<20; i++){
          this.list.push(i)
       }
    }
}
</script>

<style lang="scss" scoped>
    .container {
      height:70px;
      font-size: 0;
    }
    .item {
       height: 50px;
       width: 50px;
       background: #91d5ff;
       line-height: 50px;
       display: inline-block;
       margin: 10px;
       text-align: center;
       font-size: 16px;
       
    }
</style>

```
:::


### 向右滚动

:::demo(marquee-4)
```html
<template>
  <sp-marquee class="container" :data="list" direction="right">
    <div v-for="item in list" :key="item" class="item">{{item}}</div>
  </sp-marquee>
</template>   

<script>
export default {
    data() {
       return {
          list: []
       }
    },
    created() {
       for(let i=0; i<20; i++){
          this.list.push(i)
       }
    }
}
</script>

<style lang="scss" scoped>
    .container {
      height:70px;
      font-size: 0;
    }
    .item {
       height: 50px;
       width: 50px;
       background: #91d5ff;
       line-height: 50px;
       display: inline-block;
       margin: 10px;
       text-align: center;
       font-size: 16px;
       
    }
</style>

```
:::

### 间隔滚动

:::demo(marquee-5)
```html
<template>
  <sp-marquee class="container" :data="list" :scroll-length="60" :wait-time="2000">
    <div v-for="item in list" :key="item.title" class="item">
      <span class="title">{{item.title}}</span>
      <span class="date">{{item.date}}</span>
    </div>
  </sp-marquee>
</template>   

<script>
export default {
    data() {
       return {
          list: []
       }
    },
    created() {
       for(let i=0; i<20; i++){
          this.list.push({
            title: `无缝滚动第${i}行无缝滚动第${i}行`,
            date: '2017-12-16'
          })
       }
    }
}
</script>

<style lang="scss" scoped>
    .container {
      height:150px;
    }
    .item {
       height: 30px;
       line-height: 30px;
    }
    .date{
       margin-left: 50px;
    }
</style>

```
:::
