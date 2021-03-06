
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M678 512.9c0-46.5-16.9-88.5-47.6-118.7V278.4c87.9 44.5 143.2 134.9 142.7 233.4 0.4 98.5-54.8 188.9-142.7 233.4V631.7c30.8-30.5 47.6-72.2 47.6-118.8zM487.7 869L202.2 678.7H11.9V345.6h190.4l285.5-190.3V869zM677 40.7c194.4 68.3 334.1 252.9 334.1 470.9 0 219.5-141.5 405.5-338 472.8-13.9 4.9-28.2 9.1-42.7 12.4V901c170.5-52.6 286.4-210.6 285.5-389.1 0-183.4-119-338.2-285.5-388.9V26.8c15.8 3.9 31.7 8.5 46.6 13.9z m0 0"/>
    </svg>
  )
}

Vue.component('icon-sound-max', Icon)
export default Icon

