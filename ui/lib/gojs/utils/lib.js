import merge from 'lodash/merge'

const go = process.env.NODE_ENV === 'production'
  ? require('gojs/release/go')
  : require('gojs/release/go-debug')

const $ = go.GraphObject.make

go.Shape.defineFigureGenerator('Terminator', function (shape, w, h) {
  console.log(w, h)
  const geo = new go.Geometry();
  const fig = new go.PathFigure(0.25 * w, 0, true);
  geo.add(fig);

  fig.add(new go.PathSegment(go.PathSegment.Arc, 270, 180, 0.75 * w, 0.5 * h, 0.25 * w, 0.5 * h));
  fig.add(new go.PathSegment(go.PathSegment.Arc, 90, 180, 0.25 * w, 0.5 * h, 0.25 * w, 0.5 * h));
  geo.spot1 = new go.Spot(0.23, 0);
  geo.spot2 = new go.Spot(0.77, 1);
  return geo;
})

export function toList(collection) {
  const items = []
  const it = collection.iterator
  while (it.next()) {
    items.push(it.value)
  }
  return items
}


export default go
export {
  go,
  $,
  merge
}
