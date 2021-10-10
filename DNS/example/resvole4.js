const dns = require('dns')

dns.resolve4('lihh-core.top', function (err, address) {
  if (err) throw err
  console.log(`ip地址是：${address}`)
})
