const dgram = require('dgram')
const server = dgram.createSocket('udp4')

const port = 33333
const host = '127.0.0.1'

server.on('listening', function () {
  const address = server.address()
  console.log('UDP Server listening on ' + address.address + ':' + address.port)
})

server.on('message', function (message, remote) {
  console.log(remote.address + ':' + remote.port + ' - ' + message)
})

server.bind(port, host)
