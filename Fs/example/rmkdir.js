const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'mkdir')
fs.rmdir(filePath, (err) => {
  if (err) throw err
  console.log('文件夹删除成功')
})
