import go from '../utils/lib'

function ForceDirectedLayout() {
  go.ForceDirectedLayout.call(this)
}

go.Diagram.inherit(ForceDirectedLayout, go.ForceDirectedLayout)

ForceDirectedLayout.prototype.makeNetwork = function (coll) {
  const net = go.ForceDirectedLayout.prototype.makeNetwork.call(this, coll)
  net.vertexes.each(function (vertex) {
    const node = vertex.node
    if (node !== null) vertex.isFixed = node.isSelected
  })
  return net
}

export default ForceDirectedLayout
