
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1007.4 93.9c-2.8 92.1-22.7 180.6-55.9 266.4-39.7 102.6-97.8 192.9-179.2 267.5-6.6 6.1-8.7 12.5-7.8 21.1 2.8 27.6 5.1 55.3 7.9 82.9 6.6 64.4-15.9 117.1-67.8 154.4-55.7 40.1-113.6 77.1-171 114.7-36.2 23.7-80.7 2.2-84.7-40.7-4.6-49.3-8.3-98.7-11.7-148.1-1.7-24.7-1-24.9-25-28.1-63.6-8.4-113.3-38.5-147.5-93.3-17.6-28.2-26.3-59.4-29.3-92.1-0.9-9.8-4.9-12.3-14.1-12.8-51.4-2.8-102.9-5.9-154.2-9.8-42.7-3.2-64.4-48.3-41.5-85.9 16.1-26.4 33.2-52.2 49.8-78.3 17.9-28.1 35.7-56.3 53.6-84.4 32.8-51.4 80.1-79.2 140.7-79.6 34.7-0.3 69.4 5.8 104.1 9.6 6.6 0.7 11.2-0.2 15.8-5.3 80.5-90 180.1-150.7 292.8-191.3 63.7-23 129.3-37.9 196.6-44.9 33.9-3.5 68.1-4.8 102 1.5 18.5 3.4 19.4 4.2 22.3 22.2 2.7 17.8 5 35.9 4.1 54.3zM846.7 321c1-78.7-64.2-146.3-141.6-147.6-80.4-1.3-150.1 57.1-152 148.5-1.6 76.1 67.4 145.1 144.4 145.6 82 0.6 148.2-64.4 149.2-146.5zM159.8 653.5c15.2 0.2 23.7 6.9 29.1 22.5 21.4 60.9 60.3 107.2 116.8 138.5 12.5 6.9 25.6 12.5 39.1 17.1 24.4 8.3 30 32.1 11.9 50.4-26.8 27.1-53.9 53.8-80.7 80.9-8.9 8.9-18.6 13.2-31.1 8.5-12.7-4.7-18.8-14.1-19.4-27.2-0.4-8.3-0.2-16.7-0.4-25-0.4-15.3-0.5-15.4-14.6-10.8l-90.3 30c-8.9 2.9-17.8 4.2-26.5-0.8-12.7-7.2-17.5-20.1-12.4-36 10-30.9 20.5-61.7 30.7-92.5 4.4-13.4 4.2-13.7-10.3-13.9-8.7-0.1-17.5 0-26.2-0.4-12.7-0.6-21.7-6.8-26.4-18.8-4.6-11.7-1.7-21.9 6.9-30.5 28-28.1 56-56.1 84.1-84.1 5.8-5.5 12.4-8.6 19.7-7.9z m0 0"/>
    </svg>
  )
}

Vue.component('icon-rocket', Icon)
export default Icon

