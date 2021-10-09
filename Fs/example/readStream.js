const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'fileForRead.txt')

const readStream = fs.createReadStream(filePath, { encoding: 'utf-8', highWaterMark: 2 })
readStream.on('data', function (data) {
  console.log(`文件内容：${data}`)
})
readStream.on('open', function () {
  console.log('文件被打开了')
})
readStream.on('end', function () {
  console.log('文件读取完毕')
})
readStream.on('close', function () {
  console.log('文件被关闭了')
})
readStream.on('error', function (e) {
  console.log(e)
})
