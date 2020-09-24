
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1983.09251093 3073.44293013c0 0-5.63688 26.4138528-24.01459306 37.11190507 0 0 37.0108544 0.3329152 53.48704853-29.47121813"/><path d="M508.059424 191.6107424c-221.86755307 0-414.17096 129.22365227-508.65310293 317.89402773C93.8895552 698.20679893 286.19186987 827.39988907 508.059424 827.39988907S922.19872747 698.20679893 1016.71252587 509.50477013C922.23038293 320.83439573 729.92806827 191.6107424 508.059424 191.6107424M758.8569216 360.18938773c59.76686507 38.1150176 110.40927573 89.2017376 148.4625824 149.3153824-38.05330667 60.1136448-88.6968096 111.1992736-148.4625824 149.3470368-75.0903584 47.90710293-161.81469653 73.17921813-250.7974976 73.17921814s-175.7082304-25.2721152-250.7974976-73.17921814c-59.76686507-38.1477632-110.40927573-89.233392-148.4625824-149.3470368 38.05330667-60.0819904 88.6968096-111.1992736 148.4625824-149.3153824 3.87835733-2.4799488 7.82002453-4.86384213 11.79444053-7.21608213-9.91911893 27.11679573-15.32349333 56.42646827-15.32349333 87.0077696 0 140.47729173 113.87501867 254.31587627 254.32655147 254.31587627s254.32655147-113.83749333 254.32655146-254.31587627c0-30.58130133-5.40437547-59.85931947-15.29183786-86.9761152C751.036896 355.3266368 754.97856427 357.71053013 758.8569216 360.18938773M508.059424 408.1914528c0 52.67489173-42.694672 95.36886293-95.37286613 95.36886293s-95.37286613-42.69288-95.37286614-95.36886293c0-52.64323733 42.694672-95.36886293 95.37286614-95.36886293S508.059424 355.54821653 508.059424 408.1914528"/>
    </svg>
  )
}

Vue.component('icon-eye-open', Icon)
export default Icon
