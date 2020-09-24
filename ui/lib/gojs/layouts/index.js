import creator from '../utils/creator'
import go from '../utils/lib'
import ForceDirectedLayout from './ForceDirectedLayout'

/**
 * 网格布局
 * @param options
 * @returns {GraphObject}
 */
export function grid(options = {}) {
  return creator({
    name: go.GridLayout,
    props: {
      cellSize: new go.Size(60, 60),
      spacing: new go.Size(20, 20),
      ...options
    }
  })
}

/**
 * 树状布局
 * @param options
 * @returns {GraphObject}
 */
export function tree(options = {}) {
  return creator({
    name: go.TreeLayout,
    props: {
      angle: 90,
      nodeSpacing: 30,
      ...options
    }
  })
}

/**
 * 圆形布局
 * @param options
 * @returns {GraphObject}
 */
export function circular(options = {}) {
  return creator({
    name: go.CircularLayout,
    props: {
      ...options
    }
  })
}

/**
 * 力导向布局
 * @param options
 * @returns {ForceDirectedLayout}
 */
export function force(options = {}) {
  const defaultValue = {
    maxIterations: 100,
    epsilonDistance: 1,
    infinityDistance: 1000,
    arrangementSpacing: new go.Size(100, 100),
    defaultElectricalCharge: 150,
    defaultGravitationalMass: 0,
    defaultSpringStiffness: 0.05,
    defaultSpringLength: 100,
    ...options
  }
  const layout = new ForceDirectedLayout()
  Object.entries(defaultValue).forEach(([k, v]) => {
    layout[k] = v
  })
  return layout
}

/**
 * 分层布局
 * @param options
 * @returns {GraphObject}
 */
export function layered(options = {}) {
  return creator({
    name: go.LayeredDigraphLayout,
    props: {
      ...options
    }
  })
}
