
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1012 512c-0.4 11.1-50.4 27.9-150 50l-183.4 16.6L562 612h-33.3L376 795.4h35.9c9 0 16.9 0.8 23.5 2.3s9.9 13.6 9.9 16-3.3 14.4-9.9 16c-6.6 1.5-14.5 2.3-23.5 2.3H245.2v-36.6h33.3V578.6h-83.4l-100 116.6h-50l-16.6-16.6v-100h16.6V562H112v-4.1L12 545.4v-66.8l100-12.5V462H45.3v-16.6H28.6v-100l16.6-16.6h50l100 116.6h83.4V228.6h-33.3V192H412c9 0 16.9 0.8 23.5 2.2 6.6 1.5 9.9 13.6 9.9 16s-3.3 14.4-9.9 16c-6.6 1.5-14.5 2.3-23.5 2.3h-35.9L528.6 412h33.2l116.6 33.3L861.9 462c44.5 9.7 79.3 18.8 104.1 27 25 8.4 38.9 14.3 41.6 17.8l4.4 5.2z"/>
    </svg>
  )
}

Vue.component('icon-warplane', Icon)
export default Icon

