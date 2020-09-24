
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 1012c276.1 0 500-223.9 500-500S788.1 12 512 12 12 235.9 12 512s223.8 500 500 500z m0-930c237.5 0 430 192.5 430 430S749.5 942 512 942 82 749.5 82 512 274.5 82 512 82z"/><path d="M497 249v201l234.7-201v526L497 574v201L189.9 512z"/>
    </svg>
  )
}

Vue.component('icon-backward', Icon)
export default Icon

