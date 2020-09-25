
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M88.37331825 462.42144281v-1.7180688c-32.39786905 38.1656715-62.0959157 88.60326312-65.28661489 145.54497233-15.0944617 90.8122087 58.29162045 181.62441744 156.58970043 234.63911226 7.60859047 30.31164263-27.61182023 83.20361826-27.61182022 83.20361825-15.0944617 7.48587126 8.83578246 7.48587126 8.83578246 7.48587127 53.01469482 0 114.12885691-45.40610434 144.31778034-68.10915656 81.60826867 7.36315206 153.15356281-10.6765705 215.9857937-46.26513875-234.63911226-13.74455052-432.83062181-169.72065494-432.83062182-354.78121z m0 0"/><path d="M1001.89505027 447.20426186c0-196.71887915-196.71887915-355.76296362-446.32973394-355.76296357-249.61085479 0-446.32973391 159.04408446-446.3297339 355.76296357C109.23558243 636.4372698 305.83174236 795.48135423 547.95672589 795.48135423c37.7975139 37.7975139 151.3127748 121.12385134 234.51639303 121.12385138 0 0 37.7975139 7.60859047 22.70305217-15.09446174 0 0-67.98643735-83.20361826-52.8919756-136.21831307 151.3127748-60.74600447 249.61085479-181.74713663 249.61085478-318.08816894z m-197.94607115-97.07088794c0 16.68981132-13.49911207 30.31164263-30.18892345 30.31164264H769.71032201c-16.68981132 0-30.18892346-13.49911207-30.1889234-30.31164264v-4.04973363c0-16.68981132 13.49911207-30.31164263 30.1889234-30.31164264h4.04973366c16.68981132 0 30.18892346 13.49911207 30.18892345 30.31164264v4.04973363zM670.06233084 560.71952279c0 15.21718091-23.68480578 45.89698115-46.38785798 45.89698114h-7.60859045c-22.70305218 0-42.95172034-30.67980024-42.95172032-45.89698114V409.40674799c0-6.99499447-1.84078801-28.96173142-9.9402553-28.96173143h-54.73276363v180.39722543c0 15.21718091-5.76780243 45.89698115-20.98498335 45.89698116h-15.09446173c-15.0944617 0-28.47085461-30.67980024-28.4708546-45.89698116V409.40674799c0-15.0944617-9.32665927-28.96173142-24.42112102-28.96173143h-40.25189791v180.39722543c0 15.21718091-20.24866818 45.89698115-35.46584908 45.89698116h-15.09446173c-15.0944617 0-46.38785797-30.67980024-46.38785794-45.89698116V333.68900101c0-15.0944617 31.17067705-17.91700336 53.99644842-17.91700336h257.096726c45.40610434 0 76.57678139 33.01146507 76.57678142 55.71451725v189.23300789z m129.22331861 15.58533852c0 16.68981132-13.49911207 30.31164263-30.18892344 30.31164262h-4.04973361c-16.68981132 0-30.18892346-13.49911207-30.18892342-30.31164262V443.03180905c0-16.68981132 13.49911207-30.31164263 30.18892342-30.31164262h4.04973361c16.68981132 0 30.18892346 13.49911207 30.18892344 30.31164262v133.27305226z m0 0"/>
    </svg>
  )
}

Vue.component('icon-mitalk', Icon)
export default Icon

