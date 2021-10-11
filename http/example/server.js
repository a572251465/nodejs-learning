const http = require('http')

const server = http.createServer(function (req, res) {
  console.log(req.httpVersion, '-----httpVersion')
  console.log(req.url, '-----url')
  console.log(req.method, '------method')
  const url = req.url
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end(`您访问的地址是：${url}`)
})

server.listen(3000, function () {
  console.log('服务启动成功')
})
