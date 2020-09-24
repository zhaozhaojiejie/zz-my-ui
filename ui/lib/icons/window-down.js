
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M674.1 452.1l-148 148c-3.9 3.9-9 5.9-14.1 5.9s-10.2-2-14.1-5.9l-148-148c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0L512 557.7l133.9-133.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5-0.1 28.3z"/>
    </svg>
  )
}

Vue.component('icon-window-down', Icon)
export default Icon

