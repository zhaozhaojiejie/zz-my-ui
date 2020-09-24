/**
 * 根据维度的配置转换轴标签文本
 * @param dimension
 * @param flag
 * @return {{formatter: null}}
 */
export function getLabelFormatter(dimension, flag = '{value}') {
  let formatter = null
  switch (dimension.unit) {
    case 'p':
      formatter = `${flag}%`
      break
    case 'k':
      formatter = `${flag}k`
      break
    case 'w':
      formatter = `${flag}万`
      break
  }
  return {formatter}
}
