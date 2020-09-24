# EditTags 标签编辑（批量输入）

标签编辑 文档 <api-link href="components/my-edit-tags"> MyEditTags </api-link>

## 基础用法

:::demo

```html
<template>
  <div>
    <div> 
      默认： <my-edit-tags  :tags-list.sync="arr1"></my-edit-tags> <br/>
      双向绑定数据： {{arr1}}
    </div>  <br/>
    <div> 
      medium: <my-edit-tags color="white" :tags-list.sync="arr2" size="medium"></my-edit-tags> 背景为白色<br/>
      双向绑定数据： {{arr2}}
    </div> <br/>
    <div>     
      small: <my-edit-tags type="warning" :tags-list.sync="arr3" size="small"></my-edit-tags> type: warning<br/>
      双向绑定数据： {{arr3}}
    </div> <br/>
    <div> 
      mini: <my-edit-tags :tags-list.sync="arr4" size="mini"></my-edit-tags><br/>
      双向绑定数据： {{arr4}}
    </div><br/> 
    <div>前面输入
      <my-edit-tags :tags-list.sync="arr5" :is-right="false"></my-edit-tags><br/>
      双向绑定数据： {{arr5}}
    </div><br/>
    <div>只读
      <my-edit-tags :tags-list="arr6" read-only></my-edit-tags>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr1: ['1', '2', '3', '4'],
      arr2: ['1', '2', '3', '4'],
      arr3: ['1', '2', '3', '4'],
      arr4: ['1', '2', '3', '4'],
      arr5: ['1', '2', '3', '4'],
      arr6: ['1', '2', '3', '4']
    }
  }
}
</script>

```

:::

## 一次性输入多个标签

- 组件默认识别“，”，“,”，“|” 三个符号作为分割符
- 属性devides 可以自定义 分割符
- devides 为空数组，不进行分割

:::demo

```html
<template>
  <div>
    <div>
      <p>默认分割： 复制这段信息：aaa,bbb，ccc|ddd</p>
      <my-edit-tags :tags-list="arr1" input-width="200px"></my-edit-tags>
      <p>不做分割： 复制这段信息：aaa,bbb，ccc|ddd</p>
      <my-edit-tags :tags-list="arr2" :devides="[]" input-width="200px"></my-edit-tags>
      <p>自定义分割： 复制这段信息：aaa~bbb~ccc~ddd</p>
      <my-edit-tags :tags-list="arr3" :devides="['~']" input-width="200px"></my-edit-tags>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr1: ['1', '2', '3', '4'],
        arr2: ['1', '2', '3', '4'],
        arr3: ['1', '2', '3', '4']
      }
    }
  }
</script>

```

:::

## 标签验证

:::demo

```html
<template>
  <div>
    <div>
      标签禁止超过三个字符<br/>
      <my-edit-tags :tags-list="arr1" :validate="validate" :invalidate-handle="invalidCb" input-width="200px"></my-edit-tags>
      <div v-show="errInfo">
      错误信息：{{errInfo}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr1: ['1', '2', '3', '4'],
        errInfo: ''  
      }
    },
    methods: {
      validate(keys, vm) {
        return new Promise((resolve, reject) => {
          let err = []
          let arr = keys.filter((item, index) => {
            if (item.length > 3) {
              err.push({index: index, val: item})  
            } else {
              return item
            }
          })
          let errIndex = err.map((item) => { return item.index + 1 }).join(',')
          this.errInfo = err.map((item) => {
            return item.val
          }).join(',')
          if (err.length) {
            this.$message({
              type: 'warning',
              message: `第${errIndex}个标签长度过长`
            })
          }
          if (arr.length) {
            return resolve(arr)
          } else {
             return reject(err)
          }
        })
      },
      invalidCb(err, vm) {
        this.errInfo = err.map((item) => {
          return item.val
        }).join(',')
        vm.inputVisible = false;
        vm.inputValue = ''
      }
    }
  }
</script>

```

:::
