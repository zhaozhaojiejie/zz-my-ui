import {go, merge} from '../utils/lib';
import {normal} from './theme'
import creator from '../utils/creator'
import {base, defaultTooltip} from './common'

const lockPath = 'F M860.069521 429.487623h-73.242947v-170.422692C786.826574 ' +
  '116.337371 670.888872 0.272064 528.240764 0.272064c-142.650515 0-258.720638 ' +
  '116.065307-258.720638 258.792867v170.422692H196.339779c-35.281619 0-63.879618' +
  ' 28.612445-63.879618 63.91814v466.606275c0 35.368294 28.597999 63.983146 63.879' +
  '618 63.983147h663.79234c35.29125 0 63.821834-28.614852 63.821835-63.983147V493.4' +
  '05763c-0.004815-35.310511-28.590776-63.91814-63.884433-63.91814zM564.114664 738.' +
  '867504v101.889098c0 4.552855-3.765556 8.388233-8.385825 8.388233h-54.91355c-4.' +
  '678053 0-8.446016-3.837785-8.446017-8.388233v-101.889098c-25.800316-13.201114-' +
  '43.672259-39.665939-43.672259-70.68362 0-43.888947 35.613874-79.584681 79.4811' +
  '53-79.584682 43.932285 0 79.548567 35.695734 79.548566 79.584682 0.062599 31.02' +
  '0089-17.811752 57.482507-43.612068 70.68362z m123.476036-309.379881H368.88360' +
  '5v-166.202091c0-87.912723 71.55278-159.501618 159.417351-159.501618s159.287337 ' +
  '71.588895 159.287337 159.501618l0.002407 166.202091z'

function createLockIcon(lock = {}) {
  return creator({
    name: go.Shape,
    props: {
      name: 'lock',
      width: 12,
      height: 12,
      geometryString: lockPath,
      alignment: go.Spot.BottomCenter,
      fill: 'yellow',
      strokeWidth: 1,
      $bindings: [
        new go.Binding('visible', 'movable', (yes, obj) => {
          return !obj.part.movable
        }).ofObject()
      ],
      ...lock
    }
  })

}

function createLabel(label, t) {
  if (!label) return null
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Auto,
      name: 'label',
      alignment: go.Spot.Center,
      margin: new go.Margin(3, 0, 0, 0)
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          figure: 'RoundedRectangle',
          strokeWidth: 0,
          fill: t.stroke || 'rgba(0,0,0,0.3)'
        }
      }),
      creator({
        name: go.TextBlock,
        props: {
          text: '',
          stroke: t.textColor,
          margin: new go.Margin(2, 8, 2, 8),
          maxLines: 1,
          overflow: go.TextBlock.OverflowEllipsis,
          ...label
        }
      })
    ]
  })
}

function createTags(tags = {}, colors = []) {
  return creator({
    name: go.Panel,
    props: {
      name: 'tags',
      type: go.Panel.Horizontal,
      alignment: go.Spot.BottomCenter,
      // {label: '黄', color: '#7f6e05', fill: '#fde0ac'}
      itemArray: [],
      itemTemplate: creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto,
          margin: new go.Margin(35, 2, 0, 2)
        },
        children: [
          creator({
            name: go.Shape,
            props: {
              figure: 'RoundedRectangle',
              fill: '#ecebeb',
              strokeWidth: 0,
              $bindings: [
                new go.Binding('fill', 'itemIndex', (v, obj) => {
                  const index = v % colors.length
                  return colors[index] || '#ecebeb'
                }).ofObject()
              ]
            }
          }),
          creator({
            name: go.TextBlock,
            props: {
              text: '黄',
              stroke: '#ffffff',
              margin: new go.Margin(0, 2, 0, 2),
              $bindings: {
                text: 'label',
                stroke: 'color'
              }
            }
          })
        ]
      }),
      ...tags
    }
  })
}

// function createNodeAdornment(t = {}) {
//   return creator({
//     name: go.Adornment,
//     props: {
//       type: go.Panel.Auto,
//       zOrder: 1
//     },
//     children: [
//       creator({
//         name: go.Shape,
//         props: {
//           figure: 'RoundedRectangle',
//           fill: t.selectedFill,
//           strokeWidth: t.selectedStrokeWidth,
//           stroke: t.selectedStroke
//         }
//       }),
//       creator({name: go.Placeholder})
//     ]
//   })
// }

function createBadge(badge = {}) {
  const {props, shape, label} = badge
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Auto,
      name: 'badge',
      alignment: go.Spot.TopCenter,
      ...props
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          figure: 'Circle',
          fill: 'red',
          strokeWidth: 0,
          ...shape
        }
      }),
      creator({
        name: go.TextBlock,
        props: {
          stroke: '#fff',
          text: '0',
          ...label
        }
      })
    ]
  })
}

/**
 * 基础节点模板
 * @param {Object} options 配置参数，{props, wrapper, tooltip, lock, tags, badge, children, $events, $bindings}
 * @param {object} [t]
 * @returns {GraphObject}
 */
export function nodeTemplate(options = {}, t) {

  const {props, wrapper, tooltip, lock, tags, badge, children = [], $events, $bindings} = options
  return base({
    name: go.Node,
    props: {
      name: 'node',
      zOrder: 2,
      type: go.Panel.Spot,
      minSize: new go.Size(20, 20),
      toolTip: tooltip ? defaultTooltip(tooltip) : null,
      selectionAdorned: true,
      // selectionAdornmentTemplate: createNodeAdornment(t, $events),
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
    children: [
      children.length > 1
        ? creator({
          name: go.Panel,
          props: {
            type: go.Panel.Auto,
            ...(wrapper || {})
          },
          children: children || []
        })
        : children[0],
      lock ? createLockIcon(lock) : null,
      tags ? createTags(tags, t.tags) : null,
      badge ? createBadge(badge) : null
    ]
  })
}

/**
 * 通用节点模板
 * @param options options 配置参数，{shape, label}
 * @param theme
 * @returns {GraphObject}
 */
export function node(options = {}, theme = {}) {
  const t = merge({}, normal, theme)
  const {shape, label} = options
  return nodeTemplate({
    ...options,
    children: [
      shape
        ? creator({
          name: go.Shape,
          props: {
            name: 'shape',
            fill: t.fill,
            stroke: t.stroke,
            strokeWidth: t.strokeWidth,
            ...shape
          }
        })
        : null,
      label
        ? creator({
          name: go.TextBlock,
          props: {
            name: 'label',
            text: 'text',
            stroke: t.color,
            margin: new go.Margin(2, 5, 2, 5),
            maxLines: 1,
            alignment: go.Spot.Center,
            verticalAlignment: go.Spot.Center,
            overflow: go.TextBlock.OverflowEllipsis,
            ...label
          }
        })
        : null
    ].filter(n => !!n)
  }, t)
}

/**
 * 圆形节点
 * @param options
 * @param theme
 * @returns {GraphObject}
 */
export function circle(options = {}, theme) {
  const opts = merge({}, options, {
    shape: {
      figure: 'Circle'
    }
  })
  return node(opts, theme)
}

/**
 * 圆角矩形节点
 * @param options
 * @param theme
 * @returns {GraphObject}
 */
export function rectangle(options = {}, theme) {
  const opts = merge({}, options, {
    props: {
      toSpot: go.Spot.AllSides,
      fromSpot: go.Spot.AllSides
    },
    shape: {
      figure: 'RoundedRectangle'
    }
  })
  return node(opts, theme)
}

/**
 * 菱形节点
 * @param options
 * @param theme
 * @returns {GraphObject}
 */
export function diamond(options = {}, theme) {
  const opts = merge({}, options, {
    props: {
      toSpot: go.Spot.AllSides,
      fromSpot: go.Spot.AllSides
    },
    shape: {
      figure: 'Diamond'
    }
  })
  return node(opts, theme)
}

/**
 * 带图标的普通节点模板
 * @param options options 配置参数，{shape, label, icon}
 * @param theme
 * @returns {GraphObject}
 */
export function icon(options = {}, theme) {
  const t = merge({}, normal, theme)
  const {shape, label, icon} = options
  return nodeTemplate({
    ...options,
    wrapper: {
      type: go.Panel.Vertical
    },
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto
        },
        children: [
          shape
            ? creator({
              name: go.Shape,
              props: {
                name: 'shape',
                figure: 'Circle',
                fill: t.fill,
                stroke: t.stroke,
                strokeWidth: t.strokeWidth,
                ...shape
              }
            })
            : null,
          creator({
            name: go.Shape,
            props: {
              name: 'icon',
              strokeWidth: 0,
              scale: 0.6,
              fill: t.color,
              desiredSize: new go.Size(t.width || 50, t.height || 50),
              margin: new go.Margin(5, 5, 5, 5),
              geometryString: t.geometryString,
              ...icon
            }
          })
        ]
      }),
      createLabel(label, t)
    ]
  }, t)
}

/**
 * 带图片的普通节点
 * @param options options 配置参数，{shape, label, image}
 * @param theme
 * @returns {GraphObject}
 */
export function image(options = {}, theme) {
  const t = merge({}, normal, theme)
  const {shape, label, image} = options
  const {width = 64, height = 64, figure = 'Circle'} = shape || {}

  const imageGraph = creator({
    name: go.Panel,
    props: {
      type: go.Panel.Spot,
      isClipping: true
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          figure,
          width,
          height
        }
      }),
      creator({
        name: go.Picture,
        props: {
          name: 'image',
          source: t.imageSource,
          width,
          height,
          ...image
        }
      })
    ]
  })
  return nodeTemplate({
    ...options,
    wrapper: {
      type: go.Panel.Vertical
    },
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Spot,
          width: width + t.strokeWidth * 2,
          height: height + t.strokeWidth * 2
        },
        children: [
          shape
            ? creator({
              name: go.Shape,
              props: {
                figure,
                fill: t.fill,
                stroke: t.stroke,
                strokeWidth: t.strokeWidth * 2,
                ...shape
              }
            })
            : null,
          image ? imageGraph : null
        ]
      }),
      createLabel(label, t)
    ]
  }, t)
}
