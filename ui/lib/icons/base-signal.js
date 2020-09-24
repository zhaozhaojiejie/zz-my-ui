
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M101.99514957 312.58129843c-0.12271919-67.00468371 26.0164706-131.43226424 72.89520539-179.29275262 10.30841288-10.30841288 14.23542731-25.2801554 10.30841285-39.27014431-3.92701445-13.98998892-14.97174254-24.78927859-29.08445061-28.34813541-14.1127081-3.55885684-28.96173142 0.73631522-39.02470591 11.29016647-129.468757 132.53673704-127.75068819 344.59551631 3.68157602 475.04602695 15.83077691 15.70805773 41.35637071 15.70805773 57.06442846-0.1227192 15.70805773-15.83077691 15.70805773-41.35637071-0.1227192-57.18714766-48.59680359-48.10592677-75.84046618-113.63798009-75.717747-182.11529422z m602.42855755-152.90812441c-16.07621534 15.46261933-16.56709211 40.98821313-1.1044728 57.06442844 52.40109882 54.61004443 51.29662599 141.00436191-2.45438403 194.26449515-10.55385128 10.06297449-14.97174254 25.1574362-11.29016649 39.2701443 3.55885684 14.1127081 14.60358492 25.2801554 28.71629304 29.08445065 14.1127081 3.80429523 29.20716983-0.36815759 39.3928635-10.92200889 85.04440628-84.18537188 86.8851943-221.14000013 3.92701445-307.53431764-7.36315206-7.73130965-17.54884573-12.1492009-28.34813545-12.39463929-10.6765705-0.24543839-21.10770258 3.80429523-28.83901222 11.16744728z m0 0"/><path d="M906.2967927 76.96043256c-10.06297449-10.55385128-24.9119978-14.84902331-39.0247059-11.29016647-14.1127081 3.55885684-25.1574362 14.35814651-29.08445063 28.34813541-3.92701445 13.98998892 0 28.96173142 10.30841288 39.27014431 98.29807997 100.75246399 97.07088798 262.00549406-2.8225416 361.28532765-15.83077691 15.70805773-15.95349615 41.35637071-0.12271922 57.06442846 15.70805773 15.83077691 41.35637071 15.95349615 57.18714764 0.12271918 131.18682583-130.32779144 132.78217545-342.26385151 3.55885683-474.80058854zM322.88971132 468.18924523c15.70805773-15.83077691 15.58533852-41.47908995-0.24543842-57.06442843-53.75101003-53.13741402-54.85548283-139.65445069-2.45438402-194.26449513 15.46261933-16.07621534 14.97174254-41.72452834-1.10447282-57.06442844-16.07621534-15.46261933-41.72452834-14.97174254-57.06442843 1.1044728-82.95817985 86.39431749-81.11739184 223.34894577 3.92701443 307.53431764 15.58533852 15.70805773 41.23365151 15.58533852 56.94170926-0.24543844z m247.89278594-61.35960045c39.3928635-26.261909 56.94170925-75.2268702 43.31987794-120.51025537-13.62183131-45.28338516-55.22364042-76.45406221-102.59325201-76.69950059-47.36961157-0.24543839-89.3395783 30.43436184-103.45228641 75.59502779s2.94526081 94.24834634 42.09268594 121.00113215L268.77054367 904.57872391c-7.60859047 20.98498335 3.19069923 44.05619317 24.17568261 51.7875028 20.98498335 7.60859047 44.05619317-3.31341839 51.78750281-24.17568261l38.4111099-105.41579361h254.51962281l39.27014428 107.99289684c6.99499447 18.89875693 27.85725863 28.71629305 46.75601559 21.84401778l7.36315205-2.69982244c18.89875693-6.99499447 28.71629305-27.85725863 21.84401778-46.75601555L570.78249726 406.82964478z m-60.5005661 70.19538295l48.84224202 134.25480584h-97.68448397l48.84224195-134.25480584z m-101.12062158 277.83627098l26.13918982-71.79073256h149.96286359l26.1391898 71.79073256H409.16130958z m0 0"/>
    </svg>
  )
}

Vue.component('icon-base-signal', Icon)
export default Icon
