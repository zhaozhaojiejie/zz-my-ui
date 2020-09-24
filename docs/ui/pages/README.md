# 页面模板

我们预设了一系列常见页面，可以通过命令下载安装到当前项目，实现快速项目开发。

## 安装命令

```sh 
npm run page [页面模板名称] [安装位置] [子应用名称]
```

- 页面模板名称: 是页面模板的标识，在示例中查看
- 安装位置： 是指相对`views`目录的文件路径（不需要包含.vue）
- 子应用名称: 可选参数，默认是主应用

如：
```sh 
npm run page layout-01 _layout
```