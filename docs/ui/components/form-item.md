# FormItem 表单项

FormItem不是一个组件，是一系列数据录入组件的统称。 这些组件都有公共的属性、参数和功能。

## 公用属性参数

表单项的公共属性参数，继承 el-form-item 的的全部特性。 需要与MyForm结合使用才有效。

参数名称 | 类型 | 默认值 | 说明 
- | - | - | -
name | String | - | 表单域 model 字段名称, 等价于 el-form-item 的 prop 参数
width | String | - | 宽度，css属性，支持像素，百分比和表达式，也可以在MyForm中统一设置itemWidth
props | Object | - | 输入组件参数对象，即 el-form-item 包含的组件参数
options | Array | - | 选项数据，有选项的输入组件才有效
keyMap | Object | {id, parentId, label, value} | 选项数据对象属性名称映射
collapsible | Boolean | false |  可收起 
stopEnterEvent | Boolean | false | 阻止回车事件冒泡
depend | String | - | 依赖字段名称
dependValue | * | - | 依赖字段的值，即依赖字段的值等于该值才会显示，可以设置匹配函数
cascade | String | - | 级联的上级字段名称，需要与loader配合加载数据
loader | Function | - | 加载数据函数,必须返回Promise
dict | String | - | 字典名称，只是标识，需要与loader配合 或 表单的dictMap加载数据
disabled | Boolean | - | 禁用
readonly | Boolean | - | 只读
placeholder | String | - | 占位文本

## 使用方式

表单项组件有两种调用方式：

- 单独使用
- 与[MyForm](form.md)结合使用

### 单独使用

表单项组件可单独使用。注意：单独使用时与表单相关的公共参数功能即失效。用法：

:::demo(form-item-1)
```html
<template>
  <my-input placeholder="请输入标题" v-model="title"></my-input>
</template>
<script>
export default {
  data() {
    return {
      title: ''
    }
  }
}
</script>

```
:::

单独使用等价于：

```html 
<el-input placeholder="请输入标题" v-model="title"></el-input>
```

### 结合MyForm 

通常表单项需要结合MyForm使用，才能能便利实现数据录入功能。

:::demo(form-item-2)
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
     <my-input name="title" label="标题" placeholder="请输入标题"></my-input>
  </my-form>
</template>
<script>
export default {
  data() {
    return {
      model: {
        title: ''
      }
    }
  },
  methods: {
    handleSubmit(model) {
      alert(`submit: `+JSON.stringify(model))
    }
  }
}
</script>

```
:::

等价于：

```html
  <el-form :model="model" @submit="handleSubmit">
    <el-form-item prop="title" label="标题">
       <el-input v-model="title" placeholder="请输入标题"></el-input>
    </el-form-item>
  </el-form>

```


## 通用功能

### 样式设置

通过设置表单项宽度可实现行列排版

:::demo(form-item-3)
```html
<template>
  <my-form inline item-width="calc(33% - 12px)">
    <my-input name="input"></my-input>
    <my-select name="select"></my-select>
    <my-range name="range" mode="date"></my-range>
    <my-input name="content" width="calc(100% - 12px)" :props="{type:'textarea'}"></my-input>
  </my-form>

</template>
```
:::



### 输入组件参数

表单项内部都包含了一个输入组件，如：my-input 是 el-form-item 和 el-input 的结合体， 内部输入组件就是el-input.
输入组件的参数通过 `props` 设置。

:::demo(form-item-4)
```html
<template>
  <my-form>
    <my-input name="content" :props="{type:'textarea', rows:3}"></my-input>
  </my-form>
</template>
```
:::

### 选项数据

有选项数据的输入组件通过`options`参数设置。以下表单项组件有选项：

- my-select
- my-checkbox
- my-radio
- my-cascader
- my-tag-select
- my-tree-select

:::demo(form-item-5)
```html
<template>
  <my-form>
    <my-select name="select" :options="options"></my-select>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      options: [
          {label: '选项一', value: 1},
          {label: '选项二', value: 2},
          {label: '选项三', value: 3},
          {label: '选项四', value: 4},
          {label: '选项五', value: 5}
      ]
    }
  }
}
</script>

```
:::

### 数据加载函数

`options` 的数据也可以通过函数加载，常用在需要远程请求获取的数据

:::demo(form-item-5)
```html
<template>
  <my-form>
    <my-select name="select" :loader="loader"></my-select>
  </my-form>
</template>

<script>
export default {
  methods: {
    loader() {
      return Promise.resolve([
          {label: '选项一', value: 1},
          {label: '选项二', value: 2},
          {label: '选项三', value: 3},
          {label: '选项四', value: 4},
          {label: '选项五', value: 5} 
      ])
    }
  }
}
</script>

```
:::

### 折叠

设置 `collapsible` 可以实现折叠表单项，常用在筛选条件多的时候，把次要的折叠起来，节省空间。

:::demo(form-item-6)
```html
<template>
  <my-form @submit="handleSubmit" collapsible>
     <my-input name="title" label="标题"></my-input>
     <my-input name="content" label="内容" :props="{type:'textarea'}" collapsible></my-input>
  </my-form>
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


### 依赖

当表单项显示的条件是根据其他表单项的值来确定时，可以设置 `depend`、`dependValue` 来实现。

:::demo(form-item-7)
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
     <my-radio name="type" :options="types"></my-radio>
     <my-input name="animal" label="动物名称" depend="type" :depend-value="1"></my-input>
     <my-input name="fruit" label="水果名称" depend="type" :depend-value="2"></my-input>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        type: 1
      },
      types: [
          {label: '动物', value: 1},
          {label: '水果', value: 2}
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



### 级联

当表单项的选项数据时根据其他表单项的值来决定的，设置 `cascade`，配合loader来加载选项数据


:::demo(form-item-8)
```html
<template>
  <my-form :model="model" @submit="handleSubmit">
     <my-radio name="type" :options="types"></my-radio>
     <my-select name="name" cascade="type" :loader="loader"></my-select>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      model: {
        type: 1
      },
      types: [
          {label: '动物', value: 1},
          {label: '水果', value: 2}
      ]
    }
  },
  methods: {
    handleSubmit(model) {
      alert('提交的数据：'+JSON.stringify(model))
    },
    loader(model) {
      if(model.type === 1){
        return Promise.resolve([
            { label: '老虎', value: 1},
            { label: '狮子', value: 2}
        ])
      }else {
        return Promise.resolve([
            { label: '苹果', value: 3},
            { label: '香蕉', value: 4}
        ])
      }
    }
  }
}
</script>

```
:::


## 表单项组件

表单项组件包括以下组件。

### Autocomplete 自动完成
根据输入内容提供对应的输入建议。

基于 `el-autocomoplete` 实现, 兼容 `el-autocomoplete` 全部的参数、插槽和事件。

:::demo
```html
<template>
 <my-form @submit="handleSubmit">
    <my-autocomplete label="激活即列出输入建议" 
                     name="demo1" 
                     placeholder="请输入内容"
                     :props="{fetchSuggestions: this.querySearch}"></my-autocomplete>
    <my-autocomplete label="输入后匹配输入建议" 
                     name="demo2" 
                     placeholder="请输入内容"
                     :props="{fetchSuggestions: this.querySearch, triggerOnFocus: false}"></my-autocomplete>
    <my-autocomplete label="自定义模板" 
                        name="demo3"
                        placeholder="请输入内容"
                        :props="{fetchSuggestions: this.querySearch, popperClass:'autocomplete'}">
                        <template v-slot:suffix>
                          <i class="el-icon-edit el-input__icon"></i>
                        </template>
                      <template v-slot="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                      </template>
    </my-autocomplete>
 </my-form>
</template>
<script>
export default {
  methods: {
    handleSubmit(model) {
      alert(`submit: ${JSON.stringify(model)}`)
    },
    querySearch(queryString, cb) {
       const restaurants = this.loadAll();
       const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
       // 调用 callback 返回建议列表的数据
       cb(results);
    },
    createFilter(queryString) {
       return (restaurant) => {
         return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
       };
    },
    loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
     }
  }
}
</script>
<style lang="scss">
.autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>

```
:::


### Cascader 级联选择器

基于 `el-cascader` 实现, 兼容 `el-cascader` 全部的参数、插槽和事件。

数据源： [$docs/data/tree.json](../../files/tree.md)

:::demo
```html
<template>
  <my-form @submit="handleSubmit">
    <my-cascader name="demo1" label="默认 click 触发子菜单" :options="tree"></my-cascader>
    <my-cascader name="demo2" label="hover 触发子菜单" :options="tree"
                 :props="{props:{expandTrigger: 'hover'}}"></my-cascader>
    <my-cascader name="demo4" label="多选" :options="tree"
                 :props="{ props: {multiple: true}, clearable: true}"></my-cascader>
    <my-cascader name="demo5" label="自定义节点内容" :options="tree">
      <template v-slot="{ node, data }">
        <span>{{ data.label }}</span>
        <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
      </template>
    </my-cascader>

  </my-form>
</template>

<script>

  import tree from '$docs/data/tree.json'

  export default {
    data() {
      return {
        tree: tree
      }
    },
    methods: {
      handleSubmit(model) {
        alert(`submit: ${JSON.stringify(model)}`)
      }
    }
  }
</script>
```
:::


### Checkbox 多选框

### ColorPicker 颜色选择器

### DatePicker 日期时间选择器

### Editor 富文本编辑器

### Input 文本输入框

### InputNumber 数字输入框

### Radio 单选框

### Range 范围输入框

### Rate 评分

### Select 下拉选择框

### Slider 滑块

### Switch 开关

### TagInput 标签输入框

### TagSelect 标签选择

### TreeSelect 下拉树选择框
