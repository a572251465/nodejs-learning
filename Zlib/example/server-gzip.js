const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const http = require('http')

const inputFile = path.resolve(__dirname, '1.txt')

const server = http.createServer(function (req, res) {
  const acceptEncoding = req.headers['accept-encoding']
  if (acceptEncoding.indexOf('gzip') !== -1) {
    const gzip = zlib.createGzip()
    res.writeHead(200, {
      'Content-Encoding': 'gzip'
    })
    fs.createReadStream(inputFile).pipe(gzip).pipe(res)
  } else {
    fs.createReadStream(inputFile).pipe(res)
  }
})

server.listen(3000, () => {
  console.log('服务启动成功：http://localhost:3000')
})
