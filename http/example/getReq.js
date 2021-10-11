const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer(function (req, res) {
  const path = req.url
  const query = url.parse(path).query
  console.log(querystring.parse(query))
  res.end('ok')
})

server.listen(3000, function () {
  console.log('服务启动成功')
})
