
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1012.8 585.6v393.8H12.8V585.6c26.9-48.4 48.5-99.7 64.3-152.8C97.3 327.2 105 219.1 119 112.3c4.5-23.8 10.4-47.4 17.7-70.5h751.5c5.2 8.5 9.2 17.8 11.9 27.4 11 83.2 23.4 166.3 30.8 249.9 3.7 94.4 31.9 186.3 81.9 266.5z m-888.1-23.1h191.9c10.2-2.3 20.9 0.3 28.9 7.2 8 6.8 12.4 17 11.9 27.5 4 83.4 71.9 149.1 154.6 149.4 82.7 0.3 151.2-64.7 155.8-148.1-0.6-11.1 4-21.8 12.4-28.9 8.4-7.1 19.7-9.8 30.4-7.2h190.2L845.6 106H179.7l-55.1 456.4 0.1 0.1z m389.7-401.3H710c22 0 40.8 4.2 40.8 30.8S732 222.8 710 222.7H315.6c-21.9 0-40.8-4.1-40.8-30.7 0-26.7 18.9-30.9 40.8-30.8h198.8z m-1 186.2H317.8c-22.8 0-43.4-2.9-42.9-31.7 0.5-26.8 20.1-29.8 41.7-29.8H708c22.8 0 43.4 2.8 42.9 31.7-0.4 26.8-20.1 29.9-41.6 29.9H513.4z m-3.7 125.1H316.9c-23 0-43.3-3.6-42.3-32.3 0.9-26.8 20.9-28.8 42.3-28.8h391.3c23.1 0 43.3 3.6 42.3 32.3-0.9 26.8-20.9 29.3-42.3 29.2H509.4l0.3-0.4z m0 0"/>
    </svg>
  )
}

Vue.component('icon-cbox', Icon)
export default Icon

