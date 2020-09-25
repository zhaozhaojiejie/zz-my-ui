import spChart from '$ui/charts/packages/sp-chart'
import 'echarts-wordcloud'
import {install} from '$ui/utils/helper'
import Cloud from './Cloud'

const Module = {
  name: 'spChartCloud',
  mixins: [spChart],
  adapter: Cloud
}

export default install(Module)
