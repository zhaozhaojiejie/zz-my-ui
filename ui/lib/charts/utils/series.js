import isObject from 'lodash/isObject'
import {getLabelFormatter} from './util'
import {PIE_LABEL_LINE, PIE_ROSE_ITEM_STYLE} from './constant'

/**
 * 构建label配置
 * @param {string|object} label
 * @param {Object} dimension
 * @return {*}
 */
function getLabelConfig(label, dimension) {
  const formatter = getLabelFormatter(dimension, '{@value}');
  return isObject(label)
    ? {...formatter, ...label, show: true}
    : {...formatter, position: label, show: true};
}

/**
 * 给系列注入label配置
 * @param series
 * @param label
 * @param dimensions
 */
function injectLabel(series = [], label, dimensions) {
  // label的值可能是：undefined / String / Object / String[] / Object[] / [String, Object]
  if (!label) return;

  if (Array.isArray(label)) {
    series.forEach((item, index) => {
      // 序列维度是从索引第一个开始
      const dimension = dimensions.slice(1)[index];
      const labelItem = label[index];
      if (labelItem) {
        item.label = getLabelConfig(labelItem, dimension);
      }
    });
  } else {
    series.forEach((item, index) => {
      // 序列维度是从索引第一个开始
      const dimension = dimensions.slice(1)[index];
      item.label = getLabelConfig(label, dimension);
    });
  }
}

/**
 * 获取堆叠的名称
 * @param {Object|Array} stack 堆叠设置
 * @param {string|object} dimension 维度
 * @return {null|*}
 */
function getStackName(stack, dimension) {
  // 没有堆叠
  if (!stack) return null;
  // 配置是数组，图表中只有一组堆叠情况
  if (Array.isArray(stack)) {
    // 找到对应的维度，命名为stack
    const match = !!stack.find(name => {
      return [dimension.name, dimension.displayName, dimension].includes(name);
    });
    return match ? 'stack' : null;
    // 配置是对象形式，图表中可以有多个堆叠
  } else if (isObject(stack)) {
    const match = Object.values(stack).find(names => {
      return !!names.find(name => {
        return [dimension.name, dimension.displayName, dimension].includes(
          name
        );
      });
    });
    return match ? match[0] : null;
  }
}

/**
 * 构建拼图层级序列数据
 * @param dimensions
 * @param rows
 * @param group
 * @return {*}
 */
function getDataByLevel(dimensions, rows, group) {
  const groupRows = rows.filter(row => group.includes(row[0]));
  return groupRows.map(row => {
    return {name: row[0], value: row[1]};
  });
}

/**
 * 获取饼图层级的半径
 * @param innerRadius 环内径
 * @param avg 层级平均值
 * @param index 层级，从内到外
 * @param gap 层级的间距
 * @return {string[]}
 */
function getLevelPieRadius(innerRadius, avg, index, gap) {
  return [`${innerRadius + avg * index + gap * index}%`, `${innerRadius + (index + 1) * avg + gap * index}%`];
}

/**
 * 创建基础系列
 */
export function baseSeries(type, layout, dimensions, settings) {
  const shouldChangeTypes =
    type === 'line'
      ? settings.bars
      ? [].concat(settings.bars)
      : []
      : settings.lines
      ? [].concat(settings.lines)
      : [];

  const valueAxis = settings.valueAxis ? [].concat(settings.valueAxis) : [];
  const direction = settings.direction;
  const axisIndexName = direction === 'x' ? 'yAxisIndex' : 'xAxisIndex';

  // stack: {'stack': ['d1','d2']}
  // 默认约定第一列/行为类目轴
  return dimensions.slice(1).map(dimension => {
    let index = 0;
    if (valueAxis.length) {
      // 找到与用户配置的值轴相对应的维度索引
      index = valueAxis.findIndex(item => {
        const axis = isObject(item) ? item : {name: item};
        return [dimension.name, dimension.displayName].includes(axis.name);
      });
    }
    // 如果找不到维度，把序列都放在第一个值轴
    index = Math.max(0, index);

    const chartType =
      type === 'line'
        ? shouldChangeTypes.includes(dimension.name)
        ? 'bar'
        : type
        : shouldChangeTypes.includes(dimension.name)
        ? 'line'
        : type;

    const stack = getStackName(settings.stack, dimension);
    return {
      type: chartType,
      stack: stack,
      areaStyle: stack ? {} : null,
      seriesLayoutBy: layout,
      [axisIndexName]: index
    };
  });
}

/**
 * 构建饼图序列配置
 * @param dimensions
 * @param source
 * @param settings
 * @return {*}
 */
export function createPieSeries({dimensions, source, settings}) {
  const level = settings.level;
  if (!level) {
    return {
      type: 'pie',
      radius: settings.radius,
      center: settings.center,
      roseType: settings.roseType,
      labelLine: PIE_LABEL_LINE,
      itemStyle: settings.roseType ? PIE_ROSE_ITEM_STYLE : {}
    };
  }
  const levelCount = level.length;
  const settingRadius = settings.radius || [0, 90];
  const innerRadius = parseInt(settingRadius[0] || 0);
  const outterRadius = parseInt(settingRadius[1] || 0);
  const levelGap = settings.levelGap;
  // 检验内外边距和环间距是否合理
  if (levelGap * (levelCount - 1) > outterRadius - innerRadius) {
    throw new Error('参数错误，环间距之和大于外径和内径差。请设置合适的levelGap参数(默认10%)');
  }
  // 减去gap后的剩余宽度求平均值,使宽度均匀,同时可避免间距超越外环边距
  const radiusAvg = (outterRadius - innerRadius - levelGap * (levelCount - 1)) / levelCount;
  return level.map((group, index) => {
    const data = getDataByLevel(dimensions, source.slice(1), group);
    const isLast = index === levelCount - 1;
    return {
      type: 'pie',
      radius: getLevelPieRadius(
        innerRadius,
        radiusAvg,
        index,
        levelGap
      ),
      center: settings.center,
      roseType: settings.roseType,
      label: !isLast ? {position: 'inside'} : {},
      labelLine: PIE_LABEL_LINE,
      itemStyle: settings.roseType ? PIE_ROSE_ITEM_STYLE : {},
      data
    };
  });
}

/**
 * 创建系列
 * @param {string} type 图表类型
 * @param {string} layout 用行还是列对应到系列上，即 echarts 的配置seriesLayoutBy, 可选：column | row ，默认：column
 * @param {Object[]} dimensions 维度
 * @param {Object} settings 私有配置
 * @return {Object[]}
 */
export function createSeries({
                               type,
                               layout = 'column',
                               dimensions,
                               settings
                             }) {
  const series = baseSeries(type, layout, dimensions, settings);
  injectLabel(series, settings.label, dimensions);
  return series;
}
