var webpack = require('webpack');

module.exports = {
  plugins: {
    'postcss-import': {
      path: './app',
      addDependencyTo: webpack
    },
    'postcss-apply': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-css-variables': {},
    'postcss-short': {},
  }
}
