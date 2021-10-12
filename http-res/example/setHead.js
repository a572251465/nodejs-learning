const http = require('http')

const server = http.createServer(function (req, res) {
  res.writeHead(200, 'ok', {
    'Content-Type': 'text-plain'
  })
  // res.setHeader('Content-Type', 'text-plain')
  res.end('setHeader')
  // res.removeHeader
  // res.getHeader
})

server.listen(3002, function () {
  console.log('server start port: 3002')
})
