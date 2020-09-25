
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 933.99821742c0 21.19341122-7.48002749 39.14547719-22.44008245 54.23019929-14.96005497 14.96005497-33.03678807 22.44008246-54.23019929 22.44008245-21.56741259 0-39.64414567-7.60469461-53.98086504-22.81408383L674.44126362 782.90166216C603.00700109 832.39451071 523.0953741 857.20326856 435.32971826 857.20326856c-57.09754315 0-111.82641095-11.0953741-163.93726909-33.28612232-52.23552531-22.1907482-97.11569024-52.23552531-134.88982905-89.88499699-37.77413882-37.77413882-67.69424876-82.65430372-89.88499698-134.88982902S13.33150084 492.42726141 13.33150084 435.32971826s11.0953741-111.82641095 33.2861223-163.93726909c22.1907482-52.23552531 52.23552531-97.11569024 89.88499698-134.88982905s82.65430372-67.69424876 134.88982905-89.88499698S378.2321751 13.33150084 435.32971826 13.33150084s111.82641095 11.0953741 163.9372691 33.2861223c52.23552531 22.1907482 97.11569024 52.23552531 134.88982904 89.88499698 37.77413882 37.77413882 67.69424876 82.65430372 89.88499694 134.88982905S857.32793567 378.2321751 857.32793567 435.32971826c0 87.89032301-24.80875785 167.67728284-74.42627351 239.11154536l205.70075592 205.57608876c14.83538786 14.83538786 22.06608109 32.78745384 22.06608108 53.98086504zM625.07308218 625.07308218c52.60952666-52.60952666 78.78962288-115.69109182 78.78962288-189.74336392 0-73.92760501-26.18009619-137.13383727-78.78962288-189.74336393s-115.69109182-78.78962288-189.74336392-78.78962289c-73.92760501 0-137.13383727 26.18009619-189.74336393 78.78962289s-78.78962288 115.69109182-78.78962289 189.74336393c0 73.92760501 26.18009619 137.13383727 78.78962289 189.74336392s115.69109182 78.78962288 189.74336393 78.78962288 137.25850438-26.42943045 189.74336392-78.78962288z m2.11934112-208.94210114v38.2728073c0 5.11135212-1.87000687 9.72403573-5.73468773 13.4640495s-8.35269735 5.73468773-13.46404948 5.73468772H473.72719268v134.2664934c0 5.11135212-1.87000687 9.72403573-5.73468773 13.46404948s-8.35269735 5.73468773-13.46404946 5.73468775h-38.27280733c-5.11135212 0-9.72403573-1.87000687-13.46404949-5.73468775s-5.73468773-8.35269735-5.73468773-13.46404948V473.60252556H262.66575043c-5.11135212 0-9.72403573-1.87000687-13.46404949-5.73468772s-5.73468773-8.35269735-5.73468775-13.4640495v-38.2728073c0-5.11135212 1.87000687-9.72403573 5.73468775-13.46404948s8.35269735-5.73468773 13.46404949-5.73468775h134.26649338V262.54108328c0-5.11135212 1.87000687-9.72403573 5.73468775-13.46404948s8.35269735-5.73468773 13.46404948-5.73468773h38.2728073c5.11135212 0 9.72403573 1.87000687 13.4640495 5.73468773s5.73468773 8.35269735 5.73468772 13.46404948v134.26649342h134.2664934c5.11135212 0 9.72403573 1.87000687 13.46404948 5.73468773 3.98934801 3.86468087 5.85935485 8.22803022 5.85935486 13.58871661z"/>
    </svg>
  )
}

Vue.component('icon-enlarge', Icon)
export default Icon

