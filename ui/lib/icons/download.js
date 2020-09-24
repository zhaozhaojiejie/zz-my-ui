
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 722.93677515V914.67481307c0 15.95739198-5.48535348 29.6707757-16.70539472 40.76614983-11.22004121 11.22004121-24.80875785 16.70539473-40.76614979 16.70539472H70.80304535c-15.95739198 0-29.6707757-5.48535348-40.76614979-16.70539472-11.22004121-11.22004121-16.70539473-24.80875785-16.70539472-40.76614983V722.93677515c0-15.95739198 5.48535348-29.6707757 16.70539472-40.76614981 11.22004121-11.22004121 24.80875785-16.70539473 40.76614979-16.70539472h278.75569103l80.90896401 81.53229961c23.18808522 22.44008246 50.24085129 33.53545658 81.53229961 33.53545658 31.29144834 0 58.34421441-11.22004121 81.53229961-33.53545658l81.53229963-81.53229961H953.32162177c15.95739198 0 29.6707757 5.48535348 40.76614978 16.70539472 10.84603987 11.34470836 16.58072759 24.93342495 16.58072761 40.76614981zM815.93845023 381.97218883c6.85669185 16.33139336 3.98934801 30.41877844-8.47736448 42.01282107L538.92809895 692.51799669c-7.23069324 7.60469461-16.08205908 11.34470836-26.92809895 11.34470837-10.84603987 0-19.82207283-3.74001377-26.92809895-11.34470837L216.41424712 423.9850099c-12.34204536-11.59404262-15.20938925-25.55676058-8.47736448-42.01282107 6.85669185-15.58339061 18.5754016-23.31275235 35.40546343-23.31275232h153.46523063V90.12644972c0-10.34737136 3.74001377-19.44807148 11.34470833-26.92809895s16.45606045-11.34470836 26.92809897-11.34470839h153.46523062c10.34737136 0 19.44807148 3.74001377 26.92809895 11.34470839s11.34470836 16.58072759 11.34470837 26.92809895V358.65943651h153.58989773c16.83006183 0 28.67343873 7.72936175 35.53013056 23.31275232z m-46.8748389 502.2838458c7.60469461-7.60469461 11.34470836-16.58072759 11.34470834-26.92809896s-3.74001377-19.44807148-11.34470834-26.92809894-16.58072759-11.34470836-26.92809897-11.34470838-19.44807148 3.74001377-26.92809896 11.34470838-11.34470836 16.58072759-11.34470834 26.92809894 3.74001377 19.44807148 11.34470834 26.92809896 16.45606045 11.34470836 26.92809896 11.34470835c10.34737136 0.12466711 19.44807148-3.74001377 26.92809897-11.34470835z m153.46523062 0c7.60469461-7.60469461 11.34470836-16.58072759 11.34470833-26.92809896s-3.74001377-19.44807148-11.34470833-26.92809894-16.58072759-11.34470836-26.92809897-11.34470838-19.44807148 3.74001377-26.92809895 11.34470838-11.34470836 16.58072759-11.34470836 26.92809894 3.74001377 19.44807148 11.34470836 26.92809896 16.45606045 11.34470836 26.92809895 11.34470835c10.34737136 0.12466711 19.32340434-3.74001377 26.92809897-11.34470835z"/>
    </svg>
  )
}

Vue.component('icon-download', Icon)
export default Icon

