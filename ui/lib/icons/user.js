
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M927.51552691 838.62786695c0 47.2488403-13.46404948 87.64098874-40.51681552 121.42577956S827.28315862 1010.66849916 789.25968555 1010.66849916H234.74031445c-38.14814019 0-70.68625975-16.95472896-97.73902584-50.61485265-27.05276608-33.78479083-40.51681555-74.3016064-40.51681552-121.42577956 0-36.77680182 1.74533977-71.55892963 5.48535346-104.22171634 3.74001377-32.66278669 10.47203848-65.57490761 20.44540848-98.73636283 9.97336998-33.03678807 22.68941672-61.46089255 38.02347305-85.02297911s35.77946482-42.88549093 61.08689117-57.72087878c25.30742634-14.83538786 54.47953352-22.44008246 87.39165447-22.44008245 56.72354179 55.47687053 124.41779055 83.15297224 203.20741339 83.15297225s146.48387165-27.67610172 203.20741345-83.15297225c32.91212094 0 61.95956103 7.48002749 87.39165445 22.44008245 25.30742634 14.83538786 45.62816768 34.15879219 61.08689115 57.72087878 15.33405633 23.68675371 28.05010309 51.86152393 38.02347306 85.02297911 9.97336998 33.03678807 16.83006183 65.948909 20.44540846 98.73636283 3.4906795 32.66278669 5.23601926 67.44491451 5.23601923 104.22171634zM688.27931447 86.38643594C737.02416025 135.13128176 761.33424957 193.84949755 761.33424957 262.66575043s-24.31008934 127.53446866-73.0549351 176.27931446S580.8162529 512 512 512s-127.53446866-24.31008934-176.27931447-73.05493511S262.66575043 331.48200331 262.66575043 262.66575043s24.31008934-127.53446866 73.0549351-176.27931449S443.1837471 13.33150084 512 13.33150084s127.53446866 24.31008934 176.27931447 73.0549351z"/>
    </svg>
  )
}

Vue.component('icon-user', Icon)
export default Icon

