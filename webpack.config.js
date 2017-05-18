/*
 -  loaders/plugins to think about later in the project:
 *    1. dynamic loading of CSS when code splits (i.e. import()) are used
   *    * dynamic-css-loader
   *    * extract-text-webpack-plugin
   *    * file-loader
   *    * extract-loader
   *  2. image plugins
   *  3. development plugins
   *    * source maps
   *  4. production plugins
   *    * read: 'webpack.js.org/guides/caching'
 -  webpack-dev-server -> webpack-dev-middleware with custom devlopment server
*/

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'app'),

  entry:[
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [

      /* CSS */
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader?modules', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js'
              }
            }
          }
        ]
      },

      /* JS */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      },

      /* Files */
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Portfolio',
      filename: 'index.html',
      template: 'index.template.ejs',
      inject: 'body',
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin(),
  ]
}
