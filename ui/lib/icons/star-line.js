
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1012 404.8c0 8.9-5.1 18.5-15.6 28.9L778.1 646.3l51.8 300.5c0.4 2.8 0.6 6.9 0.6 12 0 20-8.2 30.1-24.6 30.1-7.6 0-15.6-2.4-24-7.3L512 839.8 242.1 981.6c-8.9 4.8-16.7 7.3-24 7.3-8.5 0-14.6-2.9-19-8.8-4.1-5.9-6.4-12.9-6.4-21.4 0-2.4 0.4-6.5 1.3-12l51.8-300.4L27 433.5c-10-10.9-15-20.5-15-28.9 0-14.7 11.3-24 33.6-27.6l301.8-43.9L482.6 59.7c7.6-16.4 17.5-24.6 29.5-24.6s21.9 8.3 29.5 24.6l135.3 273.4L978.4 377c22.4 3.6 33.6 12.9 33.6 27.8zM695.3 619.3l183.9-178.5-253.5-37.3L512 173.9 398.4 403.4l-253.5 37.4 183.9 178.6-43.9 252.9L512 752.6l226.6 119.6-43.3-252.9z"/>
    </svg>
  )
}

Vue.component('icon-star-line', Icon)
export default Icon

