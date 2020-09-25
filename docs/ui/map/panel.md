# Panel 面板

Panel面板容器。文档<api-link href="map/sp-map-panel"> spMapPanel</api-link>

## 基础用法

:::demo
```html
<template>
  <sp-map>  
    <sp-map-panel title="标题文本" 
                  placement="center-center"
                  width="300px"
                  height="200px">
      面板占位内容
    </sp-map-panel>
  </sp-map>
</template>
```
:::

## 可关闭

:::demo
```html
<template>
  <sp-map>  
    <sp-map-panel title="标题文本" 
                  icon="el-icon-setting"
                  placement="center-center"
                  width="300px"
                  height="200px"
                  closable
                  :visible.sync="visible">
      面板占位内容
    </sp-map-panel>
  </sp-map>
</template>
<script>
export default {
  data() {
     return {
        visible: true
     }
  }
}
</script>
```
:::

## 拖拽 与 Resize

:::demo
```html
<template>
  <sp-map>  
    <sp-map-panel title="标题文本" 
                  icon="el-icon-setting"
                  placement="center-center"
                  width="300px"
                  height="200px"
                  draggable
                  resizable>
      面板占位内容
    </sp-map-panel>
  </sp-map>
</template>
<script>
export default {
  data() {
     return {
        visible: true
     }
  }
}
</script>
```
:::

## 主题颜色
:::demo
```html
<template>
  <sp-map>  
    <sp-map-panel title="标题文本" 
                  icon="el-icon-setting"
                  placement="left-center"
                  footer-align="right"
                  width="300px"
                  height="200px">
      面板占位内容
       <template v-slot:footer>
          <el-button size="small" type="primary">确 定</el-button>
       </template>
    </sp-map-panel>
    <sp-map-panel title="标题文本" 
                  icon="el-icon-setting"
                  placement="right-center"
                  footer-align="right"
                  theme="dark"
                  width="300px"
                  height="200px">
      面板占位内容
       <template v-slot:footer>
          <el-button size="small" type="primary">确 定</el-button>
       </template>
    </sp-map-panel>
  </sp-map>
</template>
```
:::

## 定义工具栏
:::demo
```html
<template>
  <sp-map>  
    <sp-map-panel title="标题文本" 
                  icon="el-icon-setting"
                  placement="center-center"
                  width="300px"
                  height="200px">
        <template v-slot:toolbar>
            <el-button-group>
              <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
              <el-button size="mini" type="primary" icon="el-icon-share"></el-button>
              <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
            </el-button-group>
        </template>    
      面板占位内容
    </sp-map-panel>
  </sp-map>
</template>
```
:::