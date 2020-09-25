
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M778.3 646.4L830 946.9c4.1 26.4-5.4 42.1-24 42.1-6.6 0-15-2.4-24-7.3L512 839.9 242.1 981.7c-9 4.8-17.5 7.3-24 7.3-18.6 0-28.3-15.6-24-42.1l51.6-300.5L27 433.5C1.2 407.7 9.5 382.3 45.6 377l301.6-43.8L482.5 59.8c7.9-16.1 18.6-24.6 29.5-24.6 10.9 0 21 8.5 29.5 24.6l135.3 273.4L978.5 377c36 5.4 44.5 30.6 18.1 56.5L778.3 646.4z m101-205.7l-214-31.3-39.8-6.1-18.1-36L512 173.8v578.9l35.5 18.6 191.1 101-36-213.4-7.3-39.8 29.5-28.3 154.5-150.1z"/>
    </svg>
  )
}

Vue.component('icon-star-half', Icon)
export default Icon

