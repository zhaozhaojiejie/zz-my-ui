import creator from '../utils/creator'
import go from '../utils/lib'

export default function (ClassName, defaultOptions, ref) {
  return {
    props: {
      options: [Object, Function],
      nodes: {
        type: Array,
        default() {
          return []
        }
      },
      links: {
        type: Array,
        default() {
          return []
        }
      },
      // modelData
      data: Object,
      onModelChange: Function,
      onReady: Function,
      delay: {
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        loading: true
      }
    },
    watch: {
      nodes(val) {
        this.loadNode(val)
      },
      links(val) {
        this.loadLinks(val)
      },
      data(val) {
        this.loadData(val)
      }
    },
    methods: {
      init() {
        const diagram = typeof this.options === 'function'
          ? this.options(creator({
            name: ClassName,
            props: defaultOptions()
          }))
          : creator({
            name: ClassName,
            props: {
              ...defaultOptions(),
              ...this.options
            }
          })
        if (!diagram) return
        diagram.div = ref ? this.$refs[ref] : this.$el
        diagram.delayInitialization(() => {
          this.commit(this.load, 'init')
          this.onReady && this.onReady(diagram)
          this.$emit('_ready', diagram)
          this.loading = false
        })
        this.bind(diagram)
        this.diagram = diagram
      },
      delayInit() {
        clearTimeout(this._delayId)
        this._delayId = setTimeout(this.init, this.delay)
      },
      merge(options = {}) {
        if (!this.diagram) return
        Object.entries(options).forEach(([name, value]) => {
          this.diagram[name] = value
        })
      },
      bind(diagram) {
        this.handleModelChange = e => {
          if (e.isTransactionFinished) {
            const data = e.model.toIncrementalData(e);
            if (data !== null) {
              this.onModelChange && this.onModelChange(data, e)
            }
          }
        }
        diagram.addModelChangedListener(this.handleModelChange)
        Object.entries(this.$listeners).forEach(([name, listener]) => {
          diagram.addDiagramListener(name, listener)
        })
      },
      unbind(diagram) {
        this.handleModelChange && diagram.removeModelChangedListener(this.handleModelChange)
        Object.entries(this.$listeners).forEach(([name, listener]) => {
          diagram.removeDiagramListener(name, listener)
        })
      },
      loadNodes(nodes) {
        const model = this.diagram?.model
        if (!model) return
        model.nodeDataArray = model.cloneDeep(nodes)
      },
      loadLinks(links) {
        const model = this.diagram?.model
        if (!model) return
        if (this.links && model instanceof go.GraphLinksModel) {
          model.linkDataArray = model.cloneDeep(links)
        }
      },
      loadData(data) {
        const model = this.diagram?.model
        if (!model) return
        if (data) {
          model.assignAllDataProperties(model.modelData, this.data)
        }
      },
      load() {
        this.loadNodes(this.nodes)
        this.loadLinks(this.links)
        this.loadData(this.data)
      },
      commit(func, name = null, delay = 0) {
        const model = this.diagram?.model
        if (!model) return
        if (delay > 0) {
          return setTimeout(() => {
            model.commit(func, name)
          }, delay)
        } else {
          model.commit(func, name)
        }
      },

      /**
       * 更新图形
       */
      resize(alwaysQueueUpdate) {
        if (!this.diagram) return
        this.diagram.requestUpdate(alwaysQueueUpdate)
      }
    },
    mounted() {
      this.delay ? this.delayInit() : this.init()
    },
    beforeDestroy() {
      clearTimeout(this._delayId)
      if (!this.diagram) return
      this.unbind(this.diagram)
      this.diagram.div = null
      this.diagram = null
    }
  }
}
