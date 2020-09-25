## Print 打印

打印工具，可保留打印内容原有的样式。
组件文档 <api-link href="components/sp-print">spPrint</api-link>

### 基础用法。

- print-range 参数传一个 css 选择器,指定需要打印的区域，如果选择器匹配到多个区域，则会依次分页打印。你可以利用这一特性灵活处理打印内容。
- 打印按钮默认使用 el-button,通过 type,btn-class,text 参数控制按钮显示，如果仍不能满足需求，可通过名称为 button 的插槽自定义元素。
:::demo

```html
<template>
  <div>
    <sp-panel title="打印区域" theme="border-left">
      <template v-slot:handle>
        <sp-print :print-range="'.print-range1'">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-tickets"
            slot="button"
          ></el-button>
        </sp-print>
      </template>
      <el-table
        :data="tableData"
        class="print-range1"
        height="250"
        style="width: 100%"
      >
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="250">
        </el-table-column>
      </el-table>
    </sp-panel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: (function() {
          let arr = [];
          for (let i = 0; i < 50; i++) {
            arr.push({
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            });
          }
          return arr;
        })()
      };
    }
  };
</script>
```

:::

### 分页处理。

- 如果你希望打印一个表格，每页的行数固定，并且都有表头，可以对表格进行预处理。如代码所示将处理过的表格用.sp-print-displaynone 隐藏起来，使用.sp-print-visible 在打印时显示出来。
:::demo

```html
<template>
  <div>
    <sp-panel title="分页处理" theme="border-left">
      <template v-slot:handle>
        <sp-print
          :print-range="'.print-range2'"
          btn-type="primary"
          btn-class="div-print"
          btn-text="分页打印"
        >
        </sp-print>
      </template>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="250">
        </el-table-column>
      </el-table>
      <!-- 隐藏表格，在打印时显示 -->
      <div class="sp-print-displaynone sp-print-visible">
        <el-table
          v-for="(item, idx) in tableData2"
          :key="idx"
          :data="item"
          class="print-range2"
          height="250"
          style="width: 100%"
        >
          <el-table-column prop="name" label="姓名" width="100">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="250">
          </el-table-column>
        </el-table>
      </div>
    </sp-panel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: (function() {
          let arr = [];
          for (let i = 0; i < 50; i++) {
            arr.push({
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            });
          }
          return arr;
        })()
      };
    },
    computed: {
      tableData2() {
        let arr = [];
        let l = Math.ceil(this.tableData.length / 15);
        for (let i = 0; i < l; i++) {
          arr.push(this.tableData.slice(i * 15, (i + 1) * 15));
        }
        return arr;
      }
    }
  };
</script>
```

:::

### 打印 canvas 元素

:::demo

```html
<template>
  <div>
    <sp-panel title="分页处理" theme="border-left">
      <template v-slot:handle>
        <sp-print print-range=".print-range3" keep-preview></sp-print>
      </template>
      <div class="print-range3">
        <sp-chart-bar :data="data2"></sp-chart-bar>
      </div>
    </sp-panel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data2: {
          columns: ['项目', '工时'],
          rows: [
            ['一体化（广东/北京）', 15],
            ['安徽智侦', 8],
            ['智慧新刑技', 8],
            ['贵州反诈', 8],
            ['江苏刑专', 4],
            ['电子智能取证平台', 4],
            ['深圳一体化', 4],
            ['厦门出入境', 3],
            ['海关案管', 3],
            ['河南反黑', 0.5],
            ['北京保搜索', 0.5]
          ]
        }
      };
    }
  };
</script>
```

:::

### 样式修正

- 如果打印区域内的元素的样式是通过区域外的类限定的，那么打印区域复制后，样式将不起作用。要修正此问题，可以通过给 container-class 参数传入一个类名，作为其容器的类名。如果限定的类大于一层，可以通过 parent-dom 参数传入一个 dom 对象或者一个返回 dom 对象的方法，或者可转为 dom 的字符串，此 dom 对象将作为父容器，内部必须包含 container-class 指定的类名。
:::demo

```html
<template>
  <div>
    <sp-panel title="单层父类" theme="border-left">
      <template v-slot:handle>
        <sp-print :print-range="'.print-range4'" container-class="sp-container" :root-style="{'border-width': 0}"> </sp-print>
      </template>
      <div class="sp-container">
        <div class="other">其它非打印内容</div>
        <div class="sp-list print-range4">
          <div class="item">spWeb，一套为前端开发者准备的基于Vue的项目工程化方案</div>
        </div>
      </div>
    </sp-panel>
    <sp-panel title="多层父类" theme="border-left">
      <template v-slot:handle>
        <sp-print
          container-class="sp-wrapper"
          :parent-dom="parentDom"
          :print-range="'.print-range5'"
        >
        </sp-print>
      </template>
      <div class="sp-container">
        <div class="other">其它非打印内容</div>
        <div class="sp-wrapper">
          <div class="sp-list print-range5">
            <div class="item">
              spWeb，一套为前端开发者准备的基于Vue的项目工程化方案
            </div>
          </div>
        </div>
      </div>
    </sp-panel>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        parentDom: `<div class="sp-container" style="border-width:0">
                             <div class="sp-wrapper"></div>
                         </div>`
      };
    }
  };
</script>
<style lang="scss" scoped>
  .sp-container {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
  }
  .sp-container .sp-list .item {
    color: #f5222d;
  }
  .sp-container .sp-wrapper .sp-list .item {
    color: #096dd9;
  }
</style>
```

:::

### 样式改变
- 打印的区域中，可能包含有滚动条的表格，或者折叠起来的项目，你可能希望在打印时将其展开。组件已经默认将el-table的滚动条展开，对于其它的样式，你可以使用style-array传入一个数组去改变相关元素的样式，达到自己想要的效果。数组的每个元素须包含一个css选择器和一个style对象。例如：[{selector: '.wrapper1',style: {height: 'auto'}}]
:::demo 通过改变样式在打印时展开滚动条或实现其它效果,这里通过style-array在打印时将滚动区域展开，并将列表文字变成蓝色。

```html
<template>
   <div>
    <sp-panel title="样式临时更改" theme="border-left">
      <template v-slot:handle>
        <sp-print :print-range="'.print-range6'" :style-array="styleArray1">
        </sp-print>
      </template>
       <div class="print-range6">
          <ul class="wrapper1">
              <li v-for="item in list">
                 {{item.name}}
              </li>
          </ul>
      </div>
    </sp-panel>
   </div>
</template>
<script>
    export default {
        data() {
           return {
               styleArray1: [
                   {
                     selector: '.wrapper1',
                     style: {
                        height: 'auto'
                     }
                   },
                   {
                     selector: 'ul>li',
                     style: {
                         color: 'blue'
                     }
                   }
               ],
               list: (function() {
                   let arr = [];
                   for(let i = 0; i < 50; i++) {
                       arr.push({name: 'item' + i})
                   }
                   return arr;
               })()
           }
        }
    }
    </script>
    <style lang="scss" scoped>
    .wrapper1{
        height: 300px;
        overflow-y: scroll;
        border: 1px solid #ccc;
        list-style: none;
    }
    </style>
```
:::

### 自定义DOM处理方法
- 如果以上方法都不能解决问题，组件提供了一个自定义改变dom的方法dom-transfer, 该方法有两个参数，第一个是组件处理后待打印的dom, 第二个是组件对象本身，你可以通过dom操作改变或添加元素，并返回改变后的dom.
:::demo 这里通过dom-transfer自定义方法在打印时给每个打印区域头部添加了标题

```html
<template>
   <div>
    <sp-panel title="自定义DOM处理" theme="border-left">
      <template v-slot:handle>
        <sp-print :print-range="'.print-range7'" :dom-transfer="transfer" keep-preview>
        </sp-print>
      </template>
       <div class="print-range7">
          <ul class="wrapper2">
              <li v-for="item in list">
                 {{item.name}}
              </li>
          </ul>
      </div>
      <div class="print-range7">
          <ul class="wrapper2">
              <li v-for="item in list">
                 {{item.name}}
              </li>
          </ul>
      </div>
    </sp-panel>
   </div>
</template>
<script>
    export default {
        data() {
           return {
               list: (function() {
                   let arr = [];
                   for(let i = 0; i < 50; i++) {
                       arr.push({name: 'item' + i})
                   }
                   return arr;
               })()
           }
        },
        methods: {
          transfer(dom, root) {
            let title = document.createElement('div');
            title.innerHTML = '自定义标题';
            let ranges = dom.querySelectorAll('.print-range7');
            for(let i = 0; i < ranges.length; i++) {
                let t = title.cloneNode(true);
                ranges[i].insertBefore(t, ranges[i].childNodes[0]);
            }       
            return dom;
          }
        }
    }
    </script>
    <style lang="scss" scoped>
    .wrapper2{
        height: 150px;
        overflow-y: scroll;
        border: 1px solid #ccc;
        list-style: none;
    }
    </style>
```
:::

### 打印预览
- 在打印前预览打印内容，可以添加preview参数
:::demo 

```html
<template>
   <div>
    <sp-panel title="打印预览" theme="border-left">
      <template v-slot:handle>
        <sp-print :print-range="'.print-range8'" preview>
        </sp-print>
      </template>
      <div class="print-range8">
         <div>spWeb，一套为前端开发者准备的基于Vue的项目工程化方案</div>
      </div>
    </sp-panel>
   </div>
</template>
<script>
    export default {
    }
</script>
```
:::
