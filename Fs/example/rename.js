const fs = require('fs')
const path = require('path')

const input = path.resolve(__dirname, 'output.txt')
const output = path.resolve(__dirname, 'output1.txt')

fs.renameSync(input, output)
