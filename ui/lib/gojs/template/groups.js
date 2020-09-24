import {go, merge} from '../utils/lib'
import creator from '../utils/creator'
import {normal} from './theme'
import {base} from './common'


/**
 * 基础分组模板
 * @param options 配置参数 {props, children, $events, $bindings}
 * @returns {GraphObject}
 */
export function groupTemplate(options = {}) {
  const {props, children, $events, $bindings} = options
  return base({
    name: go.Group,
    props: {
      name: 'group',
      zOrder: 1,
      type: go.Panel.Auto,
      toSpot: go.Spot.AllSides,
      toEndSegmentLength: 30,
      fromEndSegmentLength: 30,
      selectionAdorned: false,
      $events,
      $bindings,
      ...(props || {})
    },
    children: children || []
  })
}

/**
 * 通用分组模板
 * @param options 配置参数 {shape, title, button, layout, $events, $bindings}
 * @param theme 主题
 * @returns {GraphObject}
 */
export function group(options = {}, theme) {
  const t = merge({}, normal, theme)
  const {props, shape, title, button, layout, $events, $bindings} = options
  const expandGraph = button
    ? creator({
      name: go.Panel,
      props: {
        name: 'GroupExpand',
        type: go.Panel.Auto,
        cursor: 'pointer',
        width: 14,
        height: 14,
        margin: new go.Margin(0, 0, 0, 5),
        $events: {
          click(e, obj) {
            const model = obj.diagram?.model
            const part = obj.part
            if (model && part) {
              model.commit(() => {
                part.isSubGraphExpanded = !part.isSubGraphExpanded
              }, 'toggle group expanded')
            }
          }
        }
      },
      children: [
        creator({
          name: go.Shape,
          props: {
            name: 'button',
            figure: 'Rectangle',
            fill: t.stroke,
            strokeWidth: 0,
            ...button
          }
        }),
        creator({
          name: go.Shape,
          props: {
            figure: 'MinusLine',
            stroke: t.textColor,
            strokeWidth: 2,
            desiredSize: new go.Size(8, 8),
            $bindings: [
              new go.Binding('figure', 'isSubGraphExpanded', v => {
                return v ? 'MinusLine' : 'PlusLine'
              }).ofObject()
            ]
          }
        })
      ]
    })
    : null

  const shapeGraph = creator({
    name: go.Shape,
    props: {
      name: 'shape',
      figure: 'RoundedRectangle',
      fill: t.fill,
      stroke: t.stroke,
      strokeWidth: t.strokeWidth,
      strokeDashArray: [2],
      ...shape
    }
  })

  const header = (button || title)
    ? creator({
      name: go.Panel,
      props: {
        type: go.Panel.Horizontal,
        defaultAlignment: go.Spot.Left
      },
      children: []
    })
    : null

  const placeholder = creator({
    name: go.Placeholder,
    props: {
      padding: new go.Margin(header ? 5 : 10, 10, 10, 10)
    }
  })


  const wrapper = creator({
    name: go.Panel,
    props: {
      type: go.Panel.Vertical,
      defaultAlignment: go.Spot.Left
    }
  })

  if (header && button) {
    header.add(expandGraph)
  }

  if (header && title) {
    header.add(creator({
      name: go.TextBlock,
      props: {
        name: 'title',
        text: 'Title',
        alignment: go.Spot.TopLeft,
        alignmentFocus: new go.Spot(0, 0, -4, -4),
        font: '14px Sans-Serif',
        stroke: t.color,
        margin: new go.Margin(3, 5, 3, 5),
        ...title
      }
    }))
  }

  if (header) {
    wrapper.add(header)
  }

  wrapper.add(placeholder)

  return groupTemplate({
    props: {
      layout,
      $events,
      $bindings,
      ...(props || {})
    },
    children: [
      shapeGraph,
      wrapper
    ]
  })
}
