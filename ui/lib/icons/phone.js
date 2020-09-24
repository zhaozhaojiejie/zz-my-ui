
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M811.2010995 113.06520066v797.86959868c0 27.05276608-9.84870286 50.49018554-29.67077569 70.18759125-19.82207283 19.57273859-43.13482517 29.54610856-70.18759126 29.54610857H312.65726745c-27.05276608 0-50.24085129-9.84870286-70.18759126-29.67077569-19.82207283-19.69740571-29.6707757-43.13482517-29.67077569-70.06292413V113.06520066c0-27.05276608 9.84870286-50.24085129 29.67077569-70.18759125 19.69740571-19.69740571 43.13482517-29.6707757 70.18759126-29.6707757H711.46739966c27.05276608 0 50.24085129 9.84870286 70.18759127 29.6707757 19.69740571 19.94673996 29.54610856 43.25949231 29.54610857 70.18759125z m-74.92494199 673.07780674V237.8569926c0-6.73202476-2.49334249-12.5913796-7.35536036-17.57806463-4.86201785-4.86201785-10.84603987-7.35536036-17.5780646-7.35536037H312.65726745c-6.73202476 0-12.5913796 2.49334249-17.5780646 7.35536037-4.86201785 4.86201785-7.35536036 10.84603987-7.35536036 17.57806463V786.26767454c0 6.73202476 2.49334249 12.5913796 7.35536036 17.57806458 4.86201785 4.86201785 10.84603987 7.35536036 17.5780646 7.35536038H711.46739966c6.73202476 0 12.5913796-2.49334249 17.57806459-7.35536038 4.86201785-4.98668499 7.23069324-10.970707 7.23069326-17.70273172zM586.67560775 125.53191313c0-8.35269735-4.11401514-12.46671248-12.46671247-12.46671247H449.6664376c-8.35269735 0-12.46671248 4.11401514-12.46671246 12.46671247s4.11401514 12.46671248 12.46671246 12.46671249h124.54245768c8.35269735 0 12.46671248-4.11401514 12.46671247-12.46671249z m-30.54344559 829.28571413c12.0927111-12.0927111 18.32606734-26.92809895 18.32606735-44.13216217 0-17.20406323-6.10868914-31.79011683-18.32606735-44.1321622-12.34204536-12.0927111-26.92809895-18.32606734-44.13216216-18.32606731-17.20406323 0-31.79011683 6.10868914-44.13216216 18.32606731-12.34204536 12.34204536-18.32606734 26.92809895-18.32606735 44.1321622 0 17.20406323 6.10868914 31.79011683 18.32606735 44.13216217 12.0927111 12.34204536 26.92809895 18.32606734 44.13216216 18.32606735 17.20406323 0 31.79011683-6.10868914 44.13216216-18.32606735z"/>
    </svg>
  )
}

Vue.component('icon-phone', Icon)
export default Icon
