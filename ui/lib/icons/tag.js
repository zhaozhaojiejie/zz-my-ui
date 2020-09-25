
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M962.911473 594.51679954c0 20.9673835-7.44003928 39.00384243-22.09466215 53.54573743L648.7389042 940.81681085c-15.55644583 14.65462289-33.48017687 22.0946622-54.22210466 22.09466215-20.9673835 0-39.00384243-7.44003928-53.54573742-22.09466215l-425.6604305-426.11134203c-14.99280648-14.65462289-27.84378344-34.72018342-38.44020307-60.08395378-10.59641961-25.36377036-15.78190155-48.47298331-15.78190155-69.66582258V137.29256592c0-20.6291999 7.55276717-38.44020308 22.65830149-53.54573743 14.99280648-14.99280648 32.91653752-22.65830152 53.54573743-22.65830149h247.66312654c20.9673835 0 44.18932434 5.2982098 69.66582258 15.78190155 25.36377036 10.48369177 45.54205879 23.22194088 60.64759316 38.44020307l425.66043051 424.98406333c14.65462289 15.44371795 21.98193429 33.59290474 21.98193429 54.22210459zM305.59527323 305.59527323c14.8800786-14.8800786 22.32011789-32.80380965 22.32011791-53.77119316s-7.44003928-39.00384243-22.32011791-53.77119314c-14.8800786-14.8800786-32.80380965-22.32011789-53.77119316-22.32011791s-39.00384243 7.44003928-53.77119314 22.32011791-22.32011789 32.80380965-22.32011791 53.77119314 7.44003928 39.00384243 22.32011791 53.77119316c14.8800786 14.8800786 32.80380965 22.32011789 53.77119314 22.32011791 20.9673835-0.11272786 38.77838669-7.66549503 53.77119316-22.32011791z"/>
    </svg>
  )
}

Vue.component('icon-tag', Icon)
export default Icon

