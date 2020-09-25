import spChart from '$ui/charts/packages/sp-chart'
import 'echarts-liquidfill/dist/echarts-liquidfill'
import {install} from '$ui/utils/helper'
import Fill from './Fill'

const Module = {
  name: 'spChartFill',
  mixins: [spChart],
  adapter: Fill
}

export default install(Module)
