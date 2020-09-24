
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M971.02435349 317.89328669c26.30476334 61.46089255 39.64414567 126.03846318 39.64414567 193.73271195s-13.21471524 132.39648654-39.64414567 194.10671331c-26.30476334 61.58555964-61.83489391 114.81842194-106.0917232 159.19991834-44.38149645 44.50616358-97.36502446 79.78695987-159.07525123 106.21639034C644.14715228 997.32911683 579.56958162 1010.66849916 512 1010.66849916s-132.2718194-13.21471524-193.85737906-39.51947853c-61.71022676-26.18009619-114.69375481-61.58555964-159.07525123-106.21639034-44.38149645-44.38149645-79.78695987-97.36502446-106.0917232-159.19991834C26.54621606 644.02248515 13.33150084 579.3202474 13.33150084 511.62599864c0-67.81891589 13.21471524-132.2718194 39.64414567-193.73271195s61.71022676-114.44442056 106.0917232-158.82591698 97.36502446-79.78695987 159.07525123-106.21639034C379.85284772 26.67088317 444.43041838 13.33150084 512 13.33150084s132.2718194 13.21471524 193.85737906 39.51947853c61.71022676 26.18009619 114.69375481 61.58555964 159.07525123 106.21639034 44.25682929 44.38149645 79.66229274 97.36502446 106.0917232 158.82591698zM216.41424712 705.1093763l490.3158018-487.8224593c-58.46888151-39.2701443-123.29578643-58.84288291-194.73004892-58.84288292-64.07890214 0-123.17111928 15.83272485-177.27665147 47.2488403-54.10553214 31.29144834-96.99102308 74.42627351-128.53180562 128.65647279s-47.3735074 113.5717507-47.37350744 177.40131859c-0.24933424 69.81358987 18.94940295 134.39116051 57.59621165 193.35871054z m648.76771741-193.48337766c0-69.43958851-18.82473584-133.01982216-56.59887463-190.86536807L319.01529083 807.83508715c59.21688427 38.39747444 123.66978778 57.47154451 192.86004206 57.47154451 48.12151017 0 93.87434498-9.47470148 137.38317149-28.17477017 43.50882652-18.70006874 81.15829824-44.00749505 112.69908083-75.42361054 31.54078257-31.41611544 56.72354179-69.19025424 75.4236105-112.94841505 18.45073446-43.38415943 27.80076882-89.1369942 27.80076882-137.13383726z"/>
    </svg>
  )
}

Vue.component('icon-no', Icon)
export default Icon
