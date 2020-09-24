/**
 *  user mixin module
 *  @module $my/code/mixin/user
 *  @author coder
 */
import {
  fetchUser,
  getUser,
  addUser,
  updateUser,
  removeUser,
  batchUser
} from '$docs/code/api/user'

// mixin
export default {

  /**
   * user数据存储载体对象
   * @member user
   * @property {Array} [list=\[\]] 获取user列表响应数据
   * @property {number} [page=null] 获取user列表响应页码
   * @property {number} [limit=null] 获取user列表页大小，每页记录条数
   * @property {number} [total=0] 获取user列表数据记录总条数
   * @property {object} [model=null] 获取user单条记录
   */
  data() {
    return {
      user: {
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
     * 获取user列表
     * @function fetchUser
     * @param {object} data 请求发送的数据data
     * @param {boolean|object} [cache=false] 缓存配置
     * @returns {Promise} Promise实例
     */
    fetchUser({
      data,
      cache = false
    } = {}) {
      return fetchUser(data, cache).then(res => {
        this.user.list = res.list || []
        this.user.page = Number.parseInt(res.page) || 0
        this.user.limit = Number.parseInt(res.limit) || 0
        this.user.total = Number.parseInt(res.total) || 0
        return res
      })
    },
    /**
     * 获取user单条记录
     * @function getUser
     * @param {string|number} id 请求URL路径参数id数据
     * @param {object} data 请求发送的数据data
     * @param {boolean|object} [cache=false] 缓存配置
     * @returns {Promise} Promise实例
     */
    getUser({
      id,
      data,
      cache = false
    } = {}) {
      return getUser(id, data, cache).then(res => {
        this.user.model = Object.assign({}, data, res || {})
        return res
      })
    },
    /**
     * 新增user
     * @function addUser
     * @param {object} data 请求发送的数据data
     * @param {number} [index] 新增到列表的位置索引，默认最近到列表最后
     * @param {boolean|object} [cache=false] 缓存配置
     * @returns {Promise} Promise实例
     */
    addUser({
      data,
      index,
      cache = false
    } = {}) {
      return addUser(data, index, cache).then(res => {
        const model = Object.assign({}, data, res || {})
        const list = [...this.user.list]
        if (index !== undefined) {
          list.splice(index, 0, model)
        } else {
          list.push(model);
        }
        this.user.list = list
        this.user.total += 1;
        return res
      })
    },
    /**
     * 更新user
     * @function updateUser
     * @param {object} data 请求发送的数据data
     * @param {number} [index] 源实体在列表的位置索引，如没有index，即不更新实体在源列表数据
     * @param {boolean|object} [cache=false] 缓存配置
     * @returns {Promise} Promise实例
     */
    updateUser({
      data,
      index,
      cache = false
    } = {}) {
      return updateUser(data, index, cache).then(res => {
        const model = Object.assign({}, data, res || {})
        const list = [...this.user.list]
        if (index !== undefined) {
          list.splice(index, 1, model)
        }
        this.user.list = list
        return res
      })
    },
    /**
     * 删除user
     * @function removeUser
     * @param {string|number} id 请求URL路径参数id数据
     * @param {object} data 请求发送的数据data
     * @param {number} [index] 源实体在列表的位置索引，如没有index，即不删除实体在源列表数据
     * @param {boolean|object} [cache=false] 缓存配置
     * @returns {Promise} Promise实例
     */
    removeUser({
      id,
      data,
      index,
      cache = false
    } = {}) {
      return removeUser(id, data, cache).then(res => {
        const list = [...this.user.list]
        if (index !== undefined) {
          list.splice(index, 1)
        }
        this.user.list = list
        this.user.total -= 1;
        return res
      })
    },
    /**
     * 批量删除user
     * @function batchUser
     * @param {object} data 请求发送的数据data
     * @param {number[]} [indexes] 源实体在列表的位置索引，如没有indexes，即不删除实体在源列表数据
     * @param {boolean|object} [cache=false] 缓存配置
     * @returns {Promise} Promise实例
     */
    batchUser({
      data,
      indexes = [],
      cache = false
    } = {}) {
      return batchUser(data, cache).then(res => {
        if (indexes.length > 0) {
          this.user.list = this.user.list.filter((item, index) => !indexes.includes(index))
        }
        this.user.total -= indexes.length;
        return res
      })
    }
  }
}
