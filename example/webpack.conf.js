const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MossadPlugin = require('../src')

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello Mossad!'
    }),
    new MossadPlugin()
  ]
}