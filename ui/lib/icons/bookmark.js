
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M857.32793567 13.45616795c10.0980371 0 19.82207283 1.99467401 28.92277295 5.984022 14.5860536 5.73468773 26.05542909 14.71072073 34.65746071 27.05276607s12.84071385 25.93076197 12.84071385 40.89081693v849.60645546c0 14.96005497-4.23868224 28.54877158-12.84071385 40.89081694-8.60203161 12.34204536-20.07140709 21.31807832-34.65746071 27.0527661-8.35269735 3.4906795-18.07673309 5.23601926-28.92277295 5.23601921-21.06874408 0-39.39481142-7.10602613-54.72886778-21.06874409l-290.47440078-279.62836091-290.723735 279.37902667C205.56820727 1003.43780594 187.24213992 1010.66849916 166.67206433 1010.66849916c-10.0980371 0-19.82207283-1.99467401-28.92277295-5.98402197-14.5860536-5.73468773-26.05542909-14.71072073-34.65746071-27.0527661-8.60203161-12.34204536-12.84071385-25.93076197-12.84071385-40.89081693V87.25910584c0-14.96005497 4.23868224-28.54877158 12.84071385-40.89081693 8.60203161-12.34204536 20.07140709-21.31807832 34.65746071-27.0527661 9.22536724-3.98934801 18.82473584-5.98402199 28.92277295-5.98402197h690.65587134v0.12466711z"/>
    </svg>
  )
}

Vue.component('icon-bookmark', Icon)
export default Icon

