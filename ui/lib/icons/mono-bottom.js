
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1009.45143856 304.6761598c0 8.59482045-3.35407632 16.35112194-10.06222883 22.84964469L534.84964466 792.06536959c-6.70815259 6.70815259-14.25482422 10.06222886-22.84964466 10.0622288-8.59482045 0-16.35112194-3.35407632-22.84964466-10.0622288L24.61079027 327.52580449c-6.70815259-6.70815259-10.06222886-14.25482422-10.06222883-22.84964469s3.35407632-16.35112194 10.06222883-22.84964469l49.89188476-49.8918847c6.70815259-6.70815259 14.25482422-10.06222886 22.84964459-10.0622288s16.35112194 3.35407632 22.84964466 10.0622288L512 623.52303635l391.79803572-391.58840594c6.70815259-6.70815259 14.25482422-10.06222886 22.84964466-10.0622288 8.59482045 0 16.35112194 3.35407632 22.84964459 10.0622288l49.89188476 49.8918847c6.70815259 6.49852281 10.06222886 14.25482422 10.06222883 22.84964469z"/>
    </svg>
  )
}

Vue.component('icon-mono-bottom', Icon)
export default Icon

