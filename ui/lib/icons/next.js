
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 12C235.9 12 12 235.9 12 512s223.9 500 500 500 500-223.9 500-500S788.1 12 512 12z m0 930C274.5 942 82 749.5 82 512S274.5 82 512 82s430 192.5 430 430-192.5 430-430 430z"/><path d="M750.3 288.9v445.3h-110V523.5L273.7 735.1V288.9l366.6 211.6V288.9z"/>
    </svg>
  )
}

Vue.component('icon-next', Icon)
export default Icon

