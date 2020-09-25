import spChart from '$ui/charts/packages/sp-chart'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/chart/lines'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/visualMap'
import {install} from '$ui/utils/helper'
import Map from './Map'

const Module = {
  name: 'spChartMap',
  mixins: [spChart],
  adapter: Map
}

export default install(Module)
