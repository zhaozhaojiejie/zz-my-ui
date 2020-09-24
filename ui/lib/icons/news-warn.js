
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512.36815759 21.36863453c67.86371815 0 131.43226424 12.8855161 190.95107673 38.7792675 59.39609327 25.89375141 111.30631527 60.86872369 155.36250839 104.92491682 44.17891236 44.05619317 79.15388462 95.96641517 105.04763605 155.73066605 25.89375141 59.76425086 38.90198672 123.45551617 38.90198671 191.1965151 0 67.74099895-13.00823531 131.30954504-38.90198671 190.70563833-25.89375141 59.39609327-60.86872369 111.06087689-105.04763605 155.11707-44.17891236 44.05619317-95.96641517 79.03116541-155.36250839 104.92491681-59.39609327 25.89375141-123.08735856 38.77926749-190.95107673 38.77926753s-131.67770264-12.8855161-191.4419535-38.77926753-111.7971921-60.86872369-155.97610443-104.92491681-79.15388462-95.84369595-105.04763603-155.11707C34.13143143 643.30954504 21.12319614 579.74099895 21.12319614 512s13.00823531-131.43226424 38.90198668-191.1965151c25.89375141-59.76425086 60.86872369-111.67447286 105.04763603-155.73066605 44.17891236-44.05619317 96.08913435-79.03116541 155.97610445-104.92491682 59.76425086-25.89375141 123.57823538-38.77926749 191.31923429-38.7792675z m-60.13240845 558.37236442c0 17.54884573 5.64508323 32.27514987 16.93524975 44.30163153 11.29016649 12.02648168 25.4028746 18.03972254 42.09268589 18.03972255 16.81253055 0 31.04795784-6.01324087 42.70628197-18.03972255 11.65832409-12.02648168 17.54884573-26.7527858 17.54884572-44.30163153V213.66962244c0-17.42612654-5.89052165-31.53883463-17.54884572-42.09268593-11.65832409-10.55385128-25.89375141-15.83077691-42.70628197-15.83077693-16.81253055 0-31.04795784 5.39964483-42.70628191 16.44437293-11.65832409 10.92200888-17.54884573 25.1574362-17.54884576 42.58356276l1.22719203 364.96690368z m59.15065486 135.48199786c-21.10770258 0-39.2701443 7.48587126-54.11916764 22.45761378-15.0944617 14.84902331-22.58033299 32.88874589-22.58033297 53.99644844s7.48587126 39.14742513 22.45761378 54.1191676c14.97174254 14.97174254 33.01146507 22.45761378 54.11916761 22.45761379 21.10770258 0 39.3928635-7.48587126 54.73276365-22.45761379 15.33990013-14.97174254 22.94849059-33.01146507 22.94849059-54.1191676 0-21.10770258-7.60859047-39.14742513-22.94849059-54.11916765-15.21718091-14.84902331-33.50234187-22.33489458-54.61004443-22.33489457z m0 0"/>
    </svg>
  )
}

Vue.component('icon-news-warn', Icon)
export default Icon

