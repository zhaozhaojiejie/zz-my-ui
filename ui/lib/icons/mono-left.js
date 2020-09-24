
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M802.12759839 97.35231962c0 8.59482045-3.35407632 16.35112194-10.0622288 22.84964466L400.26733382 512l391.79803577 391.58840594c6.70815259 6.70815259 10.06222886 14.25482422 10.0622288 22.84964468 0 8.59482045-3.35407632 16.35112194-10.0622288 22.84964467l-49.8918847 49.89188465c-6.70815259 6.70815259-14.25482422 10.06222886-22.84964469 10.06222889-8.59482045 0-16.35112194-3.35407632-22.84964469-10.06222889L231.93463041 534.84964466c-6.70815259-6.70815259-10.06222886-14.25482422-10.0622288-22.84964466 0-8.59482045 3.35407632-16.35112194 10.0622288-22.84964466L696.47419551 24.61079027c6.70815259-6.70815259 14.25482422-10.06222886 22.84964469-10.06222883 8.59482045 0 16.35112194 3.35407632 22.84964469 10.06222883l49.8918847 49.89188476c6.70815259 6.49852281 10.06222886 14.25482422 10.0622288 22.84964459z"/>
    </svg>
  )
}

Vue.component('icon-mono-left', Icon)
export default Icon

