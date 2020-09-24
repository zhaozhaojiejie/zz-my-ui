
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M919.438 569.344v-29.013c2.276-132.551-36.636-244.054-113.322-323.13-36.637-37.773-80.783-66.218-131.983-86.015C665.941 59.733 589.255 3.3 495.73 3.3c-93.526 0-170.894 56.32-178.404 127.886-51.2 19.797-95.346 48.242-131.982 86.016-76.686 79.075-115.712 190.009-113.323 322.56v35.498c-19.797 20.367-35.498 50.518-23.78 93.526 8.762 31.971 31.972 55.182 60.417 65.65 14.563 9.33 31.402 14.563 49.948 14.563 36.637 160.427 168.505 269.653 341.22 269.653 172.6 0 304.583-109.226 341.22-270.222 1.137 0 2.275 0.57 3.526 0.57 22.642 0 43.577-8.193 60.416-21.505 21.504-12.174 38.344-33.11 45.284-59.278 12.174-46.649-8.192-78.62-30.834-98.873zM818.29 657.067c0 21.504-1.707 41.87-4.665 61.553-56.32 90.681-149.39 149.96-264.989 162.703-8.76-11.606-26.168-19.229-46.535-19.229-29.013 0-52.337 15.702-52.337 35.499 0 19.228 23.21 35.499 52.337 35.499 26.17 0 47.104-12.744 51.77-29.696 37.205-4.096 72.703-13.312 106.381-26.738 47.673-19.229 89.544-47.673 124.928-83.74 5.803-5.803 11.037-11.606 16.27-17.978-41.87 128.57-154.054 211.058-299.918 211.058h-1.137c-187.734 0-318.464-135.395-318.464-328.931l-0.57-18.546c0-8.192 1.139-30.265 2.276-51.2 77.938-28.445 148.253-137.216 176.697-187.165 26.17 35.5 86.016 103.993 177.835 139.492 34.247 13.312 69.177 20.366 103.424 27.876 68.039 14.563 132.551 28.444 176.128 85.447l1.707 1.706-1.138 2.39z m0 0"/>
    </svg>
  )
}

Vue.component('icon-fuwupingjia-kefu', Icon)
export default Icon

