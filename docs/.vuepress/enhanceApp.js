import elementUI from 'element-ui'
// import {MyLazy, MySkeleton} from '$ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({Vue, options, router, siteData}) => {
  Vue.use(elementUI)
  if (typeof window !== 'undefined') {
    require('./ui')
  }
  import('./mock/index').then(module => {
    if (module && module.default) {
      module.default()
    }
  }).catch(err => {
    console.log(err)
  })
}
