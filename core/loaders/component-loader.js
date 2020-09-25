/**
 * ElementUI 组件自动注册 webpack loader
 * @author chenhuachun
 *
 * @description
 *
 * 在 webpack 加载 *.vue 文件的时候，检测文件收集template块使用到的element-ui组件，注入全局注册成Vue组件的的的代码
 *
 * @example
 *
 *     config.module.rule('vue')
 *                 .use('el-loader')
 *                 .loader(utils.resolve('.sp/core/loaders/el-loader.js'))
 *
 */

const compiler = require('vue-template-compiler')
const utils = require('../utils')
const elTagRegex = /<el-[\w-]+/g
const spTagRegex = /<sp-[\w-]+/g

/**
 * 注入 依赖ElementUI组件的代码
 * @param {string|NULL} code 原本的js代码
 * @param {array} elTags 模板里包含的element-ui组件
 * @param {array} spTags 模板里包含的sp组件
 * @param {string}  theme 主题名称
 * @return {string} 注入后的代码
 */
function injectCode(code = null, elTags = [], spTags = [], theme) {
  // 不同组件加载css的顺序不一致，mini-css-extract-plugin 会发出警告，需要做统一排序
  elTags.sort()
  spTags.sort()
  const elImport = elTags.length
    ? `import {${elTags.map(t => t + ' as __' + t + '__').join(',')}} from 'element-ui';`
    : '';
  
  const elUse = elTags.length
    ? `${elTags.map(t => '__vue__.use(__' + t + '__)').join(';\n')}`
    : '';
  
  const spCharts = spTags.filter(tag => tag.includes('spChart'))
  const spMaps = spTags.filter(tag => tag.includes('spMap'))
  const spGos = spTags.filter(tag => tag.includes('spGo'))
  const spComponents = spTags.filter(tag => !spCharts.includes(tag) && !spMaps.includes(tag) && !spGos.includes(tag))
  
  const spComponentsImport = spComponents.length
    ? `import {${spComponents.map(t => t + ' as __' + t + '__').join(',')}} from '$ui';`
    : '';
  const spChartsImport = spCharts.length
    ? `import {${spCharts.map(t => t + ' as __' + t + '__').join(',')}} from '$ui/charts';`
    : '';
  
  const spMapsImport = spMaps.length
    ? `import {${spMaps.map(t => t + ' as __' + t + '__').join(',')}} from '$ui/map';`
    : '';
  
  const spGosImport = spGos.length
    ? `import {${spGos.map(t => t + ' as __' + t + '__').join(',')}} from '$ui/go';`
    : '';

  const spUse = spTags.length
    ? `${spTags.map(t => '__vue__.use(__' + t + '__)').join(';\n')}`
    : '';
  
  return `
     import __vue__ from 'vue';
     ${elImport}
     ${spComponentsImport}
     ${spChartsImport}
     ${spMapsImport}
     ${spGosImport}
     ${code || 'export default {};'}
     ${elUse}
     ${spUse}
    `
}

/**
 * 替换script内容
 * @param {string} source vue文件的源码
 * @param {number} start script块内容在源码的开始索引
 * @param {number} end script块内容在源码的结束索引
 * @param {string} content 需要替换的内容
 * @return {string} 替换后的源码
 */
function replaceScript(source, start, end, content) {
  const left = source.substring(0, start)
  const right = source.substring(end, source.length)
  return `
  ${left}
  ${content}
  ${right}
  `
}

module.exports = function (source) {
  const theme = process.env.THEME || 'default'
  
  // 利用 vue-template-compiler 解析vue文件内容
  const vue = compiler.parseComponent(source)
  
  // 没有模板，不处理
  if (!vue.template || !vue.template.content) return source
  
  let elTags = vue.template.content.match(elTagRegex) || []
  
  let spTags = vue.template.content.match(spTagRegex) || []
  
  // 没有 sp 和 el 组件，不需要处理
  if (elTags.length === 0 && spTags.length === 0) {
    return source
  }
  
  if (elTags.length) {
    // 匹配到element-ui组件名称去掉el-前缀，并转换成大写开头的驼峰式
    elTags = elTags.map(item => item.replace('<el-', ''))
    // 去重 并 转换成大小开头的驼峰
    elTags = [...new Set(elTags)].map(tag => utils.upperFirst(utils.camelCase(tag)))
  }
  
  if (spTags.length) {
    // 匹配到sp组件名称去掉<符号，并转换成大写开头的驼峰式
    spTags = spTags.map(item => item.replace('<', ''))
    // 去重 并 转换成大小开头的驼峰
    spTags = [...new Set(spTags)].map(tag => utils.upperFirst(utils.camelCase(tag)))
  }
  
  
  // 源码有script块，注入的代码替换script的内容
  if (vue.script) {
    const code = source.substring(vue.script.start, vue.script.end).trim()
    const scriptContent = injectCode(code, elTags, spTags, theme)
    return replaceScript(source, vue.script.start, vue.script.end, scriptContent)
  } else {
    // 源码没有script块，追加注入内容
    return `
     ${source}
     <script>
     ${injectCode(null, elTags, spTags, theme)}
     </script>
     `
  }
}
