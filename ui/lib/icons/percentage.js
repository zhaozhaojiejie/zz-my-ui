
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M440.08654825 93.15936709c47.98320757 47.98320757 71.91345175 105.78395124 71.91345175 173.52495018s-23.93024419 125.54174259-71.91345175 173.52495016-105.78395124 71.91345175-173.52495017 71.91345176-125.54174259-23.93024419-173.5249502-71.91345176S21.12319614 334.4253162 21.12319614 266.68431727s23.93024419-125.54174259 71.91345174-173.52495018 105.78395124-71.91345175 173.5249502-71.91345176 125.54174259 23.93024419 173.52495017 71.91345176z m501.30793594-31.04795783c0 8.46762487-2.82254165 16.68981132-8.34490567 24.29840179L258.21669238 986.18699253c-8.09946725 11.04472807-18.89875693 16.68981132-32.52058822 16.68981133h-102.34781364c-11.04472807 0-20.73954495-4.04973365-28.716293-12.14920089-8.09946725-8.09946725-12.1492009-17.79428414-12.1492009-28.71629301 0-8.46762487 2.82254165-16.68981132 8.34490565-24.29840181l674.83288612-899.89990068c8.09946725-11.04472807 18.89875693-16.68981132 32.52058826-16.68981133h102.3478136c11.04472807 0 20.73954495 4.04973365 28.71629304 12.14920089 8.22218645 8.09946725 12.1492009 17.79428414 12.1492009 28.83901223zM324.11690331 324.23962251c16.07621534-16.07621534 24.29840178-35.34312989 24.29840178-57.55530524s-8.09946725-41.23365151-24.29840178-57.55530527c-16.32165372-16.07621534-35.34312989-24.29840178-57.55530523-24.29840178s-41.23365151 8.09946725-57.55530526 24.29840178c-16.32165372 16.32165372-24.29840178 35.34312989-24.29840179 57.55530527s8.09946725 41.23365151 24.29840179 57.55530524c16.07621534 16.32165372 35.34312989 24.29840178 57.55530526 24.29840183 22.21217537-0.12271919 41.35637071-8.22218645 57.55530523-24.29840183z m606.84644881 259.67382924C978.9465597 631.89665934 1002.87680386 689.69740299 1002.87680386 757.43840192s-23.93024419 125.54174259-71.91345174 173.5249502S825.17940085 1002.87680386 757.43840192 1002.87680386s-125.54174259-23.93024419-173.52495017-71.91345174C535.93024419 882.98014452 512 825.17940085 512 757.43840192s23.93024419-125.54174259 71.91345175-173.52495017C631.89665934 535.93024419 689.69740299 512 757.43840192 512s125.54174259 24.0529634 173.5249502 71.91345175z m-115.96964494 231.08025543c16.07621534-16.07621534 24.29840178-35.34312989 24.29840179-57.55530526 0-22.21217537-8.09946725-41.23365151-24.29840179-57.55530523-16.07621534-16.07621534-35.34312989-24.29840178-57.55530526-24.29840178-22.21217537 0-41.23365151 8.09946725-57.55530523 24.29840178s-24.29840178 35.34312989-24.29840178 57.55530523c0 22.21217537 8.09946725 41.35637071 24.29840178 57.55530526 16.07621534 16.07621534 35.34312989 24.29840178 57.55530523 24.29840179 22.21217537 0 41.23365151-8.09946725 57.55530526-24.29840179z"/>
    </svg>
  )
}

Vue.component('icon-percentage', Icon)
export default Icon

