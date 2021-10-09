const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'mkdir')
fs.mkdirSync(filePath)
