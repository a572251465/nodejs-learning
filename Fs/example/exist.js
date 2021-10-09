const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'fileForRead.txt')

fs.access(filePath, (err) => {
  if (err) throw err
  console.log('文件存在')
})
