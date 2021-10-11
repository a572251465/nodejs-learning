const http = require('http')

const server = http.createServer(function (req, res) {
  let body = ''
  req.on('data', function (thunk) {
    body += thunk
  })
  req.on('end', function () {
    console.log('post body is: ' + body.toString())
    res.end('ok')
  })
})

server.listen(3000, function () {
  console.log('服务启动成功')
})
