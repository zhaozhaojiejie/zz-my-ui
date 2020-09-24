
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M376.5 878.6c0.1 73.9 59.8 133.4 133.3 133.4 74.1 0 133.2-59.7 133.3-133.4H376.5z m488.9-133.3c-44.5 0-44.5-176.5-44.5-176.5V445.2c0-15.7-1-31.2-2.8-46.4L360.7 834.2h504.7c24.7 0 44.4-19.9 44.4-44.4 0-24.7-19.9-44.5-44.4-44.5zM917.8 207.2L154.6 933.7c-6.7 6.4-15.4 9.6-24.1 9.6-9.3 0-18.5-3.6-25.4-10.9-13.4-14-12.8-36.2 1.2-49.6l51.1-48.6h-3.1c-23.4 0-42.5-17.9-44.3-40.9 0-1.1-0.1-2.3-0.1-3.5s0-2.3 0.1-3.5c1.7-22.9 20.8-40.9 45.4-40.9 43.3-1.6 43.3-177.8 43.3-177.8V445.2c0-155.4 100.7-286.8 223.4-329.6-0.8-4.8-1.2-9.7-1.2-14.7 0-49.1 39.9-88.9 88.9-88.9 49.1 0 88.9 39.9 88.9 88.9 0 5-0.4 9.9-1.2 14.6 70.3 23.2 130.1 72.6 170.1 137.8l101.8-96.9c14-13.4 36.2-12.8 49.6 1.2s12.8 36.2-1.2 49.6z"/>
    </svg>
  )
}

Vue.component('icon-bell-off', Icon)
export default Icon
