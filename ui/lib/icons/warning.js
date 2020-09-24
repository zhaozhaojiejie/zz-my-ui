
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M573.41607103 92.91885498l420.69432511 771.33054295c12.79021368 23.04543003 12.44453222 45.97563289-1.15227149 69.02106294-6.22226611 10.60089782-14.74907522 19.01247979-25.46520019 25.2347459-10.83135211 6.22226611-22.35406713 9.33339915-34.79859934 9.33339915H91.19044772c-12.44453222 0-23.96724723-3.11113303-34.79859935-9.33339915-10.83135211-6.22226611-19.24293406-14.63384807-25.46520015-25.2347459-13.48157656-23.04543003-13.82725801-45.97563289-1.15227151-69.02106294l420.80955226-771.4457701c6.22226611-11.2922607 14.74907522-20.27997843 25.69565451-26.84792598 10.94657926-6.56794756 22.81497572-9.90953491 35.60518938-9.90953492s24.65861012 3.34158736 35.60518939 9.90953492c11.06180643 6.68317471 19.70384266 15.67089241 25.92610878 26.96315313z m7.60499189 511.83900088l9.90953493-251.4256416c0-4.3786317-1.84363441-7.83544623-5.53090323-10.37044349-4.72431315-4.03295026-9.10294486-5.99181181-13.1358951-5.99181183H451.73620048c-4.03295026 0-8.41158197 1.95886155-13.1358951 5.99181183-3.68726882 2.53499729-5.53090321 6.33749325-5.53090323 11.52271502l9.33339917 250.38859721c0 3.68726882 1.84363441 6.68317471 5.53090321 8.98771771 3.68726882 2.41977013 8.06590051 3.57204166 13.1358951 3.57204166h101.39989213c5.0699946 0 9.44862631-1.15227152 12.90544082-3.57204166 3.34158736-2.41977013 5.30044889-5.64613038 5.64613034-9.10294485z m1.15227151 204.87387293V705.58161223c0-5.0699946-1.72840725-9.44862631-5.18522177-12.90544082s-7.60499189-5.18522176-12.32930505-5.18522177h-105.20238806c-4.72431315 0-8.87249057 1.72840725-12.32930508 5.18522177s-5.18522176 7.72021905-5.18522177 12.90544082v104.05011656c0 5.0699946 1.72840725 9.44862631 5.18522177 12.9054408s7.60499189 5.18522176 12.32930508 5.18522178h105.20238806c4.72431315 0 8.87249057-1.72840725 12.32930505-5.18522178s5.18522176-7.83544623 5.18522177-12.9054408z"/>
    </svg>
  )
}

Vue.component('icon-warning', Icon)
export default Icon
