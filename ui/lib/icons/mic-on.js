
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M858.2 435.2v77c0 88.6-29.6 165.6-88.6 231.1-59.2 65.6-132.2 103.1-219.2 112.6v79.3h153.8c10.4 0 19.5 3.8 27.1 11.4 7.6 7.6 11.4 16.6 11.4 27.1 0 10.4-3.8 19.5-11.4 27.1-7.6 7.6-16.7 11.4-27.1 11.4H319.6c-10.4 0-19.5-3.8-27.1-11.4-7.6-7.6-11.4-16.7-11.4-27.1 0-10.4 3.8-19.5 11.4-27.1 7.6-7.6 16.6-11.4 27.1-11.4h153.8v-79.3c-87-9.6-160-47.1-219.1-112.8-59.2-65.5-88.6-142.6-88.6-231.2v-77c0-10.4 3.8-19.5 11.4-27.1 7.6-7.6 16.6-11.4 27.1-11.4 10.4 0 19.5 3.8 27.1 11.4 7.6 7.6 11.4 16.7 11.4 27.1v77c0 74.1 26.3 137.5 79 190.2s116 79.1 190.2 79.1c74.1 0 137.5-26.3 190.2-79 52.8-52.7 79.1-115.9 79.1-190.2v-77c0-10.4 3.8-19.5 11.4-27.1 7.6-7.6 16.6-11.4 27.1-11.4 10.4 0 19.5 3.8 27.1 11.4 7.6 7.8 11.4 16.8 11.4 27.3zM704.4 204.3V512c0 52.8-18.8 98.2-56.5 135.9S565 704.4 512 704.4s-98.2-18.8-135.9-56.5-56.5-82.8-56.5-135.9V204.3c0-52.8 18.8-98.2 56.5-135.9S459 12 512 12s98.2 18.8 135.9 56.5c37.5 37.6 56.5 82.9 56.5 135.8z"/>
    </svg>
  )
}

Vue.component('icon-mic-on', Icon)
export default Icon

