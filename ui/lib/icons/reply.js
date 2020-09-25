
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M369.6301435 633.67511382v39.02081004c0 15.58339061-7.35536036 26.55409758-21.69207973 32.91212097-4.73735075 1.87000687-9.47470148 2.74267673-13.96271796 2.74267671-10.0980371 0-18.32606734-3.4906795-25.05809209-10.59670559L23.92820646 412.64030154c-7.10602613-7.10602613-10.59670559-15.33405633-10.59670562-25.05809209 0-9.59936861 3.4906795-17.95206596 10.59670562-25.05809207L308.7925866 77.65973724c10.84603987-11.46937548 23.81142086-14.08738511 39.02081004-7.85402887 14.46138647 6.23335624 21.69207971 17.20406323 21.69207975 32.91212095v38.39747442L148.59533122 362.52411738c-7.10602613 7.10602613-10.59670559 15.45872346-10.5967056 25.05809207s3.4906795 17.95206596 10.5967056 25.05809209l221.03481228 221.03481228zM1010.66849916 654.74385788c0 21.56741259-3.11667812 46.2515033-9.47470149 74.30160637-6.23335624 27.92543595-13.46404948 53.60686363-21.44274545 76.7949489-7.97869597 23.18808522-16.83006183 46.37617042-26.67876472 69.4395885-9.84870286 23.18808522-17.32873034 40.01814705-22.56474956 50.36551841-5.11135212 10.47203848-8.97603298 17.70273172-11.09537411 22.31541534-2.8673439 6.23335624-8.22803022 9.47470148-15.58339058 9.47470147-2.24400826 0-3.86468087-0.24933424-4.986685-0.62333562-9.22536724-2.8673439-13.5887166-9.22536724-12.71604677-18.94940296 15.83272485-148.47854564-3.74001377-253.19893044-59.09221714-314.41048872-23.81142086-26.30476334-55.3522034-46.87483897-94.87168196-61.46089252-39.51947857-14.5860536-89.1369942-24.31008934-148.97721412-29.17210722v139.62717977c0 15.58339061-7.35536036 26.55409758-21.69207971 32.91212096-4.73735075 1.87000687-9.47470148 2.74267673-13.96271799 2.74267675-10.0980371 0-18.32606734-3.4906795-25.05809208-10.59670563L237.73232546 412.64030154c-7.10602613-7.10602613-10.59670559-15.33405633-10.59670561-25.05809209 0-9.59936861 3.4906795-17.95206596 10.59670561-25.05809207l284.86438013-284.86438014c10.84603987-11.46937548 23.81142086-14.08738511 39.02081008-7.85402887 14.46138647 6.23335624 21.69207971 17.20406323 21.6920797 32.91212095v145.73586886c152.46789362 10.47203848 263.67096893 51.36285541 333.35989171 123.04645217 62.70756377 64.20356929 93.9990121 158.57658273 93.99901208 283.24370753z"/>
    </svg>
  )
}

Vue.component('icon-reply', Icon)
export default Icon

