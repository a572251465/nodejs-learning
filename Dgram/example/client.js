const port = 33333
const host = '127.0.0.1'

const dgram = require('dgram')
const client = dgram.createSocket('udp4')

const message = Buffer.from('My KungFu is Good!')

client.send(message, port, host, function (err, bytes) {
  if (err) throw err
  console.log('UDP message sent to ' + host + ':' + port)
  client.close()
})
