import {go, merge} from '../utils/lib'
import {normal} from './theme'
import creator from '../utils/creator'
import {base, defaultTooltip} from './common'

/**
 * 基础连线模板
 * @param {Object} options 配置参数，{tooltip, props, children, $events, $bindings}
 * @param t
 * @returns {GraphObject}
 */
export function linkTemplate(options = {}, t) {
  const {props, tooltip, children, $events, $bindings} = options
  return base({
    name: go.Link,
    props: {
      name: 'link',
      zOrder: 1,
      selectionAdorned: true,
      toolTip: tooltip ? defaultTooltip(tooltip) : null,
      opacity: t.opacity,
      $hover: {
        opacity: t.hoverOpacity
      },
      $disabled: {
        opacity: t.disabledOpacity
      },
      $events,
      $bindings,
      ...(props || {})
    },
    children: children || []
  })
}

/**
 * 通用连线模板
 * @param {object} options 配置项 {props, line, toArrow, fromArrow, label, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function link(options = {}, theme) {
  const t = merge({}, normal, theme)
  const {line, toArrow, fromArrow, label} = options
  return linkTemplate({
    ...options,
    children: [
      creator({
        name: go.Shape,
        props: {
          name: 'line',
          stroke: t.color,
          strokeWidth: t.strokeWidth,
          ...line
        }
      }),
      toArrow ? creator({
        name: go.Shape,
        props: {
          name: 'toArrow',
          toArrow: 'Standard',
          fill: t.color,
          stroke: t.color,
          strokeWidth: t.strokeWidth,
          ...toArrow
        }
      }) : null,
      fromArrow ? creator({
        name: go.Shape,
        props: {
          name: 'fromArrow',
          fromArrow: 'Backward',
          fill: t.color,
          stroke: t.color,
          strokeWidth: t.strokeWidth,
          ...fromArrow
        }
      }) : null,
      label ? creator({
        name: go.TextBlock,
        props: {
          name: 'label',
          text: '',
          segmentOffset: new go.Point(0, -12),
          segmentOrientation: go.Link.OrientUpright,
          segmentFraction: 0.5,
          segmentIndex: 0,
          stroke: t.color,
          font: '14px sans-serif',
          ...label
        }
      }) : null
    ]
  }, t)
}

/**
 * Bezier 曲线
 * @param options
 * @param theme
 * @returns {GraphObject}
 */
export function bezier(options, theme) {
  return link(merge({
    props: {
      curve: go.Link.Bezier
    },
    label: {
      segmentIndex: 1
    }
  }, options), theme)
}

/**
 * 折线连线
 * @param options
 * @param theme
 * @returns {GraphObject}
 */
export function corner(options, theme) {
  return link(merge({
    props: {
      routing: go.Link.Orthogonal,
      curve: go.Link.JumpOver,
      corner: 3
    },
    label: {
      segmentIndex: 2
    }
  }, options), theme)
}

