
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M827.2 340c8.1 8.1 12.1 17.7 12.1 28.8s-4.1 20.7-12.1 28.8L540.8 684c-8.1 8.1-17.7 12.1-28.8 12.1s-20.7-4.1-28.8-12.1L196.8 397.6c-8.1-8.1-12.1-17.6-12.1-28.8 0-11.1 4.1-20.7 12.1-28.8 8.1-8.1 17.6-12.1 28.8-12.1h572.9c11.1 0 20.7 4 28.7 12.1z"/>
    </svg>
  )
}

Vue.component('icon-sort-down', Icon)
export default Icon

