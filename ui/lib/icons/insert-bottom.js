
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M762.02666667 375.57333333c6.4 6.4 9.6 14.08 9.6 22.82666667s-3.2 16.42666667-9.6 22.82666667l-227.2 227.2c-6.4 6.4-14.08 9.6-22.82666667 9.6s-16.42666667-3.2-22.82666667-9.6l-227.2-227.2c-6.4-6.4-9.6-13.97333333-9.6-22.82666667 0-8.74666667 3.2-16.42666667 9.6-22.82666667s13.97333333-9.6 22.82666667-9.6h454.4c8.85333333-0.10666667 16.42666667 3.09333333 22.82666667 9.6z"/>
    </svg>
  )
}

Vue.component('icon-insert-bottom', Icon)
export default Icon

