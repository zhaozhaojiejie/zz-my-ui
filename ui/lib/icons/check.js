
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M927.8 767.2v-58.7c0-91.4-74.7-165.6-166.5-165.6s-166.5 74.2-166.5 165.6v113.8c0 57-46.7 103.5-104.1 103.5-57.4 0-104.1-46.5-104.1-103.5v-144c35-10.8 50.5-55.5 57.3-89.9C627.4 547.6 678 311.2 678 180.8c0-108-100.8-135.5-180.4-142.6-11.5-14-28.9-23-48.5-23-34.5 0-62.5 27.8-62.5 62.1 0 34.2 28 62.1 62.5 62.1 17.2 0 32.7-6.9 44-18.1 101.7 9.2 101.7 41.1 101.7 59.5 0 82.8-30.3 284.6-160.8 324.2-12.2-13.6-30.1-20.7-47.4-20.7h-83.3c-17.3 0-35.2 7.1-47.4 20.7C125.4 465.3 95.1 263.6 95.1 180.8c0-18.5 0-50.3 101.7-59.5 11.3 11.2 26.9 18.1 44 18.1 34.5 0 62.5-27.8 62.5-62.1 0-34.2-28-62.1-62.5-62.1-19.6 0-37.1 9-48.5 23-79.6 7-180.5 34.5-180.5 142.6 0 130.4 50.6 366.9 234.2 407.7 6.8 34.4 22.3 79 57.3 89.9v143.9c0 102.8 84.1 186.3 187.4 186.3 99.8 0 180.8-78.1 186.3-175.9h1V708.4c0-45.7 37.4-82.9 83.3-82.9s83.3 37.1 83.3 82.9v58.8c-48.5 17.1-83.3 63.1-83.3 117.1 0 68.5 56 124.2 124.9 124.2s124.9-55.7 124.9-124.2c0-54-34.8-100-83.3-117.1z m-41.6 158.5c-23 0-41.6-18.6-41.6-41.4 0-22.8 18.6-41.4 41.6-41.4s41.6 18.6 41.6 41.4c0 22.8-18.6 41.4-41.6 41.4zM386.6 484.2z"/>
    </svg>
  )
}

Vue.component('icon-check', Icon)
export default Icon

