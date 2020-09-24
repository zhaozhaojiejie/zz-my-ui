import MyChart from '$ui/charts/packages/my-chart'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import {install} from '$ui/utils/helper'
import Bar from './Bar'

const Module = {
  name: 'MyChartBar',
  mixins: [MyChart],
  adapter: Bar
}

export default install(Module)
