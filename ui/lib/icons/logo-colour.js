
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M353.5 354.1L89.1 618.5c-3.6 3.6-9.6 3-12.4-1.3-48-74.4-39.4-174.6 25.7-239.7l135.8-135.8c131.9-131.9 335.9-147.8 485.2-47.6 4.2 2.8 4.7 8.7 1.2 12.3 0 0-62.1 62.1-92.1 92.2-9.1 9.1-22.7 11.9-34.7 7l-1.7-0.7c-26.9-10.9-55.2-16.4-84.2-16.4s-57.4 5.5-84.2 16.4c-28 11.3-52.9 27.9-74.2 49.2z"/><path d="M893.8 513.2c0 98.3-37.5 196.5-112.5 271.5L645.5 920.5c-64.6 64.6-163.8 73.5-237.9 26.8-4.3-2.7-5-8.8-1.4-12.4l264-264c21.3-21.3 37.9-46.3 49.2-74.2 10.9-26.8 16.4-55.2 16.4-84.2s-5.5-57.4-16.4-84.2l-2.3-5.8c-4.8-11.9-2.1-25.6 7-34.7l91.3-91.3c3.5-3.5 9.4-3 12.3 1.1 44 64.9 66.1 140.3 66.1 215.6z"/><path d="M607.8 512.5c0 24.6-9.4 49.1-28.1 67.9L307.8 852.3l-1 1c-18.6 18.1-42.7 27.1-66.8 27.1-24.6 0-49.1-9.4-67.9-28.1S144 809 144 784.4c0-24.1 9-48.2 27.1-66.8 0.3-0.4 0.7-0.7 1-1.1L444 444.6c18.7-18.8 43.3-28.1 67.9-28.1s49.1 9.4 67.9 28.1c18.7 18.8 28 43.3 28 67.9z"/>
    </svg>
  )
}

Vue.component('icon-logo-colour', Icon)
export default Icon

