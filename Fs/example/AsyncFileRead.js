const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'fileForRead.txt')

try {
  const content = fs.readFileSync(filePath, 'utf-8')
  console.log(content)
} catch (e) {
  console.log(e)
}
