
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M832.2698436 13.33150084c49.11884718 0 91.13166824 17.45339747 126.03846315 52.36019241s52.36019243 76.919616 52.36019241 126.03846315-17.45339747 91.00700109-52.36019241 125.53979468l-125.2904604 124.04378917 57.8455459 57.8455459c3.74001377 3.74001377 5.61002062 7.97869597 5.61002063 12.71604674 0 4.73735075-1.87000687 9.10070011-5.61002063 12.71604671l-116.81309592 116.81309593c-3.74001377 3.74001377-7.97869597 5.61002062-12.71604676 5.61002061s-9.10070011-1.87000687-12.71604673-5.61002061l-58.46888151-58.46888151-335.72856708 335.85323418c-13.71338369 13.71338369-30.41877844 20.69474273-50.11618414 20.6947427h-112.94841509L48.8616314 1010.66849916 13.33150084 975.01370148l71.18492826-142.49452366v-112.94841503c0-19.69740571 6.85669185-36.40280044 20.6947427-50.1161842L440.93973887 333.85067867l-58.46888154-58.46888151c-3.74001377-3.74001377-5.61002062-7.97869597-5.61002061-12.71604673s1.87000687-9.10070011 5.61002061-12.71604676l116.81309595-116.81309592c3.74001377-3.74001377 7.97869597-5.61002062 12.71604672-5.61002063 4.73735075 0 9.10070011 1.87000687 12.71604672 5.61002063l57.8455459 57.8455459L706.73004892 65.69169325c34.53279357-34.90679495 76.29628037-52.36019243 125.53979468-52.36019241zM298.32054812 832.51917782L618.83972594 512 512 405.16027406 191.48082218 725.67945188v106.83972594h106.83972594z"/>
    </svg>
  )
}

Vue.component('icon-dropper', Icon)
export default Icon

