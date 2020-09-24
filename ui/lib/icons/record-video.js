
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M985.57339656 239.80881227c-22.82577139-14.35814651-194.01905673 66.14564933-194.01905674 66.1456493v-8.46762486c0-70.31810218-58.90521647-127.2598114-131.67770265-127.2598114H152.80089876C80.0284126 170.3497445 21.12319614 227.29145377 21.12319614 297.60955592v427.79913458c0 70.31810218 58.90521647 127.2598114 131.67770262 127.25981142h507.1984576c72.77248618 0 131.67770264-56.94170925 131.67770267-127.25981142v-10.4311321s172.17503896 79.89019983 194.0190567 66.14564931c21.72129857-13.74455052 22.82577139-526.95624895-0.12271917-541.31439544z m-685.01857983 476.15049977V305.95446157l333.91894584 204.94106563-333.91894584 205.06378484z m0 0"/>
    </svg>
  )
}

Vue.component('icon-record-video', Icon)
export default Icon
