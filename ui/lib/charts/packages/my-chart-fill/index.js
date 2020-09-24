import MyChart from '$ui/charts/packages/my-chart'
import 'echarts-liquidfill/dist/echarts-liquidfill'
import {install} from '$ui/utils/helper'
import Fill from './Fill'

const Module = {
  name: 'MyChartFill',
  mixins: [MyChart],
  adapter: Fill
}

export default install(Module)
