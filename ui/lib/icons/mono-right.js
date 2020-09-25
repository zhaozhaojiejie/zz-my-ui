
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M802.12759839 512c0 8.59482045-3.35407632 16.35112194-10.0622288 22.84964466L327.52580449 999.38920973c-6.70815259 6.70815259-14.25482422 10.06222886-22.84964469 10.06222883s-16.35112194-3.35407632-22.84964469-10.06222883l-49.8918847-49.89188476c-6.70815259-6.70815259-10.06222886-14.25482422-10.0622288-22.84964459 0-8.59482045 3.35407632-16.35112194 10.0622288-22.84964466L623.73266618 512 231.93463041 120.20196428c-6.70815259-6.70815259-10.06222886-14.25482422-10.0622288-22.84964466s3.35407632-16.35112194 10.0622288-22.84964459l49.8918847-49.89188476c6.70815259-6.70815259 14.25482422-10.06222886 22.84964469-10.06222883s16.35112194 3.35407632 22.84964469 10.06222883l464.5395651 464.53956507c6.70815259 6.49852281 10.06222886 14.25482422 10.0622288 22.84964466z"/>
    </svg>
  )
}

Vue.component('icon-mono-right', Icon)
export default Icon

