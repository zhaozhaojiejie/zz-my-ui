# Anchor 锚菜单
用于跳转到页面指定位置。<api-link href="components/my-anchor">MyAnchor</api-link>

## 何时使用
需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 基础用法

:::demo
```html
<template>
  <div class="anchor-demo">
    <el-row :gutter="20">
      <el-col :span="6">
        <my-anchor :bounds="20" :affix="affix" :data="data" @click="handleClick"></my-anchor>
      </el-col>

      <el-col :span="18">
        <my-container v-for="n in 5"
                      border
                      class="box"
                      :key="n"
                      :id="`box${n}`">
          box{{n}}
        </my-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '$ui/icons/bed'
  import MyContainer from '../../ui/lib/components/my-container/src/Container';

  export default {
    name: 'anchor',
    components: {MyContainer},
    data() {
      return {
        affix: {
          target: this.getTarget
        },
        data: [
          {
            title: '基本信息1',
            anchor: '#box1'
          },
          {
            title: '基本信息2',
            anchor: '#box2',
            children: [
              {
                title: '选项一',
                anchor: '#box3'
              },
              {
                title: '选项二',
                anchor: '#box4'
              }
            ]
          }
        ]
      }
    },
    methods: {
      getTarget() {
        return document.querySelector('.anchor-demo')
      },
      handleClick(vm) {
        this.$message.info(`点击了：${vm.title}`)
      }
    }

  }
</script>

<style lang="scss" scoped>
  .anchor-demo {
    height: 800px;
    overflow: auto;
    overflow-x: hidden;
  }

  .box {
    height: 500px;
  }
</style>

```
:::
