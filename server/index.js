const express = require('express')
const app = express()
const path = require('path')

publicPath = path.join(__dirname, '/public')

app.use(express.static(publicPath))

app.listen(3000, () => {
  console.log('hello! 3000')
})
