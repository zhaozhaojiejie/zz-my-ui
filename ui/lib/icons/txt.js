
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M776.91764018 246.20968994H922.15484055L776.91764018 100.97248954v145.2372004z m198.71939693-16.95472895c21.56741259 21.56741259 33.53545658 50.73951981 33.53545657 81.15829822v632.68565832c0 36.52746757-29.92010993 66.32291038-66.32291038 66.32291038H279.1218109c-36.52746757 0-66.32291038-29.92010993-66.3229104-66.32291038v-49.74218277h49.74218278v49.74218277c0 8.97603298 7.60469461 16.58072759 16.58072762 16.58072761h663.60310524c8.97603298 0 16.58072759-7.60469461 16.5807276-16.58072761V310.41325921c0-4.86201785-0.62333562-9.72403573-1.74533971-14.33671936H727.17545737v-230.63418087c-4.73735075-1.12200411-9.47470148-1.62067262-14.33671932-1.7453397H279.1218109c-8.97603298 0-16.58072759 7.60469461-16.58072762 16.58072757v149.35121548H212.7989005V80.27774685c0-36.52746757 29.92010993-66.32291038 66.3229104-66.32291039H712.71407092c30.41877844 0 59.59088564 12.0927111 81.15829823 33.66012368l181.76466796 181.64000085zM660.72787986 470.23651321v-49.74218283h232.25485351v49.74218283H660.72787986z m0 149.35121549v-49.7421828h232.25485351v49.7421828H660.72787986z m0 149.35121548v-49.74218274h232.25485351v49.74218274H660.72787986z m-647.02237765 74.55094064V279.37114514h564.11873971v564.11873968H13.70550221z m427.60823804-409.90550632v-49.7421828H150.21600385v49.7421828h116.43909456v305.55912286h58.21954728V433.5843785h116.43909456z m0 0"/>
    </svg>
  )
}

Vue.component('icon-txt', Icon)
export default Icon

