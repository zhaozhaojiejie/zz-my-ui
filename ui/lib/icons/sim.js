
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M284.8 141h642c46 0 83.9 42.4 83.9 94.1v553.7c0 51.4-37.9 93.9-83.9 93.9H95.6c-46 0-83.7-42.5-83.7-93.9V344.9L284.8 141z m251.7 149.6c-23.9 0-43.7 21.7-43.7 48.7v70h95.7V290.6h-52z m85.8 0v464.5h140.8V290.6H622.3z m174.6 0v118.7h96.6v-70c0-27-19.6-48.7-43.5-48.7h-53.1z m96.6 156.5h-96.6v121.4h96.6V447.1z m0 159.2h-96.6v148.8h53c23.9 0 43.5-22.1 43.5-48.9v-99.9z m-305 148.8V606.3h-95.7v100c0 26.8 19.8 48.9 43.7 48.9h52z m-95.8-186.6h95.7V447.1h-95.7v121.4z m0 0"/>
    </svg>
  )
}

Vue.component('icon-sim', Icon)
export default Icon

