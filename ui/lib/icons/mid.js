
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M515.9 558.1v248.8c0 27.6-22.4 50-50 50s-50-22.4-50-50v-114L124.4 984.4A59.914 59.914 0 0 1 82 1002c-15.4 0-30.7-5.8-42.4-17.6-23.4-23.4-23.4-61.4 0-84.8L331 608.1H217c-27.6 0-50-22.4-50-50s22.4-50 50-50h248.8c27.7 0 50.1 22.4 50.1 50zM12 345.3V12h333.3v70H82v263.3zM807.3 515.9H558.5c-27.6 0-50-22.4-50-50V217.1c0-27.6 22.4-50 50-50s50 22.4 50 50v114L900 39.6c23.4-23.4 61.4-23.4 84.9 0 23.4 23.4 23.4 61.4 0 84.8L693.3 415.9h113.9c27.6 0 50 22.4 50 50 0.1 27.6-22.3 50-49.9 50zM1012 942v70H678.7v-70H942V678.7h70V942z"/>
    </svg>
  )
}

Vue.component('icon-mid', Icon)
export default Icon

