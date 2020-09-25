import spChart from '$ui/charts/packages/sp-chart'
import 'echarts/lib/chart/radar'
import {install} from '$ui/utils/helper'
import Radar from './Radar'


const Module = {
  name: 'spChartRadar',
  mixins: [spChart],
  adapter: Radar
}

export default install(Module)


