const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'fileForRead.txt')

try {
  fs.accessSync(filePath)
  console.log('文件存在')
} catch (e) {
  console.log(e)
}
