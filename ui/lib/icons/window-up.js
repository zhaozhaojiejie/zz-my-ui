
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M349.9 571.9l148-148c3.9-3.9 9-5.9 14.1-5.9s10.2 2 14.1 5.9l148 148c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0L512 466.3 378.1 600.1c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.4 0.1-28.2z"/>
    </svg>
  )
}

Vue.component('icon-window-up', Icon)
export default Icon

