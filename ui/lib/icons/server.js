
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 120.17122675v213.80411906H13.33150084V120.17122675h997.33699832z m0 284.98904731v213.80411901H13.33150084V405.16027406h997.33699832z m0 284.98904727v213.67945192H13.33150084V690.14932133h997.33699832zM84.64109622 262.79041754h569.97809457v-71.30959536H84.64109622v71.30959536z m0 284.86438015h569.97809457v-71.30959538H84.64109622v71.30959538z m0 284.98904729h569.97809457v-71.43426252H84.64109622v71.43426252z m857.08648292-567.73408633c10.47203848-10.47203848 15.58339061-22.93875097 15.5833906-37.7741388s-5.11135212-27.42676745-15.5833906-37.77413882c-10.47203848-10.47203848-23.06341809-15.58339061-37.77413879-15.58339059-14.83538786 0-27.42676745 5.11135212-37.77413883 15.58339059-10.47203848 10.47203848-15.58339061 23.06341809-15.58339059 37.77413882 0 14.83538786 5.11135212 27.42676745 15.58339059 37.7741388 10.47203848 10.47203848 22.93875097 15.58339061 37.77413883 15.58339059 14.71072073 0 27.30210033-5.23601926 37.77413879-15.58339059z m0 284.86438017c10.47203848-10.47203848 15.58339061-23.06341809 15.5833906-37.77413882 0-14.83538786-5.11135212-27.42676745-15.5833906-37.77413882-10.47203848-10.47203848-23.06341809-15.58339061-37.77413879-15.5833906-14.83538786 0-27.42676745 5.11135212-37.77413883 15.5833906-10.47203848 10.47203848-15.58339061 23.06341809-15.58339059 37.77413882 0 14.83538786 5.11135212 27.42676745 15.58339059 37.77413882 10.47203848 10.47203848 22.93875097 15.58339061 37.77413883 15.5833906 14.71072073 0.12466711 27.30210033-5.11135212 37.77413879-15.5833906z m0 284.98904727c10.47203848-10.47203848 15.58339061-23.06341809 15.5833906-37.77413881 0-14.83538786-5.11135212-27.42676745-15.5833906-37.77413883-10.47203848-10.47203848-23.06341809-15.58339061-37.77413879-15.58339059-14.83538786 0-27.42676745 5.11135212-37.77413883 15.58339059-10.47203848 10.47203848-15.58339061 23.06341809-15.58339059 37.77413883 0 14.83538786 5.11135212 27.42676745 15.58339059 37.77413881 10.47203848 10.47203848 22.93875097 15.58339061 37.77413883 15.58339061 14.71072073 0 27.30210033-5.11135212 37.77413879-15.58339061z"/>
    </svg>
  )
}

Vue.component('icon-server', Icon)
export default Icon
