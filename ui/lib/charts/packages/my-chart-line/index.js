import MyChart from '$ui/charts/packages/my-chart'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import {install} from '$ui/utils/helper'
import Line from './Line'

const Module = {
  name: 'MyChartLine',
  mixins: [MyChart],
  adapter: Line
}

export default install(Module)
