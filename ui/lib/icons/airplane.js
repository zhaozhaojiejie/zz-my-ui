
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M992.59176606 31.53290105c20.81940983 24.6840907 23.68675371 59.71555277 8.60203161 105.34372045-15.08472209 45.50350055-40.89081692 86.39431749-76.919616 122.42311654l-114.69375477 114.56908768 114.07041918 495.05315255c2.36867538 8.97603298-0.49866851 16.95472896-8.60203162 23.43741947l-91.13166822 68.19291726c-3.24134525 2.8673439-7.85402885 4.23868224-13.46404949 4.23868224-1.87000687 0-3.4906795-0.24933424-4.86201787-0.74800274-7.23069324-1.49600549-12.0927111-5.23601926-14.96005497-11.34470836L591.91162699 591.5376256 407.77828367 775.67096893l37.64947169 137.88184003c2.36867538 8.1033631 0.49866851 15.33405633-5.73468774 21.94141398l-68.31758439 68.56691862c-4.23868224 4.23868224-9.72403573 6.48269049-16.2067262 6.48269049H353.67275152c-7.23069324-0.87266987-12.84071385-3.98934801-17.07939609-9.35003438l-134.64049479-179.27132544-179.27132543-134.26649341c-5.23601926-3.24134525-8.22803022-8.85136586-9.35003437-16.2067262-0.49866851-6.23335624 1.62067262-12.0927111 6.48269047-17.82739887l68.19291728-68.94092c4.23868224-4.23868224 9.72403573-6.48269049 16.20672622-6.48269048 2.8673439 0 4.73735075 0.24933424 5.73468773 0.74800275l137.88184004 37.6494717 184.1333433-184.13334332-360.78665912-198.96873117c-6.60735762-3.74001377-10.59670559-9.47470148-12.09271114-17.07939611-0.87266987-7.72936175 1.12200411-13.83805085 6.48269053-19.19873724l91.13166821-91.13166819c6.60735762-6.23335624 13.71338369-8.1033631 21.44274545-5.73468777l473.11173856 113.0730822 113.82108496-113.82108491c36.02879907-36.02879907 76.919616-61.58555964 122.42311655-76.919616 45.12949917-14.96005497 80.41029549-11.968044 105.09438618 8.85136584z"/>
    </svg>
  )
}

Vue.component('icon-airplane', Icon)
export default Icon

