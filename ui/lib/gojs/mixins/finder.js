import {go, toList} from '../utils/lib'
import {download, downloadBlob} from '$ui/utils/download'

export default {
  methods: {
    /**
     * 新增节点
     * @param {Object|Object[]} data 节点数据或数据数组
     */
    addNode(data) {
      const model = this.diagram.model
      this.commit(() => {
        Array.isArray(data)
          ? model.addNodeDataCollection(data)
          : model.addNodeData(data)
      }, 'addNode')
    },
    /**
     * 新增连线
     * @param {Object|Object[]} data 连线数据或数据数组
     */
    addLink(data) {
      const model = this.diagram.model
      this.commit(() => {
        Array.isArray(data)
          ? model.addLinkDataCollection(data)
          : model.addLinkData(data)
      }, 'addLink')
    },
    /**
     * 删除节点
     * @param {string|number|function} keyOrFunc 节点key或匹配函数
     */
    removeNode(keyOrFunc) {
      const nodes = typeof keyOrFunc === 'function'
        ? this.findNodes(keyOrFunc)
        : this.findNode(keyOrFunc)
      this.commit(() => {
        this.diagram.model.removeNodeDataCollection([].concat(nodes))
      })
    },
    /**
     * 删除连线
     * @param {string|number|function} keyOrFunc 连线key或匹配函数
     */
    removeLink(keyOrFunc) {
      const links = typeof keyOrFunc === 'function'
        ? this.findLinks(keyOrFunc)
        : this.findLink(keyOrFunc)
      this.commit(() => {
        this.diagram.model.removeLinkDataCollection([].concat(links))
      })
    },
    /**
     * 查找单个节点
     * @param {string|number|function} keyOrFunc 节点key或匹配函数
     * @param {boolean} [isObject] 返回图形对象
     * @returns {Object|go.GraphObject}
     */
    findNode(keyOrFunc, isObject) {
      const model = this.diagram.model
      const nodeDataArray = model.nodeDataArray || []
      const data = typeof keyOrFunc === 'function'
        ? nodeDataArray.find(keyOrFunc)
        : model.findNodeDataForKey(keyOrFunc)
      return isObject ? this.diagram.findNodeForData(data) : data
    },
    /**
     * 查找单个连线
     * @param  {string|number|function} keyOrFunc 连线key或匹配函数
     * @param {boolean} [isObject] 返回图形对象
     * @returns {Object|go.GraphObject}
     */
    findLink(keyOrFunc, isObject) {
      const model = this.diagram.model
      const linkDataArray = model.linkDataArray || []
      const data = typeof keyOrFunc === 'function'
        ? linkDataArray.find(keyOrFunc)
        : model.findLinkDataForKey(keyOrFunc)
      return isObject ? this.diagram.findLinkForData(data) : data
    },
    /**
     * 查找多个节点
     * @param {function} filter 过滤函数
     * @param {boolean} [isObject] 返回图形对象
     * @returns {Object[]|go.GraphObject[]}
     */
    findNodes(filter, isObject) {
      const model = this.diagram.model
      const nodeDataArray = model.nodeDataArray || []
      const dataArray = nodeDataArray.filter(filter)
      return isObject
        ? dataArray.map(data => this.diagram.findNodeForData(data))
        : dataArray
    },
    /**
     * 查找多个连线
     * @param {function} filter 过滤函数
     * @param {boolean} [isObject] 返回图形对象
     * @returns {Object[]|go.GraphObject[]}
     */
    findLinks(filter, isObject) {
      const model = this.diagram.model
      const linkDataArray = model.linkDataArray || []
      const dataArray = linkDataArray.filter(filter)
      return isObject
        ? dataArray.map(data => this.diagram.findLinkForData(data))
        : dataArray
    },
    /**
     * 全部节点
     * @returns {go.GraphObject[]}
     */
    allNodes() {
      return toList(this.diagram.nodes)
    },
    /**
     * 全部连线
     * @returns {go.GraphObject[]}
     */
    allLinks() {
      return toList(this.diagram.links)
    },
    /**
     * 查找子节点和连线
     * @param {string|number} key 节点的key
     * @param {boolean} [isObject] 返回图形对象
     * @param {string} [parentKey=parent] parentKey
     * @returns {{nodes, links}}
     */
    findChild(key, isObject = false, parentKey = 'parent') {
      const model = this.diagram.model
      if (model instanceof go.GraphLinksModel) {
        const links = this.findLinks(n => n.from === key)
        const nodes = links.map(link => this.findNode(link.to))
        return isObject
          ? {
            nodes: nodes.map(data => this.diagram.findNodeForData(data)),
            links: links.map(data => this.diagram.findLinkForData(data))
          }
          : {nodes, links}
      } else if (model instanceof go.TreeModel) {
        const nodeDataArray = model.nodeDataArray || []
        const nodes = nodeDataArray.filter(item => item[parentKey] === key)
        return {
          nodes: isObject ? nodes.map(data => this.diagram.findNodeForData(data)) : nodes,
          links: isObject ? this.allLinks().filter(link => link.fromNode?.key === key) : []
        }
      }
    },

    /**
     * 查找相邻关联的节点和连线
     * @param {string|number} key 节点的key
     * @param {boolean} [isObject] 返回图形对象
     * @param {string} [parentKey=parent] parentKey
     * @returns {{nodes, links}}
     */
    findRelated(key, isObject = false, parentKey = 'parent') {
      const model = this.diagram.model
      if (model instanceof go.GraphLinksModel) {
        const links = this.findLinks(n => n.from === key || n.to === key)
        const nodes = []
        links.forEach(link => {
          let temp = this.findNode(link.to)
          temp && nodes.push(temp)
          temp = this.findNode(link.from)
          temp && nodes.push(temp)
        })
        return isObject
          ? {
            nodes: nodes.map(data => this.diagram.findNodeForData(data)),
            links: links.map(data => this.diagram.findLinkForData(data))
          }
          : {nodes, links}

      } else if (model instanceof go.TreeModel) {
        const nodeDataArray = model.nodeDataArray || []
        const currentNode = this.findNode(key)
        const parent = currentNode ? this.findNode(currentNode[parentKey]) : null
        const nodes = nodeDataArray.filter(item => item[parentKey] === key)
        if (parent) {
          nodes.push(parent)
        }
        return {
          nodes: isObject ? nodes.map(data => this.diagram.findNodeForData(data)) : nodes,
          links: isObject
            ? this.allLinks().filter(link => link.fromNode?.key === key || link.toNode?.key === key)
            : []
        }
      }
    },

    /**
     * 清空画布
     */
    clear() {
      this.diagram.clear()
    },
    undo() {
      const manager = this.diagram?.undoManager
      if (manager && manager.canUndo()) {
        manager.undo()
        return true
      }
      return false
    },
    redo() {
      const manager = this.diagram?.undoManager
      if (manager && manager.canRedo()) {
        manager.redo()
        return true
      }
      return false
    },
    select(parts) {
      const diagram = this.diagram
      if (!diagram) return
      if (parts) {
        diagram.selectCollection(parts)
      } else {
        const nodes = toList(diagram.nodes)
        const links = toList(diagram.links)
        const allParts = nodes.concat(links)
        diagram.selectCollection(allParts)
      }
    },
    unselect() {
      const diagram = this.diagram
      if (!diagram) return
      diagram.clearSelection()
    },
    selectInvert() {
      const diagram = this.diagram
      if (!diagram) return
      const parts = []
      const nodes = diagram.nodes
      const links = diagram.links
      const selection = diagram.selection

      nodes.each(n => {
        if (!selection.has(n)) {
          parts.push(n)
        }
      })
      links.each(n => {
        if (!selection.has(n)) {
          parts.push(n)
        }
      })
      this.select(parts)
    },
    hide(parts) {
      if (!parts) return
      const list = parts.iterator ? toList(parts) : parts
      this.commit(() => {
        list.forEach(n => {
          n.visible = false
        })
      })
    },
    show(parts) {
      const diagram = this.diagram
      if (!diagram) return
      if (parts) {
        const list = parts.iterator ? toList(parts) : parts
        this.commit(() => {
          list.forEach(n => {
            n.visible = true
          })
        })
      } else {
        const nodes = diagram.nodes
        const links = diagram.links
        this.commit(() => {
          nodes.each(n => {
            n.visible = true
          })
          links.each(n => {
            n.visible = true
          })
        })
      }
    },
    toImage(opts) {
      if (!this.diagram) return
      const image = this.diagram.makeImageData(opts)
      download(image, Date.now().toString())
    },
    toJson() {
      const model = this.diagram?.model
      if (!model) return
      const json = model.toJson()
      const blob = new Blob([json], {type: 'application/octet-stream'})
      downloadBlob(blob, Date.now().toString() + '.json')
    }
  }
}
