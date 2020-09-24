
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M20.87775773 82.23735821c0-33.74778026 27.85725863-61.11416209 61.1141621-61.11416207H427.32375133c33.74778026 0 61.11416209 27.85725863 61.11416209 61.11416207v345.20911233c0 33.74778026-27.85725863 61.11416209-61.11416209 61.11416205H81.99191983c-33.74778026 0-61.11416209-27.85725863-61.1141621-61.11416205V82.23735821z m514.31617125 514.31617125c0-33.74778026 27.85725863-61.11416209 61.11416208-61.11416205H941.51720338c33.74778026 0 61.11416209 27.85725863 61.11416209 61.11416205v345.20911233c0 33.74778026-27.85725863 61.11416209-61.11416209 61.11416207H596.30809106c-33.74778026 0-61.11416209-27.85725863-61.11416208-61.11416207V596.55352946z m-514.31617125 0c0-33.74778026 27.85725863-61.11416209 61.1141621-61.11416205H427.32375133c33.74778026 0 61.11416209 27.85725863 61.11416209 61.11416205v345.20911233c0 33.74778026-27.85725863 61.11416209-61.11416209 61.11416207H81.99191983c-33.74778026 0-61.11416209-27.85725863-61.1141621-61.11416207V596.55352946z m514.31617125-514.19345205c0-33.87049946 27.85725863-61.23688129 61.11416208-61.23688127H941.51720338c33.74778026 0 61.11416209 27.85725863 61.11416209 61.11416207v345.20911233c0 33.74778026-27.85725863 61.11416209-61.11416209 61.11416205H596.30809106c-33.74778026 0-61.11416209-27.85725863-61.11416208-61.11416205V82.36007741z m61.35960048 345.08639313c0-0.24543839 344.96367391-0.24543839 344.96367392-0.24543842-0.24543839 0-0.24543839-344.96367391-0.2454384-344.96367391 0 0.24543839-345.0863931 0.24543839-345.0863931 0.24543841 0.36815759 0 0.36815759 344.96367391 0.36815758 344.96367392z m0 0"/>
    </svg>
  )
}

Vue.component('icon-split-screen-compare', Icon)
export default Icon

