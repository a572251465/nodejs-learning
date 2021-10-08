const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const gunZip = zlib.createGunzip()

const input = fs.createReadStream(path.resolve(__dirname, '1.txt.gz'))
const output = fs.createWriteStream(path.resolve(__dirname, '1.txt'))

input.pipe(gunZip).pipe(output)
