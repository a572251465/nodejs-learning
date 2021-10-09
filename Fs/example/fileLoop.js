const fs = require('fs')
const path = require('path')

const rootPath = path.resolve(__dirname, '../../')
const outputPath = path.resolve(__dirname, 'output.txt')
const writeStream = fs.createWriteStream(outputPath, 'utf-8')

const fileLoop = (dir) => {
  const dirList = fs.readdirSync(dir)
  if (dirList.length === 0) return
  let i = 0
  for (; i < dirList.length; i++) {
    const item = dirList[i]
    const newPath = path.join(dir, item)
    const stat = fs.statSync(newPath)
    if (stat.isFile()) {
      writeStream.write(`${newPath}\n`)
      continue
    }
    if (item === 'node_modules') continue
    fileLoop(newPath)
  }
}
fileLoop(rootPath)
writeStream.end()
