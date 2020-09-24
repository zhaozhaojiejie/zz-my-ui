
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 971.14902063c1.12200411 10.0980371-2.24400826 20.07140709-8.85136584 27.80076881-6.73202476 7.23069324-16.70539473 11.71870973-26.67876472 11.71870972H48.98629852c-10.0980371 0-20.07140709-4.4880165-26.6787647-11.71870972-6.73202476-7.85402885-10.0980371-17.82739884-8.85136587-27.80076881l19.44807148-174.15997335h958.19152114L1010.66849916 971.14902063z m-23.43741947-209.93943817H36.6442532l47.8721759-431.34825178c2.24400826-17.82739884 17.20406323-31.6654497 35.53013055-31.66544971H262.66575043v71.30959542c0 39.51947857 31.6654497 71.30959537 71.30959538 71.30959535s71.30959537-31.6654497 71.30959536-71.30959535v-71.30959542h213.6794519v71.30959542c0 39.51947857 31.6654497 71.30959537 71.30959541 71.30959535s71.30959537-31.6654497 71.30959536-71.30959535v-71.30959542h142.49452362c18.32606734 0 33.41078948 13.96271799 35.53013057 31.66544971l47.62284166 431.34825178zM725.67945188 369.50547639c0 19.44807148-16.20672625 35.53013056-35.53013055 35.53013054-19.44807148 0-35.53013056-16.20672625-35.53013054-35.53013054V227.01095272c0-78.4156215-64.07890214-142.49452361-142.49452368-142.49452362s-142.61919079 63.95423502-142.61919072 142.49452362v142.49452367c0 19.44807148-16.20672625 35.53013056-35.53013058 35.53013054-19.44807148 0-35.53013056-16.20672625-35.53013057-35.53013054V227.01095272c0-117.93510005 95.74435184-213.67945188 213.67945187-213.67945188s213.67945188 95.74435184 213.67945192 213.67945188l-0.12466715 142.49452367z"/>
    </svg>
  )
}

Vue.component('icon-handbag', Icon)
export default Icon
