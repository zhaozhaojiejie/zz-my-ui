# Result 结果

用于反馈一系列操作任务的处理结果。
组件文档 <api-link href="components/sp-result">spResult</api-link>

## 何时使用

当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。

## 代码演示

### Info

展示处理结果。


:::demo
```html
<template>
    <sp-result title="Your operation has been executed">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </sp-result>
</template>

<script>
import {spResult} from '$ui'
export default {
  components: {
    spResult
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
    <sp-result status="success"
     title="Successfully Purchased Cloud Server ECS!"
     subtitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
            <el-button>Buy Again</el-button>
        </template>
     </sp-result>
</template>

<script>
import {spResult} from '$ui'
export default {
  components: {
    spResult
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
    <sp-result status="warning"
     title="There are some problems with your operation.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </sp-result>
</template>

<script>
import {spResult} from '$ui'
export default {
  components: {
    spResult
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
    <sp-result status="error"
     title="Submission Failed"
     subtitle="Please check and modify the following information before resubmitting.">
       <sp-title level="4">The content you submitted has the following error:</sp-title>
        <sp-paragraph>
          <sp-icon name="el-icon-circle-close" theme="danger"></sp-icon>
          Your account has been frozen <sp-text type="primary">Thaw immediately &gt;</sp-text>
        </sp-paragraph>
        <sp-paragraph>
          <sp-icon name="el-icon-circle-close" theme="danger"></sp-icon>
          Your account is not yet eligible to apply <sp-text type="primary">Apply Unlock &gt;</sp-text>
        </sp-paragraph>
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
            <el-button>Buy Again</el-button>
        </template>
     </sp-result>
</template>

<script>
import {spResult, spTitle, spParagraph, spText, spIcon} from '$ui'
export default {
  components: {
    spResult,
    spTitle,
    spParagraph,
    spText,
    spIcon
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
    <sp-result status="403"
     title="403"
     subtitle="Sorry, you are not authorized to access this page.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </sp-result>
</template>

<script>
import {spResult} from '$ui'
export default {
  components: {
    spResult
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
    <sp-result status="404"
     title="404"
     subtitle="Sorry, the page you visited does not exist.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </sp-result>
</template>

<script>
import {spResult} from '$ui'
export default {
  components: {
    spResult
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
    <sp-result status="500"
     title="500"
     subtitle="Sorry, the server is wrong.">
        <template v-slot:extra>
            <el-button type="primary">Go Console</el-button>
        </template>
     </sp-result>
</template>

<script>
import {spResult} from '$ui'
export default {
  components: {
    spResult
  }
}
</script>

```
:::
