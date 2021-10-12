const http = require('http')

const server = http.createServer(function (req, res) {
  res.end('ok')
})

server.listen(3000, function () {
  console.log('serve start port 3000')
})
