
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M866.05463441 367.01213386c-65.20090627 0-121.1764453 46.62550466-135.13916327 107.21372732H292.95986174c-13.96271799-60.58822263-69.93825701-107.21372732-135.13916326-107.21372732-83.90097498 0-144.48919762 60.58822263-144.48919764 144.48919763 0 83.90097498 60.58822263 144.48919762 144.48919764 144.48919761 65.20090627 0 121.1764453-46.62550466 135.13916326-107.21372728h437.9556094c13.96271799 60.58822263 69.93825701 107.21372732 135.13916327 107.21372728 83.90097498 0 144.48919762-60.58822263 144.48919764-144.48919761-4.73735075-79.28829138-65.32557339-139.87651403-144.48919764-144.48919763zM227.63428836 511.50133149c0 37.27547033-32.66278669 69.93825701-69.93825702 69.93825702-37.27547033 0-69.93825701-32.66278669-69.938257-69.93825702 0-37.27547033 32.66278669-69.93825701 69.938257-69.93825699 37.40013745 0 65.32557339 27.92543595 69.93825702 69.93825699z m712.97128667 4.61268365c0 37.27547033-32.66278669 69.93825701-69.93825699 69.93825699-37.27547033 0-69.93825701-32.66278669-69.938257-69.93825699 0-37.27547033 32.66278669-69.93825701 69.938257-69.93825706 37.27547033 0 65.20090627 27.92543595 69.93825699 69.93825706z m0 0"/>
    </svg>
  )
}

Vue.component('icon-map-connect', Icon)
export default Icon
