import MyChart from '$ui/charts/packages/my-chart'
import 'echarts-wordcloud'
import {install} from '$ui/utils/helper'
import Cloud from './Cloud'

const Module = {
  name: 'MyChartCloud',
  mixins: [MyChart],
  adapter: Cloud
}

export default install(Module)
