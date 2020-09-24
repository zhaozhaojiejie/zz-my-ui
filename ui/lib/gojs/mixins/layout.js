import * as layouts from '../layouts/index'
import go from '../utils/lib'

export default {
  props: {
    onLayoutChange: Function
  },
  methods: {
    layout(type, options) {
      const handler = layouts[type]
      if (handler) {
        this.loading = true
        const setLayout = () => {
          const diagram = this.diagram
          this.commit(() => {
            diagram.layout = handler(options)
            this.load()
            this.onLayoutChange && this.onLayoutChange(type, options)
          })
          this.loading = false
          this.uniform()
        }
        clearTimeout(this._layoutId)
        this._layoutId = setTimeout(setLayout, 100)
      }
    },
    uniform() {
      const diagram = this.diagram
      diagram.alignDocument(go.Spot.Center, go.Spot.Center)
      diagram.zoomToFit()
    }
  }
}
