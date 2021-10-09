const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'fileForWrite.txt')

try {
  fs.writeFileSync(filePath, 'hello word1', 'utf-8')
} catch (e) {
  console.log(e)
}
