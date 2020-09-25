
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1012 512.1c0 12.6-3.8 25.5-11.1 38.5-52.1 85.6-122.1 154.1-210.1 205.6S609.9 833.5 512 833.5s-190.8-25.9-278.8-77.6c-88-51.8-158-120.1-210.1-205.4-7.3-13-11.1-25.9-11.1-38.5s3.8-25.5 11.1-38.5c52.1-85.3 122.1-153.6 210.1-205.4s180.9-77.6 278.8-77.6 190.8 25.9 278.8 77.6 158 120.1 210.1 205.4c7.4 13.1 11.1 26 11.1 38.6z m-71.4 0C884 424.4 813.1 358.6 728 315c22.6 38.8 34 80.5 34 125.6 0 68.8-24.4 127.8-73.4 176.6-49 49-107.8 73.4-176.6 73.4s-127.8-24.4-176.6-73.4c-49-48.9-73.4-107.7-73.4-176.6 0-45 11.4-86.9 34-125.6-85.3 43.5-156.1 109.1-212.6 197 49.5 76.3 111.5 137 186.1 182.1C344 739.4 424.9 762 512 762s167.9-22.6 242.5-67.9c74.5-45 136.6-105.7 186.1-182zM531 316.8c5.1-5.1 7.9-11.5 7.9-19 0-7.4-2.6-13.8-7.9-19-5.1-5.1-11.5-7.9-19-7.9-46.5 0-86.4 16.6-119.8 50s-50 73.3-50 119.8c0 7.4 2.6 13.8 7.9 19 5.1 5.1 11.5 7.9 19 7.9 7.4 0 13.8-2.6 19-7.9 5.1-5.1 7.9-11.5 7.9-19 0-32 11.4-59.4 34-82s50-34 82-34c7.4-0.2 13.8-2.7 19-7.9z"/>
    </svg>
  )
}

Vue.component('icon-visible', Icon)
export default Icon

