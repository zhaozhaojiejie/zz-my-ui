
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M657.3 867c0-65.4-46.8-121.5-107.5-135.5V292.3c60.8-14 107.5-70.1 107.5-135.5 0-84.1-60.8-144.9-144.9-144.9S367.5 72.7 367.5 156.8c0 65.4 46.8 121.5 107.5 135.5v439.2c-60.8 14-107.5 70.1-107.5 135.5 0 84.1 60.8 144.9 144.9 144.9 79.6-4.7 140.4-65.5 144.9-144.9zM512.5 226.8c-37.4 0-70.1-32.8-70.1-70.1s32.8-70.1 70.1-70.1 70.1 32.8 70.1 70.1c0 37.5-28 65.5-70.1 70.1z m-4.6 715c-37.4 0-70.1-32.8-70.1-70.1 0-37.4 32.8-70.1 70.1-70.1s70.1 32.8 70.1 70.1-28 65.3-70.1 70.1z"/>
    </svg>
  )
}

Vue.component('icon-map-link', Icon)
export default Icon

