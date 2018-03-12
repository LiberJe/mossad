const fs = require('fs')
const path = require('path')

class MossadWebpackPlugin {
  constructor (options = {}) {
    this.options = options
    const { filename = [] } = options
    this.filename = filename

    let injectScript = fs.readFileSync(__dirname+'/inject.js', 'utf-8')
    let finalScript = `<script>${injectScript}</script>`
    this.injection = finalScript
  }

  getHtml (path) {
    return fs.readFileSync(path, 'utf-8')
  }

  apply (compiler) {
    compiler.plugin('emit', function(compilation, callback) {
      console.log("this is Mossad webpack plugin!")
      const injectPosition = '</body>'
      // console.log(Object.keys(compilation.assets))
      if (this.filename.length) {
        this.filename.filter(item => item.match(/(.html)$/)).map(item => {
          let filepath = path.resolve(compiler.options.output.path, item)

          let file = this.getHtml(filepath)
          let outputHtml = file.replace(injectPosition, `${this.injection}${injectPosition}`)
          compilation.assets[item] = {
            source: () => outputHtml,
            size: () => fs.statSync(filepath).size
          }
          console.log(Object.keys(compilation.assets))
        })
      } else {
        const outputPath = compilation.outputOptions.path || ''
        const htmlAssets = Object.keys(compilation.assets).filter(item => item.match(/(.html)$/))
        htmlAssets.forEach(function (htmlAsset) {
          const filePath = `${outputPath}/${htmlAsset}`
          const sourceHtml = compilation.assets[htmlAsset].source()
          const outputHtml = sourceHtml.replace(injectPosition, `${this.injection}${injectPosition}`)
          compilation.assets[htmlAsset] = {
            source: () => outputHtml,
            size: () => fs.statSync(filePath).size
          }
        }.bind(this))
      }
  
      callback()
    }.bind(this))
  }
}

module.exports = MossadWebpackPlugin