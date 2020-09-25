
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 823.54314487v62.33356238H13.33150084V137.99862562h62.33356239v685.54451925h935.00343593z m-62.33356239-607.62756626v211.80944503c0 6.85669185-3.11667812 11.59404262-9.47470149 14.33671935-6.35802337 2.74267673-12.0927111 1.49600549-17.32873031-3.74001373l-58.84288295-58.84288293L554.26215532 687.78064593c-3.24134525 3.24134525-6.98135898 4.86201785-11.22004124 4.86201789-4.23868224 0-7.97869597-1.62067262-11.22004125-4.86201789l-113.44708354-113.44708353-202.45941068 202.58407778-93.50034358-93.50034361L407.27961518 398.55291646c3.24134525-3.24134525 6.98135898-4.86201785 11.22004122-4.86201788s7.97869597 1.62067262 11.22004124 4.86201788l113.44708356 113.44708354 225.89683013-226.02149723-58.84288292-58.84288292c-5.23601926-5.23601926-6.48269049-10.970707-3.74001374-17.32873035s7.60469461-9.47470148 14.33671935-9.47470149h211.80944505c4.4880165 0 8.35269735 1.49600549 11.22004119 4.36334939 2.99201098 2.99201098 4.4880165 6.60735762 4.48801651 11.22004121z"/>
    </svg>
  )
}

Vue.component('icon-chart-trend', Icon)
export default Icon

