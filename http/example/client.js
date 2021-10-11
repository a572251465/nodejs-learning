const http = require('http')

const client = http.get('http://127.0.0.1:3000', function (res) {
  res.pipe(process.stdout)
})
