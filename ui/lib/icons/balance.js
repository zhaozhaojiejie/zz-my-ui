
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M511.87728081 231.46390658c-58.04618206 0-105.04763604-46.87873477-105.04763603-105.04763603 0-58.04618206 46.87873477-105.04763604 105.04763603-105.04763602 58.16890127 0 105.04763604 46.87873477 105.04763603 105.04763602 0 58.04618206-47.00145397 105.04763604-105.04763603 105.04763603z m490.01776946 420.06782491c0 77.68125422-62.3413541 140.02260831-140.02260832 140.02260833h-69.94994455C714.24124321 791.4316206 651.89988911 729.21298572 651.89988911 651.53173149l140.02260829-280.04521659h-69.94994453c-38.53382911 0-69.94994455-31.53883463-69.94994456-69.94994457h-69.94994455v560.09043324c29.45260821 0 69.94994455 31.53883463 69.94994455 70.07266374h69.94994456c29.45260821 0 69.94994455 31.53883463 69.94994453 69.94994454H231.83206419c0-38.53382911 40.62005553-69.94994455 69.94994456-69.94994454h69.94994457c0-38.53382911 40.62005553-70.07266376 69.9499445-70.07266374h2.08622644l-2.08622644-560.09043324h-69.9499445c0 38.53382911-31.53883463 69.94994455-69.94994457 69.94994457h-69.94994456l140.02260832 280.04521659c0 77.68125422-62.3413541 140.02260831-140.02260832 140.02260833h-70.07266376c-77.68125422 0-140.02260831-62.3413541-140.02260829-140.02260833l140.02260829-280.04521659h-69.94994453v-69.94994457h209.97255285c0-38.53382911 31.53883463-69.94994455 69.94994457-69.94994454H651.89988911c38.53382911 0 69.94994455 31.53883463 69.94994453 69.94994454h209.97255286v69.94994457H861.74972274l140.14532753 280.04521659z m-805.03795837-210.09527204l-105.047636 209.97255284h209.97255285l-104.92491685-209.97255284z m735.08801381 210.09527204l-105.04763604-209.97255284L721.84983364 651.53173149h210.09527207z m0 0"/>
    </svg>
  )
}

Vue.component('icon-balance', Icon)
export default Icon

