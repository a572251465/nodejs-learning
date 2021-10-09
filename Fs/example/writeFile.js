const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'fileForWrite.txt')
fs.writeFile(filePath, 'hello wold', 'utf-8', (err) => {
  if (err) {
    console.log(err)
  }
})
