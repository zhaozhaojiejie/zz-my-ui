
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M993.5872 551.936c-36.0448-33.28-89.1904-36.2496-125.2352-3.0208l-103.168 95.0272c-26.8288 24.7296-59.1872 24.7808-78.08 4.2496-12.4928-13.6192-7.5776-55.6032-4.096-82.2272l51.7632-391.9872c4.608-35.0208-22.4256-68.864-60.416-73.1136-37.9904-4.2496-72.5504 22.6816-77.1584 57.6512L540.1088 466.432c-2.9696 7.68-9.3696 8.96-10.0864-1.3312l-19.456-400.1792C510.6176 29.6448 479.6416 1.0752 441.344 1.0752c-38.2464 0-69.2736 28.5696-69.2736 63.8464l-1.3824 403.1488c0.3584 4.6592-3.9424 5.9904-4.7616 0.7168L304.2304 154.0608C297.472 119.296 261.376 94.3104 223.744 100.5568c-37.632 6.2464-62.6688 41.472-55.8592 76.1856l54.8864 368.2816c0.0512 6.5536-2.304 10.2912-5.6832 1.8944l-81.92-201.8816c-12.8-33.28-52.4288-52.6336-88.5248-40.8064-36.0448 11.776-54.8864 50.3296-42.0864 83.5584l143.5648 432.5376 2.3552 7.1168 0.3072 0.8704 0.1024 0.2048c39.7824 112.8448 154.7776 194.4576 290.4576 194.4576 86.8864 0 177.152-28.2624 245.8112-76.8 74.24-41.216 311.9104-276.8384 311.9104-276.8384 36.0448-33.28 30.72-84.1728-5.4272-117.4016z"/>
    </svg>
  )
}

Vue.component('icon-hand', Icon)
export default Icon
