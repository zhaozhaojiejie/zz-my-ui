
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 12C235.9 12 12 235.9 12 512s223.9 500 500 500 500-223.9 500-500S788.2 12 512 12z m0 930C274.5 942 82 749.5 82 512S274.5 82 512 82s430 192.5 430 430-192.5 430-430 430z"/><path d="M527 775V574L292.3 775V249L527 450V249l307.1 263z"/>
    </svg>
  )
}

Vue.component('icon-go', Icon)
export default Icon

