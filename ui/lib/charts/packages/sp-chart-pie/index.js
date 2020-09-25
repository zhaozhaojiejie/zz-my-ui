import spChart from '$ui/charts/packages/sp-chart'
import 'echarts/lib/chart/pie'
import {install} from '$ui/utils/helper'
import Pie from './Pie'


const Module = {
  name: 'spChartPie',
  mixins: [spChart],
  adapter: Pie
}

export default install(Module)


