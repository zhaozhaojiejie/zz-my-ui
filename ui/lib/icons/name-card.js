
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M988.9 160c-15.2-15.2-33.6-22.9-55.1-22.9H90c-21.5 0-39.8 7.7-55.1 22.9C19.6 175.2 12 193.5 12 215v594c0 21.5 7.6 39.9 22.9 55.1C50.1 879.2 68.5 887 90 887h171.6v-47c0-4.7 1.4-8.3 4.4-11.3 2.9-2.9 6.8-4.4 11.3-4.4h31.3c4.7 0 8.3 1.4 11.3 4.4 2.9 2.9 4.4 6.8 4.4 11.3v47h375v-47c0-4.7 1.4-8.3 4.4-11.3 2.9-2.9 6.8-4.4 11.3-4.4h31.2c4.7 0 8.4 1.5 11.3 4.4 2.9 2.9 4.4 6.8 4.4 11.3v47H934c21.5 0 39.9-7.6 55.1-22.9 15.1-15.2 22.9-33.6 22.9-55.1V215c0-21.5-7.9-40-23.1-55zM246 294.3c21.6-21.7 47.8-32.5 78.4-32.5 30.6 0 56.8 10.9 78.4 32.5 21.7 21.6 32.5 47.8 32.5 78.4 0 30.6-10.9 56.8-32.5 78.4-21.7 21.6-47.8 32.5-78.4 32.5-30.6 0-56.8-10.9-78.4-32.5-21.7-21.7-32.5-47.8-32.5-78.4 0-30.7 10.9-56.7 32.5-78.4z m247.9 384.2c-12 13.9-26.8 20.8-44.5 20.7h-250c-17.6 0-32.5-6.8-44.5-20.7-12.1-13.7-18.1-31.1-18.1-52s1.4-39.9 4.4-57.4c2.9-17.5 7.8-34.3 14.4-50.4 6.7-16.1 16.6-28.8 29.6-38.1 8.4-6 17.7-10 28.1-12.1 2.3 2.7 4.8 5.3 7.3 7.8 28.6 28.6 63.2 43 103.7 43s75-14.4 103.7-43c2.5-2.5 5-5.1 7.3-7.8 10.5 2.2 19.9 6.3 28.2 12.1 13.1 9.2 23 22 29.6 38.1 6.6 16.1 11.5 33 14.4 50.4 2.9 17.4 4.4 36.5 4.4 57.4 0.1 21-6 38.2-18 52zM887 621.2c0 4.7-1.5 8.4-4.3 11.4-2.9 2.9-6.8 4.4-11.3 4.4H590.1c-4.7 0-8.4-1.5-11.3-4.4-2.9-2.9-4.4-6.8-4.4-11.3V590c0-4.7 1.5-8.3 4.4-11.3 2.9-2.9 6.8-4.4 11.3-4.4h281.2c4.7 0 8.3 1.4 11.3 4.4 2.9 2.9 4.4 6.8 4.4 11.3v31.2z m0-126.8c0 4.8-1.9 9-5.3 12.4-3.4 3.3-7.5 5.1-12.4 5.1H592c-4.8 0-9-1.7-12.4-5.1-3.3-3.4-5.1-7.5-5.1-12.4V467c0-4.8 1.7-9 5.1-12.4 3.4-3.3 7.5-5.1 12.4-5.1h277.5c4.8 0 9 1.7 12.4 5.1 3.3 3.4 5.1 7.5 5.1 12.4v27.4z m0-123.2c0 4.7-1.5 8.4-4.3 11.4-2.9 2.9-6.8 4.4-11.3 4.4H590.1c-4.7 0-8.3-1.4-11.3-4.4-2.9-2.9-4.4-6.8-4.4-11.3V340c0-4.7 1.4-8.3 4.4-11.3 2.9-2.9 6.8-4.4 11.3-4.4h281.2c4.7 0 8.3 1.4 11.3 4.4 2.9 2.9 4.4 6.8 4.4 11.3v31.2z"/>
    </svg>
  )
}

Vue.component('icon-name-card', Icon)
export default Icon

