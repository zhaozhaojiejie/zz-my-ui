
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M718.19942441 14.45350494v182.38800359c0 23.81142086 19.1987372 43.13482517 43.13482516 43.13482516h179.76999397L718.19942441 14.45350494z"/><path d="M761.33424957 284.48249725c-48.37084443-0.12466711-87.64098874-39.39481142-87.64098872-87.76565587V13.95483646H160.18937384c-42.6361567 0-77.29361737 34.53279357-77.29361738 77.29361736v841.37842525c0 42.6361567 34.53279357 77.29361737 77.29361738 77.29361735h703.24725097c42.6361567 0 77.29361737-34.53279357 77.29361736-77.29361735v-648.26904894H761.33424957zM685.16263633 676.56060473h-0.87266986v7.35536036c0 1.99467401 0 3.98934801-0.62333561 6.1086891 0 1.99467401 0 3.98934801-0.62333564 6.73202476-8.1033631 46.87483897-46.12683615 85.14764624-85.77098186 85.14764622-39.39481142 0-64.32823639-38.14814019-55.60153766-85.14764622 8.1033631-46.87483897 46.12683615-85.14764624 85.77098185-85.14764624 1.99467401 0 3.36601233 0.62333562 4.73735076 0.62333563V406.03294393L389.8262177 446.79909373v275.26501154c0 6.73202476 0 13.46404948-1.37133837 20.19607422-8.1033631 46.87483897-46.12683615 85.14764624-85.77098186 85.14764625-38.77147581 0-64.32823639-38.14814019-55.60153765-85.14764625 8.1033631-46.87483897 46.12683615-85.14764624 85.77098185-85.14764625 1.99467401 0 3.36601233 0.62333562 4.73735076 0.62333565V424.73301264c0-12.71604672 9.35003436-24.18542221 22.19074819-26.18009618l294.58841588-50.24085129c7.35536036-1.37133838 15.45872346 0.62333562 21.44274548 5.98402195 5.98402199 5.36068635 9.35003436 12.0927111 9.35003435 20.19607423V676.56060473z"/>
    </svg>
  )
}

Vue.component('icon-audio', Icon)
export default Icon

