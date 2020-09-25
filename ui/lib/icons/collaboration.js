
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M511.50912319 267.05247487c0-65.28661491-24.54384019-126.5234962-69.33634855-171.43872377-48.96496117-48.96496117-106.15210883-73.50880138-175.48845737-73.50880137-65.28661491 0-126.5234962 24.54384019-171.43872373 73.50880137-48.96496117 44.91522756-73.50880138 106.15210883-73.5088014 171.43872377 0 69.33634854 24.54384019 126.5234962 73.5088014 175.48845739 36.69304111 36.69304111 81.60826867 61.23688129 130.57322981 69.33634855v134.62296346c-24.54384019 8.22218645-48.96496117 20.37138737-69.33634857 40.86549391-32.64330744 36.69304111-53.01469482 81.60826867-53.0146948 130.57322983 0 53.01469482 20.37138737 93.88018874 53.0146948 130.57322984 36.69304111 36.69304111 81.60826867 53.01469482 130.57322985 53.01469482 53.01469482 0 93.88018874-16.32165372 130.57322983-53.01469482 36.69304111-36.69304111 53.01469482-77.55853502 53.01469483-130.57322984 0-12.2719201 0-28.59357384-4.04973363-40.86549392l297.96221995-179.53819103c24.54384019 24.54384019 57.18714765 36.69304111 93.88018874 36.69304109 40.86549393 0 73.50880138-12.2719201 101.97965599-40.86549393 28.59357384-28.59357384 40.86549393-61.23688129 40.86549391-101.97965599 0-36.69304111-12.2719201-73.50880138-40.86549391-101.97965601-28.59357384-24.54384019-61.23688129-40.86549393-101.97965599-40.86549388-36.69304111 0-73.50880138 16.32165372-101.97965602 40.86549388 0 4.17245283-4.04973365 8.22218645-8.22218645 12.2719201l-236.72533869-97.92992235v-36.6930411z m-28.5935738 118.42402893L719.64088804 475.1842397c-4.04973365 8.09946725-4.04973365 12.2719201-4.04973364 16.32165375 0 16.32165372 4.04973365 28.59357384 8.22218645 40.86549392L425.72840171 699.63765828c-4.04973365-4.17245283-8.22218645-8.22218645-8.22218645-12.2719201-32.64330744-28.47085461-65.28661491-44.91522756-110.20184248-48.96496119V512c53.01469482-8.22218645 93.88018874-32.64330744 134.62296346-69.33634854 16.44437294-20.49410655 32.76602665-36.8157603 40.98821315-57.18714766z m0 0"/>
    </svg>
  )
}

Vue.component('icon-collaboration', Icon)
export default Icon

