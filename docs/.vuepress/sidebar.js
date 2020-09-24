function sort(array) {
  array.sort(function (a, b) {
    return a > b ? 1 : -1
  })
  return array
}

function createMenus(title, children) {
  return {
    title: title,
    collapsable: true,
    children: sort(children)
  }
}

module.exports = {
  '/element/': [
    createMenus('Basic', [
      'layout',
      'container',
      'color',
      'typography',
      'border',
      'icon',
      'button',
      'link'
    ]),
    createMenus('Form', [
      'radio',
      'checkbox',
      'input',
      'input-number',
      'select',
      'cascader',
      'switch',
      'slider',
      'time-picker',
      'date-picker',
      'datetime-picker',
      'upload',
      'rate',
      'color-picker',
      'transfer',
      'form'
    ]),
    createMenus('Data', [
      'table',
      'tag',
      'progress',
      'tree',
      'pagination',
      'badge'
    ]),
    createMenus('Notice', [
      'alert',
      'loading',
      'message',
      'message-box',
      'notification'
    ]),
    createMenus('Navigation', [
      'menu',
      'tabs',
      'breadcrumb',
      'page-header',
      'dropdown',
      'steps'
    ]),
    createMenus('Others', [
      'dialog',
      'tooltip',
      'popover',
      'popconfirm',
      'card',
      'carousel',
      'collapse',
      'timeline',
      'divider',
      'calendar',
      'image',
      'backtop',
      'infiniteScroll',
      'drawer'
    ])
  ],
  '/ui/components/': [
    createMenus('功能辅助', [
      'animate',
      'drag',
      'drop',
      'resize',
      'promise',
      'affix',
      'clipboard',
      'lazy',
      'watermark',
      'capture',
      'print',
      'sortable',
      'tree-connect'
    ]),
    createMenus('基础元件', [
      'header',
      'spin',
      'empty',
      'icon',
      'typography',
      'skeleton',
      'result',
      'number',
      'date',
      'timer',
      'corner-mark'
    ]),
    createMenus('排版布局', [
      'float',
      'fixed',
      'flex',
      'layout',
      'pro'
    ]),
    createMenus('容器修饰', [
      'panel',
      'wrapper',
      'dialog',
      'container',
      'tabs'
    ]),
    createMenus('导航菜单', [
      'menu',
      'navbar',
      'sidebar',
      'back-top',
      'contextmenu',
      'anchor',
      'radial-menu'
    ]),
    createMenus('数据录入', [
      'form',
      'filter',
      'form-item',
      'range',
      'editor',
      'tag-input',
      'tag-select',
      'tree-select',
      'edit-tags',
      'cron',
      'login'
    ]),
    createMenus('数据展示', [
      'detail',
      'avatar',
      'avatars',
      'list',
      'marquee',
      'table',
      'crud',
      'water-fall',
      'tag-canvas',
      'highlight',
      'card-list',
      'stat-card',
      'description'
    ]),
    createMenus('动画效果', [
      'revolve',
      'flip',
      'wave'
    ])
  ],
  '/ui/charts/': [
    '',
    'chart',
    'line',
    'bar',
    'pie',
    'map',
    'radar',
    'cloud',
    'fill',
    'gl',
    'geojson'
  ],
  '/ui/map/': [
    '',
    'map',
    'geo',
    'palette',
    createMenus('覆盖物组件', [
      'text',
      'image',
      'circle',
      'line',
      'link',
      'rectangle',
      'polygon',
      'html',
      'icon',
      'popup',
      'heat',
      'marker'

    ]),
    createMenus('控件组件', [
      'pointer',
      'placement',
      'layer',
      'overview',
      'zoom',
      'draw',
      'cluster',
      'panel',
      'scale',
      'drawer',
      'measure'
    ]),
    createMenus('动效组件', [
      'scatter',
      'flight',
      'track'
    ]),
    createMenus('工具函数', [
      'area-select',
      'drag',
      'svg-to-img',
      'parse-style'
    ])
  ],
  '/ui/go/': [
    '',
    'diagram',
    'nodes',
    'links',
    'group',
    'layout',
    'overview',
    'palette',
    'app',
    'api'
  ],
  '/ui/pages/': [
    'layout',
    'login',
    'dashboard',
    'form',
    'search-list',
    'list',
    'profile'
  ],
  '/guide/': [
    createMenus('开发指南', [
      'config',
      'constant',
      'cmd',
      'access',
      'extension',
      'coder',
      'route',
      'app'
    ]),
    createMenus('内置资源', [
      'color',
      'theme',
      'vars'
    ]),
    createMenus('进阶教程', [
      'messager'
    ]),
    createMenus('第三方类库', [
      'axios'
    ])
  ]
}
