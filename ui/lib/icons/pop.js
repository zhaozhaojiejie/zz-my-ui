
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1001 845.6c0 33.1-26.9 60-60 60H84c-33.1 0-60-26.9-60-60s26.9-60 60-60h857c33.1 0 60 26.9 60 60zM41.6 646.8c-23.4-23.4-23.4-61.4 0-84.8l428.5-428.5c23.4-23.4 61.4-23.4 84.9 0L983.4 562c23.4 23.4 23.4 61.4 0 84.8-11.7 11.7-27.1 17.6-42.4 17.6s-30.7-5.9-42.4-17.6L512.5 260.7l-386 386.1a59.914 59.914 0 0 1-42.4 17.6c-15.4 0-30.8-5.9-42.5-17.6z"/>
    </svg>
  )
}

Vue.component('icon-pop', Icon)
export default Icon

