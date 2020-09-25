import spChart from '$ui/charts/packages/sp-chart'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import {install} from '$ui/utils/helper'
import Line from './Line'

const Module = {
  name: 'spChartLine',
  mixins: [spChart],
  adapter: Line
}

export default install(Module)
