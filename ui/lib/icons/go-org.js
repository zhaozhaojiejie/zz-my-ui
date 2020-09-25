
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M928,701L928,701c-8.8,0-16-7.2-16-16v-77c0-53-43-96-96-96H560c-8.8,0-16-7.2-16-16v-96c0-8.8,7.2-16,16-16h48  c53,0,96-43,96-96V96c0-53-43-96-96-96H416c-53,0-96,43-96,96v192c0,53,43,96,96,96h48c8.8,0,16,7.2,16,16v96c0,8.8-7.2,16-16,16  H208c-53,0-96,43-96,96v77c0,8.8-7.2,16-16,16h0c-53,0-96,43-96,96v131c0,53,43,96,96,96h96c53,0,96-43,96-96V797c0-53-43-96-96-96  h0c-8.8,0-16-7.2-16-16v-77c0-17.7,14.3-32,32-32h256c8.8,0,16,7.2,16,16v94c0,8.3-6.7,15-15,15h-1c-53,0-96,43-96,96v131  c0,53,43,96,96,96h96c53,0,96-43,96-96V797c0-53-43-96-96-96h-1c-8.3,0-15-6.7-15-15v-94c0-8.8,7.2-16,16-16h256  c17.7,0,32,14.3,32,32v77c0,8.8-7.2,16-16,16h0c-53,0-96,43-96,96v131c0,53,43,96,96,96h96c53,0,96-43,96-96V797  C1024,744,981,701,928,701z M192,765c17.6,0,32,14.4,32,32v131c0,17.6-14.4,32-32,32H96c-17.6,0-32-14.4-32-32V797  c0-17.6,14.4-32,32-32H192z M560,765c17.6,0,32,14.4,32,32v131c0,17.6-14.4,32-32,32h-96c-17.6,0-32-14.4-32-32V797  c0-17.6,14.4-32,32-32H560z M416,320c-17.6,0-32-14.4-32-32V96c0-17.6,14.4-32,32-32h192c17.6,0,32,14.4,32,32v192  c0,17.6-14.4,32-32,32H416z M960,928c0,17.6-14.4,32-32,32h-96c-17.6,0-32-14.4-32-32V797c0-17.6,14.4-32,32-32h96  c17.6,0,32,14.4,32,32V928z"/>
    </svg>
  )
}

Vue.component('icon-go-org', Icon)
export default Icon

