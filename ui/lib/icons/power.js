
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M972.39569185 550.27280732c0 62.20889528-12.21737821 121.92444804-36.52746756 178.64798983-24.31008934 56.72354179-57.09754315 105.5930547-98.36236146 146.85787299s-90.13433121 73.92760501-146.85787301 98.36236148C633.92444804 998.45112094 574.45822951 1010.66849916 512 1010.66849916s-121.92444804-12.21737821-178.64798982-36.52746754-105.5930547-57.09754315-146.85787301-98.36236148c-41.26481832-41.14015116-73.92760501-90.13433121-98.36236146-146.85787299-24.31008934-56.72354179-36.52746757-116.18976029-36.52746756-178.64798983 0-72.68093375 16.08205908-141.12318528 48.24617727-205.5760888 32.16411819-64.32823639 77.41828451-118.18443429 135.76249891-161.81792796 17.20406323-12.71604672 36.2781333-17.82739884 57.22221028-14.96005499s37.6494717 12.71604672 49.99151705 30.04477706c12.71604672 16.70539473 17.70273172 35.65479769 14.5860536 56.59887466-2.99201098 20.94407697-12.84071385 37.77413882-29.6707757 50.61485268-39.14547719 29.6707757-69.43958851 65.69957477-90.75766686 108.58506569-21.44274548 42.7608238-32.03945105 88.38899149-32.03945105 136.63516878 0 41.63881969 8.1033631 81.15829824 24.31008934 118.93243706 16.08205908 37.77413882 38.02347307 70.4369255 65.69957476 97.98836007 27.55143457 27.55143457 60.21422127 49.36818142 97.98836005 65.69957478 37.77413882 16.08205908 77.41828451 24.31008934 118.93243709 24.31008932 41.63881969 0 81.15829824-8.1033631 119.05710417-24.31008932 37.77413882-16.08205908 70.4369255-38.02347307 97.98836009-65.69957478 27.55143457-27.55143457 49.36818142-60.21422127 65.69957476-97.98836007 16.08205908-37.77413882 24.31008934-77.41828451 24.31008933-118.93243706 0-48.24617727-10.72137273-93.87434498-32.03945106-136.63516878-21.44274548-42.7608238-51.7368568-78.91429-90.75766687-108.58506569-16.70539473-12.71604672-26.6787647-29.6707757-29.67077568-50.61485268-2.99201098-20.94407697 1.87000687-39.89347992 14.58605359-56.59887466 12.34204536-17.20406323 29.17210723-27.17743319 50.24085129-30.04477706 21.19341122-2.74267673 40.26748132 2.11934113 56.97287602 14.96005499 58.34421441 43.63349368 103.59838069 97.4896916 135.76249892 161.81792796 32.16411819 64.45290351 48.37084443 133.01982216 48.3708444 205.5760888zM588.79494889 90.12644972v383.60074296c0 20.81940983-7.60469461 38.77147581-22.81408385 53.98086505-15.20938925 15.08472209-33.16145518 22.81408384-53.98086504 22.81408382-20.81940983 0-38.64680867-7.60469461-53.98086504-22.81408382-15.08472209-15.08472209-22.81408384-33.16145518-22.81408385-53.98086505V90.12644972c0-20.81940983 7.60469461-38.64680867 22.81408385-53.98086505 15.08472209-15.08472209 33.16145518-22.81408384 53.98086504-22.81408383 20.81940983 0 38.64680867 7.60469461 53.98086504 22.81408383 15.08472209 15.08472209 22.81408384 33.16145518 22.81408385 53.98086505z"/>
    </svg>
  )
}

Vue.component('icon-power', Icon)
export default Icon
