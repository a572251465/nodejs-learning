const dns = require('dns')

dns.lookup('lihh-core.top', function (err, address, family) {
  if (err) throw err
  console.log(`ip地址是: ${address}`)
})

dns.lookup('lihh-core.top', { all: true }, function (err, address, family) {
  if (err) throw err
  console.log(`ip地址是: ${JSON.stringify(address)}`)
})
