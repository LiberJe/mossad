# mossad
A mobile rolling performance observation webpack plugin.

## Usage

### install

`npm install --save-dev mossad`

### setting

```
const MossadWebpackPlugin = require('mossad')

/* .... */
plugins: [
  new HtmlWebpackPlugin(),
  new MossadWebpackPlugin()
]
```

## About

* 50~60 FPS, Comfortable
* 30~50 FPS, Instable
* Less than 30 FPS, Uncomfortable