
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 573.08689115v313.03915033c0 11.22004121-4.11401514 21.06874408-12.34204535 29.17210721-8.22803022 8.22803022-18.07673309 12.34204536-29.17210718 12.34204536H54.84565337c-11.22004121 0-21.06874408-4.11401514-29.17210718-12.34204536-8.22803022-8.22803022-12.34204536-17.95206596-12.34204535-29.17210721V573.08689115c0-26.92809895 5.48535348-53.35752942 16.20672624-79.91162699l154.58723473-358.5426509c4.36334937-10.84603987 12.34204536-19.94673996 23.81142083-27.30210034s22.81408384-11.0953741 34.15879219-11.09537412h540.30731884c11.22004121 0 22.68941672 3.74001377 34.1587922 11.09537412s19.44807148 16.58072759 23.81142083 27.30210034L994.46177292 493.29993126c10.72137273 26.42943045 16.20672625 53.10819517 16.20672624 79.78695989z m-333.23522456-19.32340436h205.07742027c-0.37400136-1.37133838-0.99733698-3.11667812-1.6206726-5.48535349-0.62333562-2.36867538-1.24667127-3.98934801-1.62067263-4.86201786L741.76151101 221.15159788H282.11382189L144.48131611 543.29144834c-0.37400136 1.37133838-0.99733698 3.11667812-1.62067263 5.48535348-0.62333562 2.36867538-1.24667127 3.98934801-1.62067261 4.86201787h205.07742028l61.71022677 124.66712479h207.82009705l61.58555963-124.54245769z"/>
    </svg>
  )
}

Vue.component('icon-inbox', Icon)
export default Icon

