
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M771.62666667 625.6c0 8.74666667-3.2 16.42666667-9.6 22.82666667s-14.08 9.6-22.82666667 9.6H284.8c-8.74666667 0-16.42666667-3.2-22.82666667-9.6s-9.6-14.08-9.6-22.82666667 3.2-16.42666667 9.6-22.82666667l227.2-227.2c6.4-6.4 13.97333333-9.6 22.82666667-9.6 8.74666667 0 16.42666667 3.2 22.82666667 9.6l227.2 227.2c6.4 6.4 9.6 14.08 9.6 22.82666667z"/>
    </svg>
  )
}

Vue.component('icon-insert-top', Icon)
export default Icon

