
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M658.02666667 512c0 8.74666667-3.2 16.42666667-9.6 22.82666667l-227.2 227.2c-6.4 6.4-14.08 9.6-22.82666667 9.6s-16.42666667-3.2-22.82666667-9.6-9.6-14.08-9.6-22.82666667V284.8c0-8.74666667 3.2-16.42666667 9.6-22.82666667s13.97333333-9.6 22.82666667-9.6c8.74666667 0 16.42666667 3.2 22.82666667 9.6l227.2 227.2c6.4 6.50666667 9.6 14.08 9.6 22.82666667z"/>
    </svg>
  )
}

Vue.component('icon-insert-right', Icon)
export default Icon

