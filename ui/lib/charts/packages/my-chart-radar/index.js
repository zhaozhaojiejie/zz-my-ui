import MyChart from '$ui/charts/packages/my-chart'
import 'echarts/lib/chart/radar'
import {install} from '$ui/utils/helper'
import Radar from './Radar'


const Module = {
  name: 'MyChartRadar',
  mixins: [MyChart],
  adapter: Radar
}

export default install(Module)


