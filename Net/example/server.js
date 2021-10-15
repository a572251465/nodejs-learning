const net = require('net')

const port = 3000
const host = '127.0.0.1'

const server = net.createServer(function (socket) {
  console.log(`服务端：收到来自客户端的请求`)

  socket.on('data', function (data) {
    console.log('服务端：收到客户端数据，内容为{' + data.toString() + '}')

    socket.write(`你好，我是服务端`)
  })

  socket.on('close', function () {
    console.log(`服务端：客户端连接断开`)
  })
})

server.listen(port, host, function () {
  console.log(`服务端：开始监听来自客户端的请求`)
})
