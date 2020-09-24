import go from './lib'
import {cloneDeep} from '$ui/utils/util'

export function mockNodes(min = 0, max = 0) {
  const nodes = []
  min = Math.max(0, min)
  max = Math.max(min, max)
  const total = Math.floor(Math.random() * (max - min + 1)) + min
  for (let i = 0; i < total; i++) {
    nodes.push({
      key: i,
      text: `node${i.toString()}`,
      fill: go.Brush.randomColor()
    });
  }
  // 打乱顺序
  for (let i = 0; i < nodes.length; i++) {
    const swap = Math.floor(Math.random() * nodes.length);
    const temp = nodes[swap]
    nodes[swap] = nodes[i]
    nodes[i] = temp
  }
  return Object.freeze(nodes)
}

export function mockLinks(nodes, min, max) {
  const links = []
  if (nodes.length < 2) return links
  min = Math.min(0, min)
  max = Math.max(min, max)
  let deepCopy = cloneDeep(nodes)
  for (let i = 0; i < nodes.length; i++) {
    const next = nodes[i]
    deepCopy = deepCopy.filter(n => n.key !== next.key)
    const children = Math.floor(Math.random() * (max - min + 1)) + min
    for (let j = 1; j < children; j++) {
      if (deepCopy.length === 0) break
      const to = deepCopy[0]
      deepCopy = deepCopy.filter(n => n.key !== to.key)
      links.push({
        key: Math.random() * Date.now(),
        from: next.key,
        to: to.key,
        text: `link:${next.key}-${to.key}`
      })
    }
  }
  return Object.freeze(links)
}


export function mockTree(minNodes, maxNodes, minChild, maxChild, hasRandomSizes) {
  const nodeArray = [];
  if (minNodes === undefined || isNaN(minNodes) || minNodes < 1) minNodes = 1
  if (maxNodes === undefined || isNaN(maxNodes) || maxNodes < minNodes) maxNodes = minNodes

  const numNodes = Math.floor(Math.random() * (maxNodes - minNodes + 1)) + minNodes;
  for (let i = 0; i < numNodes; i++) {
    nodeArray.push({
      key: i,
      text: i.toString(),
      fill: go.Brush.randomColor(),
      size: (hasRandomSizes) ? new go.Size(Math.random() * 50 + 20, Math.random() * 50 + 20) : new go.Size(30, 30)
    });
  }

  for (let i = 0; i < nodeArray.length; i++) {
    const swap = Math.floor(Math.random() * nodeArray.length);
    const temp = nodeArray[swap];
    nodeArray[swap] = nodeArray[i];
    nodeArray[i] = temp;
  }

  if (nodeArray.length > 1) {
    if (minChild === undefined || isNaN(minChild) || minChild < 0) minChild = 0;
    if (maxChild === undefined || isNaN(maxChild) || maxChild < minChild) maxChild = minChild;

    // keep the Set of node data that do not yet have a parent
    const available = new go.Set();
    available.addAll(nodeArray);
    for (let i = 0; i < nodeArray.length; i++) {
      const parent = nodeArray[i];
      available.remove(parent);

      // assign some number of node data as children of this parent node data
      const children = Math.floor(Math.random() * (maxChild - minChild + 1)) + minChild;
      for (let j = 0; j < children; j++) {
        const child = available.first();
        if (child === null) break;
        available.remove(child);
        // have the child node data refer to the parent node data by its key
        child.parent = parent.key;
      }
      if (available.count === 0) break;
    }
  }
  return nodeArray;
}

export function mockGraph(minNodes, maxNodes, minChild, maxChild) {
  const nodes = mockNodes(minNodes, maxNodes)
  const links = mockLinks(nodes, minChild, maxChild)
  return {
    nodes,
    links
  }
}
