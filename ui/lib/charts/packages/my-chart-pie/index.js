import MyChart from '$ui/charts/packages/my-chart'
import 'echarts/lib/chart/pie'
import {install} from '$ui/utils/helper'
import Pie from './Pie'


const Module = {
  name: 'MyChartPie',
  mixins: [MyChart],
  adapter: Pie
}

export default install(Module)


