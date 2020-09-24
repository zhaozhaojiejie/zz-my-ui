
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M879.17584931 388.29904542C879.17584931 185.56692543 714.73211999 21.12319614 512 21.12319614S144.82415069 185.56692543 144.82415069 388.29904542c0 80.50379583 26.0164706 155.11707004 70.19538298 215.98579369L512 1002.87680386l290.59906789-389.75618227h-0.49087681c48.10592677-62.3413541 77.06765821-139.89988911 77.06765823-224.82157617zM512 216.00128726c95.23009995 0 172.78863497 77.06765821 172.78863497 172.78863499S607.23009995 561.08768039 512 561.08768039s-172.78863497-77.06765821-172.78863497-172.78863497S416.76990005 216.00128726 512 216.00128726z"/>
    </svg>
  )
}

Vue.component('icon-location', Icon)
export default Icon

