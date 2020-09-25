
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1002.87680386 818.67528323v61.35960047H21.12319614V143.84239709h61.35960048v674.83288614h920.39400724zM327.92119855 512v245.43840192H205.20199757V512h122.71920098z m184.07880145-245.43840192v490.87680384H389.28079903V266.56159808h122.71920097z m184.07880145 122.71920095v368.15760289H573.35960049V389.28079903h122.71920096z m184.07880146-184.07880146v552.11368516H757.43840192V205.20199757h122.71920099z"/>
    </svg>
  )
}

Vue.component('icon-chart-bar', Icon)
export default Icon

