const fs = require('fs')
const opn = require('opn')
const express = require('express')
const app = express()

app.use(express.static(__dirname+"/static"))

app.listen(3000, () => {
  console.log("Example app listening on port 3000!")
  // opn('http://localhost:3000')
})