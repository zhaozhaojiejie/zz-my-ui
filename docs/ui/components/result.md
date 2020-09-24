# Result 结果

用于反馈一系列操作任务的处理结果。
组件文档 <api-link href="components/my-result">MyResult</api-link>

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码演示

### Info

展示处理结果。


:::demo
```html
<template>
    <my-result title="Your operation has been executed">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </my-result>
</template>

<script>
import {MyResult} from '$ui'
export default {
  components: {
    MyResult
  }
}
</script>

```
:::


### Success

成功的结果

:::demo
```html
<template>
    <my-result status="success"
     title="Successfully Purchased Cloud Server ECS!"
     subtitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
            <el-button>Buy Again</el-button>
        </template>
     </my-result>
</template>

<script>
import {MyResult} from '$ui'
export default {
  components: {
    MyResult
  }
}
</script>

```
:::

### Warning

警告类型的结果

:::demo
```html
<template>
    <my-result status="warning"
     title="There are some problems with your operation.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </my-result>
</template>

<script>
import {MyResult} from '$ui'
export default {
  components: {
    MyResult
  }
}
</script>

```
:::

### Error
复杂的错误反馈。

:::demo
```html
<template>
    <my-result status="error"
     title="Submission Failed"
     subtitle="Please check and modify the following information before resubmitting.">
       <my-title level="4">The content you submitted has the following error:</my-title>
        <my-paragraph>
          <my-icon name="el-icon-circle-close" theme="danger"></my-icon>
          Your account has been frozen <my-text type="primary">Thaw immediately &gt;</my-text>
        </my-paragraph>
        <my-paragraph>
          <my-icon name="el-icon-circle-close" theme="danger"></my-icon>
          Your account is not yet eligible to apply <my-text type="primary">Apply Unlock &gt;</my-text>
        </my-paragraph>
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
            <el-button>Buy Again</el-button>
        </template>
     </my-result>
</template>

<script>
import {MyResult, MyTitle, MyParagraph, MyText, MyIcon} from '$ui'
export default {
  components: {
    MyResult,
    MyTitle,
    MyParagraph,
    MyText,
    MyIcon
  }
}
</script>

```
:::

### 403
你没有此页面的访问权限。

:::demo
```html
<template>
    <my-result status="403"
     title="403"
     subtitle="Sorry, you are not authorized to access this page.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </my-result>
</template>

<script>
import {MyResult} from '$ui'
export default {
  components: {
    MyResult
  }
}
</script>

```
:::


### 404
此页面未找到。

:::demo
```html
<template>
    <my-result status="404"
     title="404"
     subtitle="Sorry, the page you visited does not exist.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </my-result>
</template>

<script>
import {MyResult} from '$ui'
export default {
  components: {
    MyResult
  }
}
</script>

```
:::


### 500
服务器发生了错误。

:::demo
```html
<template>
    <my-result status="500"
     title="500"
     subtitle="Sorry, the server is wrong.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </my-result>
</template>

<script>
import {MyResult} from '$ui'
export default {
  components: {
    MyResult
  }
}
</script>

```
:::
