
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 209.30822101v605.5082251c0 15.58339061-7.23069324 26.55409758-21.69207972 32.91212095-4.73735075 1.87000687-9.47470148 2.8673439-13.96271796 2.86734387-10.0980371 0-18.32606734-3.4906795-25.05809207-10.47203847L725.80411903 615.47371357v92.37833948c0 44.13216216-15.70805773 81.90630099-46.99950604 113.32241645-31.41611544 31.41611544-69.06558715 46.99950605-113.32241646 46.99950603H173.6534233c-44.13216216 0-81.90630099-15.70805773-113.32241643-46.99950603-31.41611544-31.41611544-46.99950605-69.06558715-46.99950603-113.32241645V316.14794695c0-44.13216216 15.70805773-81.90630099 46.99950603-113.32241645s69.06558715-46.99950605 113.32241643-46.99950603h391.70410612c44.13216216 0 81.90630099 15.70805773 113.32241644 46.99950603 31.41611544 31.41611544 46.99950605 69.06558715 46.99950602 113.32241645v91.87967097l224.27615753-223.65282187c6.73202476-6.98135898 14.96005497-10.47203848 25.05809207-10.47203847 4.4880165 0 9.10070011 0.99733698 13.96271796 2.86734385 14.46138647 5.98402199 21.69207971 16.95472896 21.69207972 32.53811958z"/>
    </svg>
  )
}

Vue.component('icon-vcr', Icon)
export default Icon
