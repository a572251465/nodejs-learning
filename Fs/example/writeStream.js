const path = require('path')
const fs = require('fs')

const filePath = path.resolve(__dirname, 'fileForWrite.txt')

const writeStream = fs.createWriteStream(filePath, 'utf-8')
writeStream.on('close', function () {
  console.log('写入流关闭了')
})

writeStream.write('hello')
writeStream.write('world1')
writeStream.end()
