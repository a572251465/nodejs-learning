const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'fileForRead.txt')

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('文件内容：' + content)
})
