const net = require('net')

const port = 3000
const host = '127.0.0.1'

const client = net.createConnection(port, host)

client.on('connect', function () {
  console.log('客户端：已经与服务器建立连接')
  client.write('其实我就是测试下')
})

client.on('data', function (data) {
  console.log('客户端：收到服务端数据，内容为{' + data + '}')
})

client.on('end', function () {
  console.log('客户端：连接断开')
})

// client.end('你好，我是客户端')
