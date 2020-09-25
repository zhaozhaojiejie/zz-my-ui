# Form 表单

<api-link href="components/sp-form">spFrom</api-link>  是组件库的重要组成部分，
它是一个表单项的容器，用来收纳[表单项组件](form-item.md)，提供排版、验证和数据处理功能。


## 代码示例

### 基础用法

spFrom继承 el-form的全部参数和事件。用法与el-from有差别， el-from需要与el-form-item结合使用。
spForm不需要显式调用，表单项组件内置了el-form-item， 不需要显式调用。

:::demo(form-1)
```html
<template>
  <sp-form @submit="handleSubmit">
     <sp-input name="title" label="标题"></sp-input>
  </sp-form>
</template>

<script>
export default {
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 初始化数据

通过设置 `model` 属性回填表单数据

:::demo(form-2)
```html
<template>
  <sp-form :model="model" @submit="handleSubmit">
     <sp-input name="title" label="标题"></sp-input>
  </sp-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        title: '回填的数据'
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 布局排版

与排版和外观相关的参数包括：
`itemWidth`、`footerAlign`、`inline`、
`labelWidth`、`labelPosition`、`size`、
`submitText`、`submittingText`、`resetText`、`footerBlock`、
`footerExpandBlock`、`footerFloat`

:::demo(form-3)
```html
<template>
  <sp-form @submit="handleSubmit"
           inline
           label-width="60px"
           item-width="calc(50% - 20px)"
           footer-block
           size="small"
           footer-align="right">
     <sp-checkbox name="category" label="种类" :options="categories" width="100%"></sp-checkbox>
     <sp-select name="fruit" label="水果" :options="fruit"></sp-select>
     <sp-date-picker name="date" label="日期" :props="{valueFormat:'yyyy-MM-dd'}"></sp-date-picker>
     <sp-input name="title" label="标题" width="100%"></sp-input>
     <sp-input name="content" label="内容" width="100%" :props="{type:'textarea'}"></sp-input>
  </sp-form>
</template>

<script>
export default {
  data() {
    return {
      fruit: [
          { label:'香蕉', value:1 },
          { label:'苹果', value:2 },
          { label:'草莓', value:3 },
          { label:'雪梨', value:4 } 
      ],
      categories: [
          { label:'种类一', value:1 },
          { label:'种类二', value:2 },
          { label:'种类三', value:3 },
          { label:'种类四', value:4 }
      ]
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 验证

可以在spForm或表单项组件配置`rules`实现验证，用法与el-form、el-form-item一样

:::demo(form-4)
```html
<template>
  <sp-form @submit="handleSubmit" :rules="rules" label-width="80px">
     <sp-input name="title" label="标题"></sp-input>
     <sp-input name="content" label="内容"
      :props="{type:'textarea'}" 
      :rules="{required:true, message:'内容不能为空'}"></sp-input>
  </sp-form>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        title: {required: true, message: '标题是必填项'}
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 可折叠

设置 `collapsible` 可以实现折叠表单项，常用在筛选条件多的时候，把次要的折叠起来，节省空间。

:::demo(form-5)
```html
<template>
  <sp-form @submit="handleSubmit" collapsible>
     <sp-input name="title" label="标题"></sp-input>
     <sp-input name="content" label="内容" :props="{type:'textarea'}" collapsible></sp-input>
  </sp-form>
</template>

<script>
export default {
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  }
}
</script>

```
:::

### 字典数据

通过`dictMap`设置静态字典数据

:::demo(form-6)
```html
<template>
  <sp-form @submit="handleSubmit" :dict-map="dictMap" :model="model">
     <sp-radio name="radio" dict="fruit" button></sp-radio>
  </sp-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        radio: 1
      },
      dictMap: {
        fruit: [
          { label:'香蕉', value:1 },
          { label:'苹果', value:2 },
          { label:'草莓', value:3 },
          { label:'雪梨', value:4 } 
        ]
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    }
  },
  mounted() {
    // 测试动态修改 dictMap
    setTimeout(()=>{
        this.dictMap.fruit.push({
          label:'水蜜桃', value:5
        })
    }, 1000)

  }
}
</script>

```
:::

### 数据加载函数

:::demo(form-7)
```html
<template>
  <sp-form @submit="handleSubmit" :loader="loader" :model="model">
     <sp-radio name="radio" dict="fruit" button></sp-radio>
  </sp-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        radio: 1
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    },
    loader(model, {name, dict}) {
      // 可根据表单项远程请求数据
      const fruit = [
                      { label:'香蕉', value:1 },
                      { label:'苹果', value:2 },
                      { label:'草莓', value:3 },
                      { label:'雪梨', value:4 }]
      return Promise.resolve(fruit)
    }
  }
}
</script>

```
:::

### 动态表单
:::demo
```html
<template>
    <sp-form @submit="handleSubmit"
             @change="handleChange"
             :model="model"
             label-width="100px"
             inline
             footer-block>
      <div v-for="(item, index) in model.users" :key="index">
        <sp-input :name="`users.${index}.name`"
                  :rules="{required:true, message:'名称不能为空'}"
                  :label="`用户名称${index+1}`"
                  width="400px">
        </sp-input>
        <sp-form-custom>
          <el-button @click="handleAdd(item, index)">增加</el-button>
          <el-button v-if="index>0" @click="handleRemove(item, index)">删除</el-button>
        </sp-form-custom>
      </div>
    </sp-form>
</template>

<script>
  import {cloneDeep} from '$ui/utils/util'

  export default {
    data() {
      return {
        model: {
          users: [
            {name: '张三'},
            {name: '李四'}
          ]
        },
        currentModel: {}
      }
    },
    methods: {
      handleChange(model) {
        this.currentModel = model
      },
      handleSubmit(model) {
        alert(JSON.stringify(model))
      },
      handleAdd() {
        this.model.users.push({name: ''})
      },
      handleRemove(item, index) {
        this.currentModel.users.splice(index, 1)
        this.model = cloneDeep(this.currentModel)
      }
    }
  }
</script>


```
:::


### 事件

支持的事件包括： `submit`、`reset`、`change`、`collapse`

:::demo(form-8)
```html
<template>
  <sp-form @submit="handleSubmit" 
           @reset="handleReset" 
           @change="handleChange" 
           @collapse="handleCollapse" 
           collapsible>
     <div>change: {{model}}</div>
     <sp-input name="title" label="标题"></sp-input>
     <sp-input name="content" label="内容" :props="{type:'textarea'}" collapsible></sp-input>
  </sp-form>
</template>

<script>
export default {
  data() {
    return {
      model: null
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    },
    handleReset() {
      alert('reset')
    },
    handleChange(model) {
      this.model = model
    },
    handleCollapse(collapsed){
      alert(`collapsed: ${collapsed}`)
    }
  }
}
</script>

```
:::



