const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'mkdir')
fs.mkdir(filePath, (err) => {
  if (err) throw err
  console.log('目录创建成功')
})
