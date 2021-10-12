const http = require('http')

const server = http.createServer(function (req, res) {
  res.writeHead('200', 'ok', {
    'Content-Type': 'text/html'
  })
  res.end('hello world')
})

server.listen(3001, function () {
  console.log(`server start port: 3001`)
})
