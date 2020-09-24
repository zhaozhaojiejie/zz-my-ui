
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M82 942h263.3v70H12V678.7h70z"/><path d="M760.9 825.1L532.6 596.9 304.3 825.2c-11.7 11.7-27 17.5-42.4 17.5-15.4 0-30.7-5.9-42.4-17.6-23.4-23.4-23.4-61.4 0-84.9L447.7 512 219.5 283.8c-23.4-23.4-23.4-61.4 0-84.9 23.4-23.4 61.4-23.4 84.9 0l228.2 228.2 228.3-228.3c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.9L617.5 512l228.3 228.3c23.4 23.4 23.4 61.4 0 84.9-11.8 11.7-27.1 17.5-42.5 17.5-15.4 0-30.7-5.9-42.4-17.6z"/><path d="M82 345.3H12V12h333.3v70H82zM942 678.7h70V1012H678.7v-70H942zM1012 12v333.3h-70V82H678.7V12z"/>
    </svg>
  )
}

Vue.component('icon-full', Icon)
export default Icon

