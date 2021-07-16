const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy, addWebpackPlugin } = require('customize-cra')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    // eslint-disable-next-line no-useless-computed-key
    ['@']: path.resolve(__dirname, 'src')
  }),
  addDecoratorsLegacy(),
  addWebpackPlugin(
    new ProgressBarPlugin(), // webpack 打包进度条
  )
)
