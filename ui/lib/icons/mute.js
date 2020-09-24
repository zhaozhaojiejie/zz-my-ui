
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M487.7 869L202.2 678.7H11.9V345.6h190.4l285.5-190.3V869zM616.7 681.5c-9 0-17.9-3.4-24.7-10.3-13.7-13.7-13.7-35.8 0-49.5l269-269c13.7-13.7 35.8-13.7 49.5 0 13.7 13.7 13.7 35.8 0 49.5l-269 269c-6.9 6.9-15.9 10.3-24.8 10.3z"/><path d="M885.7 681.5c-9 0-17.9-3.4-24.7-10.3l-269-269c-13.7-13.7-13.7-35.8 0-49.5 13.7-13.7 35.8-13.7 49.5 0l269 269c13.7 13.7 13.7 35.8 0 49.5-6.9 6.9-15.9 10.3-24.8 10.3z"/>
    </svg>
  )
}

Vue.component('icon-mute', Icon)
export default Icon

