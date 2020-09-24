
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1005.42617223 812.92121327c0 22.21211066-7.58032344 41.07477608-23.2698302 56.41170962l-112.99970575 112.99970574c-15.51322015 15.51322015-34.37588552 23.26983021-56.41170956 23.26983021-22.21211066 0-41.07477608-7.58032344-56.41170958-23.26983021L512 737.82312495 267.84306946 982.33262863c-15.51322015 15.51322015-34.37588552 23.26983021-56.41170956 23.26983021-22.21211066 0-41.07477608-7.58032344-56.4117096-23.26983021l-112.99970578-112.99970574c-15.51322015-15.51322015-23.26983021-34.37588552-23.26983016-56.41170962s7.58032344-41.07477608 23.26983016-56.41170954l244.15693053-244.15693056-244.33321708-244.50950371c-15.51322015-15.51322015-23.26983021-34.37588552-23.2698302-56.41170956 0-22.21211066 7.58032344-41.07477608 23.2698302-56.4117096l112.99970575-112.99970578c15.51322015-15.51322015 34.37588552-23.26983021 56.41170956-23.26983016 22.21211066 0 41.07477608 7.58032344 56.41170958 23.26983016L512 285.82430187l244.15693054-244.1569305c15.51322015-15.51322015 34.37588552-23.26983021 56.41170956-23.26983021 22.21211066 0 41.07477608 7.58032344 56.4117096 23.26983021l112.99970578 112.99970574c15.51322015 15.51322015 23.26983021 34.37588552 23.26983016 56.41170962 0 22.21211066-7.58032344 41.07477608-23.26983016 56.41170954L737.99941148 512.17628659l244.15693055 244.15693055c15.68950671 15.33693356 23.26983021 34.19959893 23.2698302 56.58799613z"/>
    </svg>
  )
}

Vue.component('icon-multiply', Icon)
export default Icon
