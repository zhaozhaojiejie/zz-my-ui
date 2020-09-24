// FETCH_USER, GET_USER, ADD_USER, UPDATE_USER, REMOVE_USER, BATCH_USER
import {
  FETCH_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  BATCH_USER
} from '$docs/code/api/user'

// Mock
export default [{
  title: 'FETCH_USER',
  url: FETCH_USER,
  method: 'get',
  params: {
    page: 1,
    limit: 10
  },
  template: {
    code: 0,
    msg: '获取列表成功',
    data: {
      page: '{{page}}',
      limit: '{{limit}}',
      total: 1000,
      'list|{{limit}}': [{
        'id': '@id',
        'name': '@cname',
        'age|10-100': 18,
        'address': '@ctitle',
        'date': '@date(yyyy-MM-dd)'
      }]
    }
  }
}, {
  title: 'GET_USER',
  url: GET_USER,
  method: 'get',
  params: {},
  template: {
    code: 0,
    msg: '获取成功',
    data: {
      'id': '@id',
      'name': '@cname',
      'age|10-100': 18,
      'address': '@ctitle',
      'date': '@date(yyyy-MM-dd)'
    }
  }
}, {
  title: 'ADD_USER',
  url: ADD_USER,
  method: 'post',
  params: {},
  template: {
    code: 0,
    msg: '添加成功',
    data: {
      'id': '@guid'
    }
  }
}, {
  title: 'UPDATE_USER',
  url: UPDATE_USER,
  method: 'patch',
  params: {},
  template: {
    code: 0,
    msg: '更新成功',
    data: true
  }
}, {
  title: 'REMOVE_USER',
  url: REMOVE_USER,
  method: 'delete',
  params: {},
  template: {
    code: 0,
    msg: '删除成功',
    data: true
  }
}, {
  title: 'BATCH_USER',
  url: BATCH_USER,
  method: 'post',
  params: {},
  template: {
    code: 0,
    msg: '批量删除成功',
    data: true
  }
}]
