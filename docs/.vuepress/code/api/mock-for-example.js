/**
 *   api
 *  @module code/api/mockForExample
 *  @author coder
 */

// API_HOST
const API_HOST = 'http://127.0.0.1:8080'

// ajax
import ajax from '$ui/utils/ajax'

/**
 * 获取mockForExample列表
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example'
 */
export const FETCH_MOCK_FOR_EXAMPLE = API_HOST + '/api/mock-for-example'

/**
 * 获取mockForExample列表
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function fetchMockForExample(data, options) {
  return ajax({
    method: 'get',
    data: data,
    url: FETCH_MOCK_FOR_EXAMPLE,
    ...options
  })
}

/**
 * 获取mockForExample单条记录
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/:id'
 */
export const GET_MOCK_FOR_EXAMPLE = API_HOST + '/api/mock-for-example/:id'

/**
 * 获取mockForExample单条记录
 * @param {string|number} id Url参数id
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function getMockForExample(id, data, options) {
  return ajax({
    method: 'get',
    params: {
      id
    },
    data: data,
    url: GET_MOCK_FOR_EXAMPLE,
    ...options
  })
}

/**
 * 新增mockForExample
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example'
 */
export const ADD_MOCK_FOR_EXAMPLE = API_HOST + '/api/mock-for-example'

/**
 * 新增mockForExample
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function addMockForExample(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: ADD_MOCK_FOR_EXAMPLE,
    ...options
  })
}

/**
 * 更新mockForExample
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example'
 */
export const UPDATE_MOCK_FOR_EXAMPLE = API_HOST + '/api/mock-for-example'

/**
 * 更新mockForExample
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function updateMockForExample(data, options) {
  return ajax({
    method: 'patch',
    data: data,
    url: UPDATE_MOCK_FOR_EXAMPLE,
    ...options
  })
}

/**
 * 删除mockForExample
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/:id'
 */
export const REMOVE_MOCK_FOR_EXAMPLE = API_HOST + '/api/mock-for-example/:id'

/**
 * 删除mockForExample
 * @param {string|number} id Url参数id
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function removeMockForExample(id, data, options) {
  return ajax({
    method: 'delete',
    params: {
      id
    },
    data: data,
    url: REMOVE_MOCK_FOR_EXAMPLE,
    ...options
  })
}

/**
 * 批量删除mockForExample
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/remove'
 */
export const BATCH_MOCK_FOR_EXAMPLE = API_HOST + '/api/mock-for-example/remove'

/**
 * 批量删除mockForExample
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function batchMockForExample(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: BATCH_MOCK_FOR_EXAMPLE,
    ...options
  })
}

/**
 * mockForExample GET_COLUMNS
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/columns'
 */
export const GET_COLUMNS = API_HOST + '/api/mock-for-example/columns'

/**
 * mockForExample GET_COLUMNS
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function getColumns(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: GET_COLUMNS,
    ...options
  })
}

/**
 * mockForExample LOGIN
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/login'
 */
export const LOGIN = API_HOST + '/api/mock-for-example/login'

/**
 * mockForExample LOGIN
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function login(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: LOGIN,
    ...options
  })
}

/**
 * mockForExample LOGOUT
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/logout'
 */
export const LOGOUT = API_HOST + '/api/mock-for-example/logout'

/**
 * mockForExample LOGOUT
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function logout(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: LOGOUT,
    ...options
  })
}

/**
 * mockForExample GET_MENUS
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/menus'
 */
export const GET_MENUS = API_HOST + '/api/mock-for-example/menus'

/**
 * mockForExample GET_MENUS
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function getMenus(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: GET_MENUS,
    ...options
  })
}

/**
 * mockForExample GET_TREE
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/tree'
 */
export const GET_TREE = API_HOST + '/api/mock-for-example/tree'

/**
 * mockForExample GET_TREE
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function getTree(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: GET_TREE,
    ...options
  })
}

/**
 * mockForExample GET_OPTIONS
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/options'
 */
export const GET_OPTIONS = API_HOST + '/api/mock-for-example/options'

/**
 * mockForExample GET_OPTIONS
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function getOptions(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: GET_OPTIONS,
    ...options
  })
}

/**
 * mockForExample MOCK_UPLOAD
 * @const
 * @type {String}
 * @default  '[API_HOST]/api/mock-for-example/upload'
 */
export const MOCK_UPLOAD = API_HOST + '/api/mock-for-example/upload'

/**
 * mockForExample MOCK_UPLOAD
 * @param {object} [data] 发送键值对数据
 * @param {object} [options] ajax参数选项
 * @returns {Promise}
 */
export function mockUpload(data, options) {
  return ajax({
    method: 'post',
    data: data,
    url: MOCK_UPLOAD,
    ...options
  })
}
