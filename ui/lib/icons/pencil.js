
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M560.99418004 189.1121468L834.8878532 463.00581996 287.225174 1010.66849916H13.33150084V736.774826L560.99418004 189.1121468zM252.31837906 926.39352281l59.96488702-59.96488703-154.58723474-154.58723474-59.96488702 59.96488702v70.43692551h84.27497637v84.15030924h70.31225837z m344.33059868-610.86891149c0-9.72403573-4.86201785-14.5860536-14.5860536-14.5860536-4.4880165 0-8.22803022 1.49600549-11.22004123 4.61268362L214.17023889 662.47321962c-2.99201098 2.99201098-4.61268362 6.73202476-4.61268364 11.22004123 0 9.72403573 4.86201785 14.5860536 14.58605359 14.58605362 4.4880165 0 8.22803022-1.49600549 11.22004123-4.61268361l356.79731115-356.79731119c2.8673439-3.11667812 4.4880165-6.85669185 4.48801652-11.34470835zM1010.66849916 252.44304619c0 23.31275235-8.22803022 43.01015805-24.31008931 59.21688425l-109.20840135 109.20840132-273.89367317-273.76900604 109.20840134-108.70973281c15.83272485-16.58072759 35.53013056-25.05809208 59.21688427-25.05809207 23.31275235 0 43.13482517 8.35269735 59.96488703 25.05809207l154.58723475 154.08856624c16.20672625 17.20406323 24.43475647 37.15080319 24.43475644 59.96488704z"/>
    </svg>
  )
}

Vue.component('icon-pencil', Icon)
export default Icon

