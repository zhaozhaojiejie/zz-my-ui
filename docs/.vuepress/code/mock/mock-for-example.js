// FETCH_MOCK_FOR_EXAMPLE, GET_MOCK_FOR_EXAMPLE, ADD_MOCK_FOR_EXAMPLE, UPDATE_MOCK_FOR_EXAMPLE, REMOVE_MOCK_FOR_EXAMPLE, BATCH_MOCK_FOR_EXAMPLE, GET_COLUMNS, LOGIN, LOGOUT, GET_MENUS, GET_TREE, GET_OPTIONS, MOCK_UPLOAD
import {
  FETCH_MOCK_FOR_EXAMPLE,
  GET_MOCK_FOR_EXAMPLE,
  ADD_MOCK_FOR_EXAMPLE,
  UPDATE_MOCK_FOR_EXAMPLE,
  REMOVE_MOCK_FOR_EXAMPLE,
  BATCH_MOCK_FOR_EXAMPLE,
  GET_COLUMNS,
  LOGIN,
  LOGOUT,
  GET_MENUS,
  GET_TREE,
  GET_OPTIONS,
  MOCK_UPLOAD
} from '$docs/code/api/mock-for-example'

// mockForExampleGetColumns, mockForExampleLogin, mockForExampleLogout, mockForExampleGetMenus, mockForExampleGetTree, mockForExampleGetOptions, mockForExampleUpload
import {
  mockForExampleGetColumns,
  mockForExampleLogin,
  mockForExampleLogout,
  mockForExampleGetMenus,
  mockForExampleGetTree,
  mockForExampleGetOptions,
  mockForExampleUpload
} from '$docs/mock/templates'

// Mock
export default [{
  title: 'FETCH_MOCK_FOR_EXAMPLE',
  url: FETCH_MOCK_FOR_EXAMPLE,
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
        'guid': '@guid',
        'sex': '@integer(0,1)',
        'name': '@cname',
        'email': '@email',
        'phone': '@integer(10000000, 99999999)',
        'age|10-100': 1,
        'date': '@date(yyyy-MM-dd)',
        'title': '@cparagraph(1)',
        'info': '@cparagraph(3,7)',
        'avatar': '@dataImage',
        'province': '@province',
        'city': '@city',
        'county': '@county(true)',
        'zip': '@zip',
        'state': '@integer(0,5)',
        'label|1': ['黄', '毒', '赌', '逃', '前科'],
        'tags|2-7': ['@cword(2,4)'],
        'views': '@integer(10,9000)',
        'shares': '@integer(10,9000)',
        'comments': '@integer(10,9000)',
        'created': '@datetime',
        'ip': '@ip'
      }]
    }
  }
}, {
  title: 'GET_MOCK_FOR_EXAMPLE',
  url: GET_MOCK_FOR_EXAMPLE,
  method: 'get',
  params: {},
  template: {
    code: 0,
    msg: '获取成功',
    data: {
      'id': '@id',
      'guid': '@guid',
      'sex': '@integer(0,1)',
      'name': '@cname',
      'email': '@email',
      'phone': '@integer(10000000, 99999999)',
      'age|10-100': 1,
      'date': '@date(yyyy-MM-dd)',
      'title': '@cparagraph(1)',
      'info': '@cparagraph(3,7)',
      'avatar': '@dataImage',
      'province': '@province',
      'city': '@city',
      'county': '@county(true)',
      'zip': '@zip',
      'state': '@integer(0,5)',
      'label|1': ['黄', '毒', '赌', '逃', '前科'],
      'tags|2-7': ['@cword(2,4)'],
      'views': '@integer(10,9000)',
      'shares': '@integer(10,9000)',
      'comments': '@integer(10,9000)',
      'created': '@datetime',
      'ip': '@ip'
    }
  }
}, {
  title: 'ADD_MOCK_FOR_EXAMPLE',
  url: ADD_MOCK_FOR_EXAMPLE,
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
  title: 'UPDATE_MOCK_FOR_EXAMPLE',
  url: UPDATE_MOCK_FOR_EXAMPLE,
  method: 'patch',
  params: {},
  template: {
    code: 0,
    msg: '更新成功',
    data: true
  }
}, {
  title: 'REMOVE_MOCK_FOR_EXAMPLE',
  url: REMOVE_MOCK_FOR_EXAMPLE,
  method: 'delete',
  params: {},
  template: {
    code: 0,
    msg: '删除成功',
    data: true
  }
}, {
  title: 'BATCH_MOCK_FOR_EXAMPLE',
  url: BATCH_MOCK_FOR_EXAMPLE,
  method: 'post',
  params: {},
  template: {
    code: 0,
    msg: '批量删除成功',
    data: true
  }
}, {
  title: 'GET_COLUMNS',
  url: GET_COLUMNS,
  method: 'post',
  params: {},
  template: mockForExampleGetColumns
}, {
  title: 'LOGIN',
  url: LOGIN,
  method: 'post',
  params: {},
  template: mockForExampleLogin
}, {
  title: 'LOGOUT',
  url: LOGOUT,
  method: 'post',
  params: {},
  template: mockForExampleLogout
}, {
  title: 'GET_MENUS',
  url: GET_MENUS,
  method: 'post',
  params: {},
  template: mockForExampleGetMenus
}, {
  title: 'GET_TREE',
  url: GET_TREE,
  method: 'post',
  params: {},
  template: mockForExampleGetTree
}, {
  title: 'GET_OPTIONS',
  url: GET_OPTIONS,
  method: 'post',
  params: {},
  template: mockForExampleGetOptions
}, {
  title: 'MOCK_UPLOAD',
  url: MOCK_UPLOAD,
  method: 'post',
  params: {},
  template: mockForExampleUpload
}]
