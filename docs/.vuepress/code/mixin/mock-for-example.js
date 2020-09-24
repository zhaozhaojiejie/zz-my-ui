/**
 *  mockForExample mixin module
 *  @module $my/code/mixin/mockForExample
 *  @author coder
 */
import {
  fetchMockForExample,
  getMockForExample,
  addMockForExample,
  updateMockForExample,
  removeMockForExample,
  batchMockForExample,
  getColumns,
  login,
  logout,
  getMenus,
  getTree,
  getOptions,
  mockUpload
} from '$docs/code/api/mock-for-example'

// mixin
export default {

  /**
   * mockForExample数据存储载体对象
   * @member mockForExample
   * @property {Array} [list=\[\]] 获取mockForExample列表响应数据
   * @property {number} [page=null] 获取mockForExample列表响应页码
   * @property {number} [limit=null] 获取mockForExample列表页大小，每页记录条数
   * @property {number} [total=0] 获取mockForExample列表数据记录总条数
   * @property {object} [model=null] 获取mockForExample单条记录
   */
  data() {
    return {
      mockForExample: {
        list: [],
        page: null,
        limit: null,
        total: 0,
        model: null
      }
    }
  },
  methods: {

    /**
     * 获取mockForExample列表
     * @function fetchMockForExample
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    fetchMockForExample({
      data,
      options
    } = {}) {
      return fetchMockForExample(data, options).then(res => {
        this.mockForExample.list = res.list || []
        this.mockForExample.page = Number.parseInt(res.page) || 0
        this.mockForExample.limit = Number.parseInt(res.limit) || 0
        this.mockForExample.total = Number.parseInt(res.total) || 0
        return res
      })
    },
    /**
     * 获取mockForExample单条记录
     * @function getMockForExample
     * @param {string|number} id 请求URL路径参数id数据
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    getMockForExample({
      id,
      data,
      options
    } = {}) {
      return getMockForExample(id, data, options).then(res => {
        this.mockForExample.model = Object.assign({}, data, res || {})
        return res
      })
    },
    /**
     * 新增mockForExample
     * @function addMockForExample
     * @param {object} data 请求发送的数据data
     * @param {number} [index] 新增到列表的位置索引，默认最近到列表最后
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    addMockForExample({
      data,
      index,
      options
    } = {}) {
      return addMockForExample(data, index, options).then(res => {
        const model = Object.assign({}, data, res || {})
        const list = [...this.mockForExample.list]
        if (index !== undefined) {
          list.splice(index, 0, model)
        } else {
          list.push(model);
        }
        this.mockForExample.list = list
        this.mockForExample.total += 1;
        return res
      })
    },
    /**
     * 更新mockForExample
     * @function updateMockForExample
     * @param {object} data 请求发送的数据data
     * @param {number} [index] 源实体在列表的位置索引，如没有index，即不更新实体在源列表数据
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    updateMockForExample({
      data,
      index,
      options
    } = {}) {
      return updateMockForExample(data, index, options).then(res => {
        const model = Object.assign({}, data, res || {})
        const list = [...this.mockForExample.list]
        if (index !== undefined) {
          list.splice(index, 1, model)
        }
        this.mockForExample.list = list
        return res
      })
    },
    /**
     * 删除mockForExample
     * @function removeMockForExample
     * @param {string|number} id 请求URL路径参数id数据
     * @param {object} data 请求发送的数据data
     * @param {number} [index] 源实体在列表的位置索引，如没有index，即不删除实体在源列表数据
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    removeMockForExample({
      id,
      data,
      index,
      options
    } = {}) {
      return removeMockForExample(id, data, options).then(res => {
        const list = [...this.mockForExample.list]
        if (index !== undefined) {
          list.splice(index, 1)
        }
        this.mockForExample.list = list
        this.mockForExample.total -= 1;
        return res
      })
    },
    /**
     * 批量删除mockForExample
     * @function batchMockForExample
     * @param {object} data 请求发送的数据data
     * @param {number[]} [indexes] 源实体在列表的位置索引，如没有indexes，即不删除实体在源列表数据
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    batchMockForExample({
      data,
      indexes = [],
      options
    } = {}) {
      return batchMockForExample(data, options).then(res => {
        if (indexes.length > 0) {
          this.mockForExample.list = this.mockForExample.list.filter((item, index) => !indexes.includes(index))
        }
        this.mockForExample.total -= indexes.length;
        return res
      })
    },
    /**
     * mockForExample GET_COLUMNS
     * @function getColumns
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    getColumns({
      data,
      options
    } = {}) {
      return getColumns(data, options).then(res => {
        return res
      })
    },
    /**
     * mockForExample LOGIN
     * @function login
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    login({
      data,
      options
    } = {}) {
      return login(data, options).then(res => {
        return res
      })
    },
    /**
     * mockForExample LOGOUT
     * @function logout
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    logout({
      data,
      options
    } = {}) {
      return logout(data, options).then(res => {
        return res
      })
    },
    /**
     * mockForExample GET_MENUS
     * @function getMenus
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    getMenus({
      data,
      options
    } = {}) {
      return getMenus(data, options).then(res => {
        return res
      })
    },
    /**
     * mockForExample GET_TREE
     * @function getTree
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    getTree({
      data,
      options
    } = {}) {
      return getTree(data, options).then(res => {
        return res
      })
    },
    /**
     * mockForExample GET_OPTIONS
     * @function getOptions
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    getOptions({
      data,
      options
    } = {}) {
      return getOptions(data, options).then(res => {
        return res
      })
    },
    /**
     * mockForExample MOCK_UPLOAD
     * @function mockUpload
     * @param {object} data 请求发送的数据data
     * @param {object} [options] ajax参数选项
     * @returns {Promise} Promise实例
     */
    mockUpload({
      data,
      options
    } = {}) {
      return mockUpload(data, options).then(res => {
        return res
      })
    }
  }
}
