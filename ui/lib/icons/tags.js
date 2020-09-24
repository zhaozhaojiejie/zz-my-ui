
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M808.95709127 584.80560085c0 18.5754016-6.48269049 34.28345931-19.44807148 47.24884032L531.57273859 890.36472376c-13.71338369 12.96538097-29.6707757 19.44807148-47.87217593 19.44807146-18.5754016 0-34.28345931-6.48269049-47.24884029-19.44807146L61.07900963 514.49334249c-13.33938234-12.96538097-24.6840907-30.66811272-33.90945793-52.98352803S13.33150084 418.62432355 13.33150084 400.04892194V181.50745217c0-18.20140024 6.60735762-33.90945792 19.94673994-47.2488403s29.04744009-19.94673996 47.24884031-19.94673993h218.54146976c18.5754016 0 39.02081006 4.73735075 61.3362254 13.96271793 22.44008246 9.22536724 40.26748132 20.44540846 53.48219654 33.90945798l375.49737987 374.87404423c12.96538097 13.71338369 19.57273859 29.54610856 19.57273861 47.74750877zM229.00562674 329.98599781c13.21471524-13.21471524 19.57273859-29.04744009 19.57273858-47.49817454 0-18.5754016-6.48269049-34.28345931-19.57273858-47.49817458-13.21471524-13.21471524-29.04744009-19.57273859-47.49817457-19.57273859s-34.28345931 6.48269049-47.49817454 19.57273859c-13.21471524 13.21471524-19.57273859 29.04744009-19.57273861 47.49817458 0 18.5754016 6.48269049 34.28345931 19.57273861 47.49817454 13.21471524 13.21471524 29.04744009 19.57273859 47.49817454 19.57273857s34.28345931-6.60735762 47.49817457-19.57273857z m781.66287242 254.81960304c0 18.5754016-6.48269049 34.28345931-19.44807148 47.24884032L733.28414651 890.36472376c-13.71338369 12.96538097-29.6707757 19.44807148-47.87217592 19.44807146-12.5913796 0-22.93875097-2.36867538-31.04211409-7.35536037-8.1033631-4.86201785-17.32873034-12.84071385-27.8007688-23.6867537l246.84090709-246.8409071c12.96538097-12.96538097 19.44807148-28.67343873 19.44807144-47.2488403 0-18.20140024-6.48269049-34.15879219-19.44807144-47.8721759L497.91261489 162.05938071c-13.33938234-13.33938234-31.1667812-24.6840907-53.48219651-33.90945795-22.44008246-9.22536724-42.88549093-13.96271799-61.3362254-13.96271798h117.56109866c18.5754016 0 39.02081006 4.73735075 61.33622541 13.96271798 22.44008246 9.22536724 40.26748132 20.44540846 53.48219652 33.90945795L990.97109346 536.93342495c13.21471524 13.83805085 19.69740571 29.6707757 19.6974057 47.8721759z"/>
    </svg>
  )
}

Vue.component('icon-tags', Icon)
export default Icon
