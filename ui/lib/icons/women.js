
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M609.9 34.7c-221.7 0-402.1 179.1-402.1 399.2 0 78.7 23.1 152.2 62.8 214.1L207 711.2l-100.6-99.9-85 84.4L122 795.6 12 904.9l85 84.4L207.1 880l95 94.4 85-84.4-95-94.4 57.8-57.4c70.2 59.2 161 95 260 95 221.7 0 402.1-179.1 402.1-399.2 0-220.2-180.3-399.3-402.1-399.3z m0 679.1c-155.4 0-281.8-125.5-281.8-279.9 0-154.3 126.5-279.9 281.8-279.9 155.4 0 281.9 125.5 281.8 279.9 0.1 154.4-126.3 279.9-281.8 279.9z m0 0"/>
    </svg>
  )
}

Vue.component('icon-women', Icon)
export default Icon

