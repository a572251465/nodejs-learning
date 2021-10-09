const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'output1.txt')
const stat = fs.statSync(filePath)

console.log(`file--${stat.isFile()}`)
console.log(`dir--${stat.isDirectory()}`)
