import spChart from '$ui/charts/packages/sp-chart'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import {install} from '$ui/utils/helper'
import Bar from './Bar'

const Module = {
  name: 'spChartBar',
  mixins: [spChart],
  adapter: Bar
}

export default install(Module)
