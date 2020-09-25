
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M918.6,642.7c-6.2,6.3-6.2,16.4,0,22.6l63.7,63.7c12.5,12.5,12.5,32.8,0,45.3c-12.5,12.5-32.8,12.5-45.3,0l-67.4-67.4  c-5.7-5.7-14.9-6.3-21.2-1.2c-22.1,17.5-46.2,34.4-72.1,49.9c-6.8,4.1-9.5,12.5-6.5,19.8c11.6,28.1,38.2,92.1,38.2,92.1  c6.8,16.3-1,35-17.3,41.8c-16.3,6.8-35-1-41.8-17.3l-35.7-86.2c-3.3-8.1-12.6-12-20.7-8.7c-41.3,16.3-86.1,28-134,32.7  c-8.2,0.8-14.5,7.7-14.5,15.9c0,30.5,0,97.7,0,97.7c0,17.4-13.7,32.2-31.1,32.7c-18.1,0.5-32.9-14-32.9-32c0,0,0-67.7,0-98.3  c0-8.3-6.3-15.1-14.5-15.9c-44.7-4.4-86.6-14.9-125.6-29.5c-8.1-3-17.1,0.8-20.5,8.8L285.1,892c-6.8,16.3-25.5,24.1-41.8,17.3  c-16.3-6.8-24.1-25.5-17.3-41.8l36.2-87.4c3.1-7.4,0.2-15.9-6.7-19.9c-28.9-16.7-55.6-35.3-79.9-54.5c-6.4-5-15.5-4.5-21.2,1.2  L87,774.2c-12.5,12.5-32.8,12.5-45.3,0c-12.5-12.5-12.5-32.8,0-45.3l63.7-63.7c6.2-6.2,6.2-16.3,0-22.6  c-50-50.5-83.2-96.9-97.5-118.3c-3.5-5.3,0.3-12.4,6.7-12.4h31.4c19.4,0,37.8,8.9,49.9,24c21.1,26.3,49.9,58.8,85.7,91  c46.2,41.6,94.9,74.6,144.6,98.1C386.8,753.6,449.2,768,512,768s125.2-14.4,185.7-42.9c49.7-23.4,98.4-56.4,144.6-98.1  c35.7-32.2,64.6-64.7,85.7-91c12.2-15.1,30.5-24,49.9-24h31.4c6.4,0,10.2,7.1,6.7,12.4C1001.7,545.8,968.5,592.3,918.6,642.7z"/>
    </svg>
  )
}

Vue.component('icon-go-hide', Icon)
export default Icon

