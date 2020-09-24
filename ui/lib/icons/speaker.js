
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M939.4835709 369.13147499c19.69740571 0 36.40280044 6.85669185 50.36551843 20.81940984s20.81940983 30.66811272 20.81940983 50.36551842c0 19.69740571-6.85669185 36.40280044-20.81940983 50.36551843s-30.66811272 20.81940983-50.36551843 20.81940981V725.18078338c0 19.32340434-6.98135898 36.02879907-21.19341118 50.11618416-14.08738511 14.08738511-30.79277981 21.19341122-50.11618419 21.19341125C713.46207365 667.83390598 562.86418691 597.39698049 416.25564816 585.05493511c-21.56741259 6.98135898-38.39747444 19.32340434-50.73951981 36.77680184-12.34204536 17.45339747-18.07673309 36.02879907-17.20406318 55.97553901 0.74800276 19.94673996 8.22803022 37.02613606 22.1907482 51.48752255-7.35536036 12.34204536-11.71870973 24.31008934-12.71604673 36.40280043-1.12200411 12.0927111 0 22.81408384 3.36601235 32.28878534 3.36601233 9.47470148 9.59936861 19.69740571 18.57540161 30.66811267 9.10070011 10.970707 18.07673309 20.19607421 26.6787647 27.80076884 8.60203161 7.60469461 20.19607421 16.95472896 34.15879217 28.0501031-10.72137273 21.56741259-31.54078257 36.90146893-62.08422813 46.25150329-30.66811272 9.22536724-61.95956103 11.34470836-93.74967783 6.48269048-31.91478394-4.98668499-56.47420753-15.33405633-73.55360362-30.91744693-2.6180096-8.60203161-8.1033631-24.80875785-16.33139335-48.74484582-8.35269735-23.93608795-14.33671934-41.38948542-17.82739887-52.60952666-3.4906795-11.0953741-7.85402885-27.67610172-12.71604673-49.49284854-4.98668499-21.94141396-7.85402885-40.64148268-8.35269733-56.22487328-0.49866851-15.58339061 0.12466711-33.78479083 1.99467398-54.72886776s5.98402199-41.38948542 12.34204535-61.46089254h-67.94358301c-24.43475647 0-45.37883343-8.60203161-62.83223089-26.0554291-17.57806461-17.70273172-26.18009619-38.77147581-26.1800962-63.20623227v-106.83972592c0-24.43475647 8.60203161-45.37883343 26.05542907-62.83223089 17.45339747-17.45339747 38.39747444-26.05542909 62.83223091-26.05542909h267.16164839c161.44392661 0 327.62520395-71.30959537 498.66849918-213.80411902 19.32340434 0 35.90413195 6.98135898 50.11618419 21.19341121 14.08738511 14.21205224 21.19341122 30.79277981 21.1934112 50.11618416l0.12466712 213.55478478zM868.17397553 705.23404343V174.27675894C722.06410527 286.35250415 579.56958162 349.93273776 440.69040463 365.26679413v150.3485525C580.56691864 531.07407011 723.18610939 594.28030236 868.17397553 705.23404343z"/>
    </svg>
  )
}

Vue.component('icon-speaker', Icon)
export default Icon

