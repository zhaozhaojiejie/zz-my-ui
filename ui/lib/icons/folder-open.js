
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M823.70677044 394.92588227v83.57177586H388.91264144c-32.76602665 0-67.00468371 8.22218645-102.96140964 24.7892786-35.95672589 16.56709211-64.42758052 37.30663709-85.65800224 62.4640733L24.19117617 772.77830205l-2.57710323 3.19069925c0-1.4726304-0.12271919-3.55885684-0.24543841-6.50411766-0.24543839-2.94526081-0.24543839-5.15420646-0.24543839-6.50411766V261.28467243c0-32.02971145 11.53560489-59.51881247 34.48409545-82.46730306s50.56031079-34.48409548 82.46730305-34.48409548h167.26627091c32.02971145 0 59.51881247 11.53560489 82.46730308 34.48409548 22.94849059 22.94849059 34.48409548 50.56031079 34.48409545 82.46730306v16.68981133h284.34038865c32.02971145 0 59.51881247 11.53560489 82.46730305 34.48409547 23.07120977 22.94849059 34.60681468 50.4375916 34.60681466 82.46730304z m179.17003342 179.78362943c0 10.7992897-5.39964483 22.33489458-16.1989345 34.48409545L811.06669276 816.09818c-14.97174254 17.79428414-35.95672589 32.88874589-62.95495011 45.16066596-26.99822421 12.39463929-52.0329412 18.53059934-74.9814318 18.53059934H104.69497197c-11.90376249 0-22.45761378-2.33166483-31.66155382-6.87227526-9.20394007-4.54061044-13.86726972-12.02648168-13.86726972-22.45761377 0-10.7992897 5.39964483-22.33489458 16.19893453-34.48409548l175.61117658-206.90457281c14.97174254-17.79428414 35.95672589-32.88874589 62.95495009-45.16066597 26.99822421-12.2719201 52.0329412-18.53059934 74.98143181-18.53059937h568.43533888c11.90376249 0 22.45761378 2.33166483 31.66155384 6.87227527 9.20394007 4.41789124 13.86726972 12.02648168 13.8672697 22.45761379z"/>
    </svg>
  )
}

Vue.component('icon-folder-open', Icon)
export default Icon

