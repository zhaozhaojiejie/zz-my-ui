
/**
 * 该文件由 .sp/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1010.66849916 742.13551236v191.86270506c0 15.95739198-5.48535348 29.6707757-16.70539472 40.76614982-11.22004121 11.22004121-24.80875785 16.70539473-40.76614979 16.7053947H70.80304535c-15.95739198 0-29.6707757-5.48535348-40.76614979-16.7053947-11.22004121-11.22004121-16.70539473-24.80875785-16.70539472-40.76614982V742.13551236c0-15.95739198 5.48535348-29.6707757 16.70539472-40.76614978 11.22004121-11.22004121 24.80875785-16.70539473 40.76614979-16.70539473h255.94160722c8.4773645 22.44008246 22.44008246 40.7661498 42.2621553 55.10286914s41.88815391 21.56741259 66.19824324 21.56741258h153.46523063c24.31008934 0 46.37617042-7.23069324 66.19824327-21.56741258 19.82207283-14.33671934 33.90945792-32.78745384 42.26215532-55.10286914h255.94160717c15.95739198 0 29.6707757 5.48535348 40.76614982 16.70539473 11.0953741 11.22004121 16.83006183 24.80875785 16.83006184 40.76614978zM815.93845023 353.67275152c-6.85669185 15.95739198-18.5754016 23.93608795-35.40546342 23.93608797H627.06775619v268.53298679c0 10.34737136-3.74001377 19.44807148-11.34470837 26.92809894s-16.58072759 11.34470836-26.92809893 11.34470837H435.20505111c-10.34737136 0-19.44807148-3.74001377-26.92809893-11.34470837s-11.34470836-16.45606045-11.34470837-26.92809894V377.73350659H243.46701319c-16.70539473 0-28.67343873-7.97869597-35.40546342-23.93608794-6.85669185-15.58339061-3.98934801-29.42144144 8.47736448-41.38948543l268.5329868-268.53298681c7.23069324-7.60469461 16.08205908-11.34470836 26.92809895-11.34470835 10.84603987 0 19.82207283 3.74001377 26.92809895 11.34470835L807.46108575 312.40793322c12.34204536 11.968044 15.08472209 25.68142771 8.47736448 41.2648183z m-46.8748389 549.6573532c7.60469461-7.60469461 11.34470836-16.45606045 11.34470834-26.92809895 0-10.34737136-3.74001377-19.44807148-11.34470834-26.92809896s-16.58072759-11.34470836-26.92809897-11.34470836-19.44807148 3.74001377-26.92809896 11.34470836-11.34470836 16.58072759-11.34470834 26.92809896 3.74001377 19.44807148 11.34470834 26.92809895 16.45606045 11.34470836 26.92809896 11.34470835c10.34737136 0 19.44807148-3.74001377 26.92809897-11.34470835z m153.46523062 0c7.60469461-7.60469461 11.34470836-16.45606045 11.34470833-26.92809895 0-10.34737136-3.74001377-19.44807148-11.34470833-26.92809896s-16.58072759-11.34470836-26.92809897-11.34470836-19.44807148 3.74001377-26.92809895 11.34470836-11.34470836 16.58072759-11.34470836 26.92809896 3.74001377 19.44807148 11.34470836 26.92809895 16.45606045 11.34470836 26.92809895 11.34470835c10.34737136 0 19.32340434-3.74001377 26.92809897-11.34470835z"/>
    </svg>
  )
}

Vue.component('icon-upload', Icon)
export default Icon

