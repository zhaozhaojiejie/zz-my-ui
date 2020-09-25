
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 12C235.9 12 12 235.9 12 512s223.8 500 500 500c276.1 0 500-223.9 500-500S788.1 12 512 12z m0 930C274.5 942 82 749.5 82 512S274.5 82 512 82s430 192.5 430 430-192.5 430-430 430z"/><path d="M774.1 292v440L588.8 573.3V732L349.9 527.4v204.7h-100v-440h100v204.5L588.8 292v158.7z"/>
    </svg>
  )
}

Vue.component('icon-prev-step', Icon)
export default Icon

