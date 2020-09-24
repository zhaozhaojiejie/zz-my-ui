import {cloneDeep} from '$ui/utils/util'

export default function ({data}) {
  // 克隆数据
  const dataCopy = cloneDeep(data)
  return {
    series: [{
      type: 'liquidFill',
      data: dataCopy
    }]
  }
}
