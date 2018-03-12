const webpack = require('webpack')
const path = require('path')
const MossadPlugin = require('../src')

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  plugins: [
    new MossadPlugin({
      filename: [
        'index.html'
      ]
    })
  ]
}