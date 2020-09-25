/**
 * 基础项目引用的babel插件
 */
module.exports = [
  [
    'component',
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk'
    }
  ],
  [
    'component',
    {
      libraryName: '$ui',
      libDir: 'components',
      styleLibraryName: '~node_modules/@chipspc/pc/ui/lib/styles',
      ext: '.scss'
    },
    '$ui'
  ],
  [
    'component',
    {
      libraryName: '$ui/charts',
      libDir: 'packages',
      style: false
    },
    '$ui/charts'
  ],
  [
    'component',
    {
      libraryName: '$ui/map',
      libDir: 'packages',
      style: false
    },
    '$ui/map'
  ]
]
