
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M227.29145377 674.2347837h-103.08412884v-128.85516106l-103.08412879-19.02147613V941.51720338l103.08412879-33.37962267V764.92427318h166.89811331l88.35782472-119.28306331-117.81043294-62.09591571-34.36137625 90.68948954z m535.05571621 23.80752498L1002.87680386 550.04295228 256.74406198 82.48279662h-88.35782468l-117.81043297 176.5929302v62.09591567l657.77491721 381.77943421 53.99644844-4.90876802z m-88.3578247 33.37962267L109.48102082 378.35879013l-58.90521649 62.09591571 657.77491721 381.7794342h58.90521648l29.45260821-28.71629301 29.45260826-85.90344068-88.3578247 62.09591566c-39.3928635-28.71629305-63.8139845-38.28839071-63.81398451-38.28839066z m0 0"/>
    </svg>
  )
}

Vue.component('icon-video-camera', Icon)
export default Icon
