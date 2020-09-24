
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 345.94338981c0 6.60735762-3.11667812 11.0953741-9.47470149 13.46404944L516.36334937 511.75066576c-1.12200411 0.37400136-2.6180096 0.49866851-4.36334937 0.49866848s-3.11667812-0.12466711-4.36334937-0.49866848l-282.24637054-89.26166136c-12.34204536 9.84870286-22.68941672 25.93076197-30.66811267 48.24617728-8.1033631 22.31541534-12.96538097 48.12151017-14.71072076 77.29361739 18.20140024 10.34737136 27.17743319 26.18009619 27.17743323 47.12417317 0 19.94673996-8.35269735 35.40546344-25.05809211 46.25150329l25.05809211 187.37468857c0.62333562 3.98934801-0.62333562 7.60469461-3.49067949 10.72137274-2.6180096 3.11667812-6.10868914 4.73735075-10.34737139 4.73735073h-83.02830508c-4.36334937 0-7.85402885-1.62067262-10.34737138-4.73735073-2.8673439-3.11667812-3.98934801-6.73202476-3.49067946-10.72137274L121.79189941 641.40447553c-16.83006183-10.970707-25.05809208-26.55409758-25.0580921-46.25150329 0-21.06874408 9.35003436-37.15080319 28.1747702-47.99684304 3.11667812-59.84021991 17.32873034-107.33839444 42.51148955-142.86852501l-144.3645305-44.88016494c-6.35802337-2.36867538-9.47470148-6.73202476-9.47470148-13.46404944 0-6.60735762 3.11667812-11.0953741 9.47470148-13.46404951l484.8304483-152.34322652c1.12200411-0.37400136 2.6180096-0.49866851 4.36334938-0.49866848s3.11667812 0.12466711 4.36334938 0.49866848L1001.19379767 332.4793403c6.35802337 2.36867538 9.47470148 6.85669185 9.47470149 13.46404951zM781.28098955 486.19390517l7.85402887 136.75983589c1.12200411 19.94673996-10.59670559 38.39747444-35.53013057 55.47687054-24.93342495 16.95472896-58.71821579 30.41877844-101.72837382 40.51681554-43.01015805 9.97336998-89.5109956 14.96005497-139.75184692 14.96005499s-96.86635594-4.98668499-139.75184687-14.96005499c-43.01015805-9.97336998-76.79494889-23.31275235-101.72837383-40.51681554-24.93342495-16.95472896-36.65213467-35.53013056-35.53013058-55.47687054l7.85402888-136.75983589 248.46157968 78.41562149c6.35802337 2.11934113 13.33938234 2.99201098 20.81940985 2.99201101s14.46138647-0.87266987 20.81940984-2.99201101L781.28098955 486.19390517z"/>
    </svg>
  )
}

Vue.component('icon-doctor-hat', Icon)
export default Icon

