
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1002.87680386 818.67528323v61.35960047H21.12319614V143.84239709h61.35960048v674.83288614h920.39400724zM818.79800243 327.92119855l122.71920095 429.51720337H143.84239709V481.32019976l214.75860171-276.11820219 276.11820217 276.11820219 184.07880146-153.39900121z"/>
    </svg>
  )
}

Vue.component('icon-chart-line', Icon)
export default Icon

