
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 435.6c-40.8 0-76.5 33.1-76.5 76.4 0 40.7 33.1 76.4 76.5 76.4 43.3 0 76.5-33.1 76.5-76.4 0-40.7-33.2-76.4-76.5-76.4z m0 0"/><path d="M512 12.9C236.6 12.9 12.2 237 12.2 512s224.4 499.1 499.8 499.1S1011.8 787 1011.8 512C1014.3 237 789.9 12.9 512 12.9z m254.3 285.8l-49.6 227c-18.8 86-84.5 154-169.8 175.7l-248.6 63.2c-24 6.1-46-15.2-40.7-39.3l49.6-227.2c18.8-86 84.6-154 169.9-175.7l248.5-63.1c24-6 46 15.2 40.7 39.4z"/>
    </svg>
  )
}

Vue.component('icon-compass', Icon)
export default Icon

