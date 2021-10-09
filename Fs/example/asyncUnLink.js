const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'fileForWrite.txt')
fs.unlinkSync(filePath)
console.log('文件删除成功')
