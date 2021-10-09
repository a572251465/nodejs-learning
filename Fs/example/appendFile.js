const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'watchFile.txt')
fs.appendFile(filePath, 'append file', (err) => {
  if (err) throw err
  console.log('文件内容追加成功')
})
