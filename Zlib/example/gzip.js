const fs = require('fs')
const zlib = require('zlib')
const path = require('path')

const gzip = zlib.createGzip()

const input = fs.createReadStream(path.resolve(__dirname, '1.txt'))
const output = fs.createWriteStream(path.resolve(__dirname, '1.txt.gz'))
input.pipe(gzip).pipe(output)
