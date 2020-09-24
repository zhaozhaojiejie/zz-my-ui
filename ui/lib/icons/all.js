
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M248.6 318.4H112c-27.6 0-50-22.4-50-50V112c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50v156.4c0 27.7-22.4 50-50 50zM579.9 318.4H443.3c-27.6 0-50-22.4-50-50V112c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50v156.4c0 27.7-22.4 50-50 50zM911.2 318.4H774.6c-27.6 0-50-22.4-50-50V112c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50v156.4c0 27.7-22.4 50-50 50zM248.6 639H112c-27.6 0-50-22.4-50-50V432.6c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50V589c0 27.6-22.4 50-50 50zM579.9 639H443.3c-27.6 0-50-22.4-50-50V432.6c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50V589c0 27.6-22.4 50-50 50zM911.2 639H774.6c-27.6 0-50-22.4-50-50V432.6c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50V589c0 27.6-22.4 50-50 50zM248.6 959.6H112c-27.6 0-50-22.4-50-50V753.1c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50v156.4c0 27.7-22.4 50.1-50 50.1zM579.9 959.6H443.3c-27.6 0-50-22.4-50-50V753.1c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50v156.4c0 27.7-22.4 50.1-50 50.1zM911.2 959.6H774.6c-27.6 0-50-22.4-50-50V753.1c0-27.6 22.4-50 50-50h136.6c27.6 0 50 22.4 50 50v156.4c0 27.7-22.4 50.1-50 50.1z"/>
    </svg>
  )
}

Vue.component('icon-all', Icon)
export default Icon

