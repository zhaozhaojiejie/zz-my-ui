
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M943.72225315 261.66841339C988.22841671 338.08936091 1010.66849916 421.49166739 1010.66849916 512s-22.31541534 173.91063909-66.94624601 250.33158661C899.09142249 838.62786695 838.62786695 899.2160896 762.33158661 943.72225315S602.50833261 1010.66849916 512 1010.66849916s-173.91063909-22.31541534-250.33158661-66.94624601c-76.29628037-44.50616358-136.7598359-104.96971909-181.51533365-181.51533371C35.64691614 685.91063909 13.33150084 602.50833261 13.33150084 512c0-90.38366548 22.31541534-173.78597196 66.94624601-250.33158661 44.50616358-76.29628037 104.96971909-136.7598359 181.51533371-181.51533365C338.08936091 35.77158329 421.49166739 13.33150084 512 13.33150084c90.38366548 0 173.78597196 22.31541534 250.33158661 66.94624601C838.62786695 124.90857751 899.09142249 185.37213305 943.72225315 261.66841339z m-254.44560168-55.3522034c-54.10553214-31.54078257-113.19774929-47.3735074-177.27665147-47.37350739s-123.17111928 15.83272485-177.27665147 47.37350739-96.99102308 74.42627351-128.53180562 128.53180567-47.3735074 113.19774929-47.37350744 177.27665145c0 64.07890214 15.83272485 123.17111928 47.37350744 177.27665147s74.42627351 96.99102308 128.53180562 128.53180567c54.10553214 31.54078257 113.19774929 47.3735074 177.27665147 47.37350741s123.17111928-15.83272485 177.27665147-47.37350741c54.10553214-31.54078257 96.99102308-74.42627351 128.53180562-128.53180567 31.54078257-54.10553214 47.3735074-113.19774929 47.37350744-177.27665147s-15.83272485-123.17111928-47.37350744-177.27665145c-31.6654497-54.10553214-74.55094061-96.99102308-128.53180562-128.53180567z m-59.71555279 188.24735845c32.53811957 32.53811957 48.74484579 71.68359675 48.7448458 117.56109867s-16.20672625 85.02297913-48.7448458 117.56109867c-32.53811957 32.53811957-71.68359675 48.74484579-117.56109868 48.74484582s-85.02297913-16.20672625-117.56109868-48.74484582c-32.53811957-32.53811957-48.74484579-71.68359675-48.7448458-117.56109867s16.20672625-85.02297913 48.7448458-117.56109867c32.53811957-32.53811957 71.68359675-48.74484579 117.56109868-48.74484581s85.02297913 16.20672625 117.56109868 48.74484581z"/>
    </svg>
  )
}

Vue.component('icon-double-circle', Icon)
export default Icon

