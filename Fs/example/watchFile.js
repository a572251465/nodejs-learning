const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'watchFile.txt')
const options = {
  persistent: true,
  interval: 200
}
fs.watchFile(filePath, options, function (cur, pre) {
  console.log(`上次修改时间为：${pre.mtime}`)
  console.log(`这次修改时间为：${cur.mtime}`)
})
