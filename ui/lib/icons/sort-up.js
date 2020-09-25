
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M839.3 655.2c0 11.1-4 20.7-12.1 28.8-8.1 8.1-17.7 12.1-28.8 12.1H225.6c-11.1 0-20.7-4-28.8-12.1-8.1-8.1-12.1-17.6-12.1-28.8 0-11.1 4.1-20.7 12.1-28.8L483.2 340c8.1-8.1 17.6-12.1 28.8-12.1 11.1 0 20.7 4 28.8 12.1l286.4 286.4c8.1 8.1 12.1 17.6 12.1 28.8z"/>
    </svg>
  )
}

Vue.component('icon-sort-up', Icon)
export default Icon

