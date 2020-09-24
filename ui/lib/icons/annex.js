
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M942.498957 138.81090986c-79.76748061-79.76748061-209.11351844-79.76748061-288.88099908 0l-375.52075496 375.52075497c-47.86048838 47.86048838-47.86048838 125.41902338 0 173.27951174 47.86048838 47.86048838 125.41902338 47.86048838 173.27951177 0L740.2577138 398.7301775c15.95349615-15.95349615 15.95349615-41.84724753 0-57.80074365s-41.84724753-15.95349615-57.80074366 0L393.69869026 629.93315212c-15.95349615 15.95349615-41.84724753 15.95349615-57.80074365 0s-15.95349615-41.84724753 0-57.80074364l375.52075496-375.52075496c47.86048838-47.86048838 125.41902338-47.86048838 173.27951176 0 47.86048838 47.86048838 47.86048838 125.41902338 0 173.27951176l-433.19877943 433.32149863c-79.76748061 79.76748061-209.11351844 79.76748061-288.88099904 0s-79.76748061-209.11351844 0-288.88099908l346.68174273-346.68174273c15.95349615-15.95349615 15.95349615-41.84724753 0-57.80074367s-41.84724753-15.95349615-57.80074369 0L104.81769119 456.65364038c-111.67447286 111.67447286-111.67447286 292.6852943 0 404.35976715s292.6852943 111.67447286 404.35976716 0l433.32149865-433.32149859c79.76748061-79.76748061 79.76748061-209.11351844 0-288.88099908z m0 0"/>
    </svg>
  )
}

Vue.component('icon-annex', Icon)
export default Icon

