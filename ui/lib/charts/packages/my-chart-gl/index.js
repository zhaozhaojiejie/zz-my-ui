import 'echarts';
import 'echarts-gl'
import MyChart from '$ui/charts/packages/my-chart'
import {install} from '$ui/utils/helper'

const Module = {
  name: 'MyChartGl',
  mixins: [MyChart]
}

export default install(Module)
