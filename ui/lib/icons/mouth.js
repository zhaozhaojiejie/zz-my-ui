
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M32 528.63999969l91.24571437 1.60000031 4.0228575-0.36571406c41.59999969-4.11428531 88.5028575-12.79999969 137.0971425-21.94285781 71.68000031-13.48571438 145.78285687-27.42857156 207.72571407-27.42857063 24.91428562 0 75.0628575 12.06857156 123.56571468 23.77142812 65.37142875 15.77142844 132.98285719 32.09142844 182.94857157 32.27428594 49.78285688-0.1828575 117.39428531-16.45714313 182.76571406-32.27428594 48.50285719-11.7028575 98.65142812-23.77142812 123.56571375-23.77142812 61.94285719 0 135.90857156 13.94285719 207.40571437 27.42857062 54.49142812 10.24000031 106.87999969 20.06857125 152.045715 23.26857188l94.71999938 17.64571406c-11.06285719 14.76571406-26.28571406 25.60000031-43.79428594 37.80571407-36.02285719 25.1428575-96.36571406 67.15428562-185.91999937 187.97714343-57.46285687 77.5771425-198.21714281 208.00000031-496.45714313 212.84571375-1.7371425 0.27428531-3.47428594 0.22857188-5.16571406 0.27428625l-14.90285719 2.05714313-14.44571437 2.19428531h-0.36571407c-1.64571469 0-3.33714281-2.14857188-4.93714312-2.42285719-127.22285719-2.23999969-240.45714281-30.62857125-336.64000031-82.92571406-91.51999969-49.69142813-140.61714281-108.61714313-157.48571438-131.38285688-94.67428594-127.90857188-152.8228575-168-187.56571406-191.81714343-15.49714313-10.60571437-29.02857187-20.16-38.99428594-33.50857125A30.81142875 30.81142875 0 0 1 32 528.63999969zM43.79428531 474.97142844c19.56571406-29.76 58.97142844-58.7428575 107.10857156-94.03428563 50.28571406-36.89142844 112.82285719-82.83428531 165.07428563-139.24571437l12.38857219-13.44C409.14285687 140.84571406 509.57714281 32 608.27428531 32c21.39428531 0 43.70285719 11.47428563 69.485715 24.7771425 33.09714281 16.96000031 70.53714281 36.25142813 112.86857156 37.21142906 40.96000031-0.96 78.44571469-20.25142875 111.49714219-37.21142906C927.95428531 43.42857125 950.21714281 32 971.61142812 32c98.74285688 0 199.31428594 108.93714281 280.04571469 196.43428594l12.25142906 13.2571425c52.66285687 56.86857188 116.47999969 102.99428531 167.77142813 140.11428562 50.33142844 36.43428563 89.4628575 64.86857156 108.48 94.17142875a16.73142844 16.73142844 0 0 1 0.41142844 0.22857188l-94.62857157-6.85714313c-40.86857156-3.15428531-90.78857156-12.43428562-142.71999937-22.2628575-74.19428531-13.98857156-150.85714312-28.43428594-218.285715-28.43428593-31.90857187 0-80.73142875 11.79428531-137.28 25.41714375-59.24571469 14.30857125-126.35428594 30.49142812-169.05142781 30.62857125-42.92571469-0.13714313-110.03428594-16.32-169.23428625-30.62857125-56.54857125-13.6228575-105.37142813-25.41714281-137.28-25.41714375-67.3828575 0-144.22857188 14.44571437-218.56000032 28.43428593-50.65142813 9.50857125-99.42857156 18.65142844-139.74857062 22.08l0.68571375-0.59428593c-17.82857156 5.02857187-46.17142875 8.41142812-70.67428594 6.40000031z"/>
    </svg>
  )
}

Vue.component('icon-mouth', Icon)
export default Icon
