const fs = require('fs')
const path = require('path')
const http = require('http')
const zlib = require('zlib')

const responseText = 'hello wold'

const server = http.createServer(function (req, res) {
  const acceptEncoding = req.headers['accept-encoding']
  if (acceptEncoding.indexOf('gzip') !== -1) {
    res.writeHead(200, {
      'Content-Encoding': 'gzip'
    })
    res.end(zlib.gunzipSync(responseText))
  } else {
    res.end(responseText)
  }
})

server.listen(3001, () => {
  console.log('服务启动成功：http://localhost:3001')
})
