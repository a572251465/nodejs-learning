const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, 'output1.txt')
fs.chmod(filePath, '777', function (err) {
  if (err) throw err
  console.log('权限修改成功')
})
