
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M419.74632767 396.30890818c-17.57806461 0-31.79011683 15.70805773-31.79011685 35.1561292v60.96222403c0 19.44807148 14.21205224 35.1561292 31.79011685 35.1561292s31.79011683-15.70805773 31.7901168-35.1561292v-60.96222403c0.12466711-19.44807148-14.21205224-35.1561292-31.7901168-35.1561292z m0 0"/><path d="M582.68625975 396.30890818c-17.57806461 0-31.79011683 15.70805773-31.79011681 35.1561292v60.96222403c0 19.44807148 14.21205224 35.1561292 31.79011681 35.1561292s31.79011683-15.70805773 31.79011683-35.1561292v-60.96222403c0-19.44807148-14.21205224-35.1561292-31.79011683-35.1561292z m0 0"/><path d="M989.47508796 395.68557256c-41.51415256-230.38484662-240.23354946-370.88469626-451.29499177-379.36206073-36.40280044-2.99201098-74.55094061-2.11934113-114.19508629 3.86468085-74.3016064 11.0953741-133.89249202 37.27547033-181.26599945 68.94092003-54.60420067 34.90679495-126.78646591 93.9990121-167.5526157 180.39332958-71.55892963 151.59522375-51.98619102 242.3528906-27.55143461 334.35722868C71.80038236 694.5126707 193.97416464 827.40782574 287.59917535 886.50004289c93.5003436 59.09221716 207.32142853 108.58506571 222.03214927 122.54778365 0 0 159.94792114-74.55094061 270.02899232-156.20790735 110.08107119-81.65696675 252.45092771-220.66081089 209.81477102-457.15434663zM673.94259512 690.89732408H373.12082299s-93.87434498-7.23069324-102.72571084-104.59571768v-249.33424962s5.85935485-74.55094061 91.0070011-93.12634223l-0.37400138-1.62067259 134.51582768-0.4986685 46.37617038 0.74800273h1.8700069l64.32823637 0.997337c13.71338369 0.37400136 26.55409758 0.99733698 35.15612921 1.87000689 27.92543595 2.8673439 88.0149901 32.91212094 86.64365173 111.82641093-1.49600549 78.78962288 0 256.56494284 0 256.56494282l35.2807963 94.62234771-91.25633532-17.45339746z m0 0"/>
    </svg>
  )
}

Vue.component('icon-momo', Icon)
export default Icon

