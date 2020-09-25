/**
 *  user store module
 *  @module $sp/code/store/user
 *  @author coder
 */
import {
  mapState,
  mapActions
} from 'vuex'
import {
  FETCH_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  BATCH_USER
} from '$docs/code/types'
import {
  fetchUser,
  getUser,
  addUser,
  updateUser,
  removeUser,
  batchUser
} from '$docs/code/api/user'

// store module
export const user = {

  /**
   * 状态数据
   * @member state
   * @property {Array} list 获取user列表响应数据
   * @property {Number} page 获取user列表响应页码
   * @property {Number} limit 获取user列表页大小，每页记录条数
   * @property {Number} total 获取user列表数据记录总条数
   * @property {Object} model 获取user单条记录
   */
  state: {
    list: [],
    page: null,
    limit: null,
    total: 0,
    model: null
  },
  mutations: {

    /**
     * 获取user列表
     * @function [mutations]FETCH_USER
     * @param {object} state vuex状态
     * @param {object} payload 负载数据
     * @param {Array} [payload.list] 数据列表
     * @param {number} [payload.page=0] 数据页码
     * @param {number} [payload.limit=0] 每页条数
     * @param {number} [payload.total=0] 总记录数
     */
    [FETCH_USER](state, payload) {
      state.list = payload.list || [];
      state.page = payload.page || 0;
      state.limit = payload.limit || 0;
      state.total = payload.total || 0;
    },
    /**
     * 获取user单条记录
     * @function [mutations]GET_USER
     * @param {object} state vuex状态
     * @param {object} payload 负载数据
     * @param {object} payload.model 实体对象
     */
    [GET_USER](state, payload) {
      state.model = payload.model
    },
    /**
     * 新增user
     * @function [mutations]ADD_USER
     * @param {object} state vuex状态
     * @param {object} payload 负载数据
     * @param {number} [payload.index] 新增到列表的位置索引，默认最近到列表最后
     * @param {object} payload.model 新增的实体对象
     */
    [ADD_USER](state, payload) {
      const list = [...state.list]
      if (payload.index !== undefined) {
        list.splice(payload.index, 0, payload.model)
      } else {
        list.push(payload.model);
      }
      state.list = list
      state.total += 1
    },
    /**
     * 更新user
     * @function [mutations]UPDATE_USER
     * @param {object} state vuex状态
     * @param {object} payload 负载数据
     * @param {number} [payload.index] 源实体在列表的位置索引，如没有index，即不更新源列表数据
     * @param {object} payload.model 更新的实体对象
     */
    [UPDATE_USER](state, payload) {
      if (payload.index !== undefined) {
        const list = [...state.list]
        list.splice(payload.index, 1, payload.model)
        state.list = list
      }
    },
    /**
     * 删除user
     * @function [mutations]REMOVE_USER
     * @param {object} state vuex状态
     * @param {object} payload 负载数据
     * @param {number} [payload.index] 源实体在列表的位置索引，如没有index，即不删除实体在源列表数据
     */
    [REMOVE_USER](state, payload) {
      if (payload.index !== undefined) {
        const list = [...state.list]
        list.splice(payload.index, 1)
        state.list = list
      }
      state.total -= 1
    },
    /**
     * 批量删除user
     * @function [mutations]BATCH_USER
     * @param {object} state vuex状态
     * @param {object} payload 负载数据
     * @param {number[]} [payload.indexes] 源实体在列表的位置索引，如没有index，即不删除实体在源列表数据
     */
    [BATCH_USER](state, payload) {
      state.list = state.list.filter((item, index) => !payload.indexes.includes(index));
      state.total -= payload.indexes.length
    }
  },
  actions: {

    /**
     * 获取user列表
     * @function [actions]FETCH_USER
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
     * @param {object} payload.data 请求发送数据data
     * @param {object|boolean} payload.cache 缓存配置
     * @returns {Promise} Promise实例
     */
    [FETCH_USER]({
      commit
    }, {
      data,
      cache
    } = {}) {
      return fetchUser(data, cache).then(res => {
        commit({
          type: FETCH_USER,
          list: res.list,
          page: Number.parseInt(res.page),
          limit: Number.parseInt(res.limit),
          total: Number.parseInt(res.total)
        })
        return res
      })
    },
    /**
     * 获取user单条记录
     * @function [actions]GET_USER
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
     * @param {string|number} payload.id  URL路径参数数据id
     * @param {object} payload.data 请求发送数据data
     * @param {object|boolean} payload.cache 缓存配置
     * @returns {Promise} Promise实例
     */
    [GET_USER]({
      commit
    }, {
      id,
      data,
      cache
    } = {}) {
      return getUser(id, data, cache).then(res => {
        commit({
          type: GET_USER,
          model: res
        })
        return res
      })
    },
    /**
     * 新增user
     * @function [actions]ADD_USER
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
     * @param {object} payload.data 请求发送数据data
     * @param {number} [payload.index] 新增到列表的位置索引，默认最近到列表最后
     * @param {object|boolean} payload.cache 缓存配置
     * @returns {Promise} Promise实例
     */
    [ADD_USER]({
      commit
    }, {
      data,
      index,
      cache
    } = {}) {
      return addUser(data, cache).then(res => {
        commit({
          type: ADD_USER,
          model: Object.assign({}, data, res),
          index: index
        })
        return res
      })
    },
    /**
     * 更新user
     * @function [actions]UPDATE_USER
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
     * @param {object} payload.data 请求发送数据data
     * @param {number} [payload.index] 源实体在列表的位置索引，如没有index，即不更新实体在源列表数据
     * @param {object|boolean} payload.cache 缓存配置
     * @returns {Promise} Promise实例
     */
    [UPDATE_USER]({
      commit,
      state
    }, {
      data,
      index,
      cache
    } = {}) {
      return updateUser(data, cache).then(res => {
        commit({
          type: UPDATE_USER,
          index: index,
          model: Object.assign({}, state.list[index], data, res)
        })
        return res
      })
    },
    /**
     * 删除user
     * @function [actions]REMOVE_USER
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
     * @param {string|number} payload.id  URL路径参数数据id
     * @param {object} payload.data 请求发送数据data
     * @param {number} [payload.index] 源实体在列表的位置索引，如没有index，即不删除实体在源列表数据
     * @param {object|boolean} payload.cache 缓存配置
     * @returns {Promise} Promise实例
     */
    [REMOVE_USER]({
      commit
    }, {
      id,
      data,
      index,
      cache
    } = {}) {
      return removeUser(id, data, cache).then(res => {
        commit({
          type: REMOVE_USER,
          index: index
        })
        return res
      })
    },
    /**
     * 批量删除user
     * @function [actions]BATCH_USER
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
     * @param {object} payload.data 请求发送数据data
     * @param {number[]} [payload.indexes] 源实体在列表的位置索引，如没有indexes，即不删除实体在源列表数据
     * @param {object|boolean} payload.cache 缓存配置
     * @returns {Promise} Promise实例
     */
    [BATCH_USER]({
      commit
    }, {
      data,
      indexes,
      cache
    } = {}) {
      return batchUser(data, cache).then(res => {
        commit({
          type: BATCH_USER,
          indexes: indexes || []
        })
        return res
      })
    }
  }
}

/**
 * Vue mixin setup
 */
export default {
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions({
      fetchUser: FETCH_USER,
      getUser: GET_USER,
      addUser: ADD_USER,
      updateUser: UPDATE_USER,
      removeUser: REMOVE_USER,
      batchUser: BATCH_USER
    })
  },
  beforeCreate() {
    const store = this.$store
    if (!store) return
    if (!store.state.user) {
      store.registerModule('user', user)
    }
  }
}
