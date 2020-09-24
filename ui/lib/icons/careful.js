
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M669.3299115 58.58566714l-19.82207285 544.1719997c-0.49866851 12.21737821-5.36068635 22.93875097-14.4613865 31.91478393-9.22536724 8.97603298-19.94673996 13.46404948-32.16411816 13.46404951H421.24233316c-12.21737821 0-23.06341809-4.4880165-32.1641182-13.46404951-9.22536724-8.97603298-13.96271799-19.57273859-14.46138649-31.91478393l-19.94673997-544.1719997c-0.49866851-12.21737821 3.74001377-22.93875097 12.34204536-31.91478397 8.85136586-8.97603298 19.1987372-13.46404948 31.5407826-13.46404946h226.76949998c12.21737821 0 22.81408384 4.4880165 31.54078255 13.46404946 8.72669874 8.97603298 12.96538097 19.69740571 12.46671251 31.91478397z m-21.31807836 748.12741586v158.70124986c0 12.21737821-4.4880165 22.93875097-13.46404947 31.91478397S614.97504508 1010.66849916 602.75766684 1010.66849916H421.24233316c-12.21737821 0-22.93875097-4.4880165-31.91478393-13.46404946-8.97603298-8.97603298-13.46404948-19.57273859-13.46404951-31.91478396V806.713083c0-12.21737821 4.4880165-22.93875097 13.46404951-31.91478394 8.97603298-8.97603298 19.57273859-13.46404948 31.91478393-13.46404949h181.26599945c12.21737821 0 22.93875097 4.4880165 31.91478394 13.46404949 9.10070011 8.97603298 13.5887166 19.69740571 13.58871659 31.91478394z"/>
    </svg>
  )
}

Vue.component('icon-careful', Icon)
export default Icon

