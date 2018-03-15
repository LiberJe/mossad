const fs = require('fs')
const path = require('path')


class MossadWebpackPlugin {
  constructor (options = {}) {
    let injectScript = fs.readFileSync(__dirname+'/inject.js', 'utf-8')
    let finalScript = `<script>${injectScript}</script>`
    this.injection = finalScript
  }

  apply (compiler) {
    compiler.plugin('compilation', (compilation) => {
      const injectPos = '</body>'
      
      compilation.plugin(
        'html-webpack-plugin-before-html-processing',
        (data, cb) => {
          data.html = data.html.replace(`${injectPos}`, `${this.injection}${injectPos}`)
          if (cb) {
            cb(null, data)
          }
        }
      )
    })
  }
}

module.exports = MossadWebpackPlugin