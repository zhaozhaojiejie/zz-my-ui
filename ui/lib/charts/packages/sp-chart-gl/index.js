import 'echarts';
import 'echarts-gl'
import spChart from '$ui/charts/packages/sp-chart'
import {install} from '$ui/utils/helper'

const Module = {
  name: 'spChartGl',
  mixins: [spChart]
}

export default install(Module)
