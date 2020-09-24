
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M690.14932133 191.35615502c0 9.59936861-3.4906795 18.07673309-10.59670563 25.0580921-6.98135898 6.98135898-15.45872346 10.59670559-25.05809209 10.5967056h-71.30959535v569.97809456h71.30959535c9.59936861 0 18.07673309 3.4906795 25.05809209 10.5967056 6.98135898 6.98135898 10.59670559 15.45872346 10.59670563 25.0580921 0 9.59936861-3.4906795 18.07673309-10.59670563 25.05809205L537.05809208 1000.07179354c-6.98135898 6.98135898-15.45872346 10.59670559-25.05809208 10.59670562-9.59936861 0-18.07673309-3.4906795-25.05809208-10.59670562L344.32271716 857.70193703c-6.98135898-6.98135898-10.59670559-15.33405633-10.59670564-25.05809205 0-9.59936861 3.4906795-18.07673309 10.59670564-25.0580921 6.98135898-6.98135898 15.33405633-10.59670559 25.05809205-10.5967056h71.30959542V227.01095272h-71.30959542c-9.59936861 0-18.07673309-3.4906795-25.05809205-10.5967056-6.98135898-6.98135898-10.59670559-15.33405633-10.59670564-25.0580921 0-9.59936861 3.4906795-18.07673309 10.59670564-25.05809205l142.49452364-142.49452365c6.98135898-6.98135898 15.33405633-10.59670559 25.05809209-10.59670561 9.59936861 0 18.07673309 3.4906795 25.05809206 10.59670561l142.49452366 142.61919077c6.98135898 7.10602613 10.72137273 15.33405633 10.72137272 24.93342493z"/>
    </svg>
  )
}

Vue.component('icon-link-arrow-v', Icon)
export default Icon

