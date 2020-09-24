/**
 *   api
 *  @module code/api/user
 *  @author coder
 */

// API_HOST
const API_HOST = 'http://127.0.0.1:8080'

// ajax
import ajax from '$ui/utils/ajax'

/**
 * 获取user列表
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/user'
 */
export const FETCH_USER = API_HOST + '/api/user'

/**
 * 获取user列表
 * @param {object} [data] 发送键值对数据
 * @param {boolean|object} [cache=false] 缓存配置
 * @returns {promise}
 */
export function fetchUser(data, cache = false) {
  return ajax({
    method: 'get',
    data: data,
    cache: cache,
    url: FETCH_USER
  })
}

/**
 * 获取user单条记录
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/user/:id'
 */
export const GET_USER = API_HOST + '/api/user/:id'

/**
 * 获取user单条记录
 * @param {string|number} id Url参数id
 * @param {object} [data] 发送键值对数据
 * @param {boolean|object} [cache=false] 缓存配置
 * @returns {promise}
 */
export function getUser(id, data, cache = false) {
  return ajax({
    method: 'get',
    params: {
      id
    },
    data: data,
    cache: cache,
    url: GET_USER
  })
}

/**
 * 新增user
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/user'
 */
export const ADD_USER = API_HOST + '/api/user'

/**
 * 新增user
 * @param {object} [data] 发送键值对数据
 * @param {boolean|object} [cache=false] 缓存配置
 * @returns {promise}
 */
export function addUser(data, cache = false) {
  return ajax({
    method: 'post',
    data: data,
    cache: cache,
    url: ADD_USER
  })
}

/**
 * 更新user
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/user'
 */
export const UPDATE_USER = API_HOST + '/api/user'

/**
 * 更新user
 * @param {object} [data] 发送键值对数据
 * @param {boolean|object} [cache=false] 缓存配置
 * @returns {promise}
 */
export function updateUser(data, cache = false) {
  return ajax({
    method: 'patch',
    data: data,
    cache: cache,
    url: UPDATE_USER
  })
}

/**
 * 删除user
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/user/:id'
 */
export const REMOVE_USER = API_HOST + '/api/user/:id'

/**
 * 删除user
 * @param {string|number} id Url参数id
 * @param {object} [data] 发送键值对数据
 * @param {boolean|object} [cache=false] 缓存配置
 * @returns {promise}
 */
export function removeUser(id, data, cache = false) {
  return ajax({
    method: 'delete',
    params: {
      id
    },
    data: data,
    cache: cache,
    url: REMOVE_USER
  })
}

/**
 * 批量删除user
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/user/remove'
 */
export const BATCH_USER = API_HOST + '/api/user/remove'

/**
 * 批量删除user
 * @param {object} [data] 发送键值对数据
 * @param {boolean|object} [cache=false] 缓存配置
 * @returns {promise}
 */
export function batchUser(data, cache = false) {
  return ajax({
    method: 'post',
    data: data,
    cache: cache,
    url: BATCH_USER
  })
}
