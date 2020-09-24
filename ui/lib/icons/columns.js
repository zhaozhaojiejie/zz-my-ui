
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.79316629 147.47332713v729.05334574c0 26.30476334-9.47470148 48.86951291-28.17477019 67.69424876-18.82473584 18.82473584-41.38948542 28.17477021-67.69424877 28.17477022H109.32518693c-26.30476334 0-48.86951291-9.47470148-67.69424874-28.17477022-18.82473584-18.82473584-28.17477021-41.38948542-28.17477024-67.69424876V147.47332713c0-26.30476334 9.35003436-48.86951291 28.17477024-67.69424876 18.82473584-18.82473584 41.38948542-28.17477021 67.69424874-28.17477022h805.72362753c26.30476334 0 48.86951291 9.47470148 67.69424875 28.17477022 18.5754016 18.70006874 28.05010309 41.26481832 28.05010308 67.69424876zM109.20051979 895.60074298h364.52667289v-690.65587133H90.00178258v671.45713412c0 5.11135212 1.87000687 9.72403573 5.73468774 13.46404947s8.22803022 5.73468773 13.46404947 5.73468774z m824.79769763-19.19873721V204.94487165H550.27280732v690.5312042h364.52667289c5.11135212 0 9.72403573-1.87000687 13.46404947-5.73468772 3.86468087-3.61534663 5.73468773-8.1033631 5.73468774-13.33938236z"/>
    </svg>
  )
}

Vue.component('icon-columns', Icon)
export default Icon
