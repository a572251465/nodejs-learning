const { exec } = require('child_process')

exec('path', {cwd: __dirname}, function(err, stdout, stderr) {
  console.log(stdout)
  console.log(stderr.toString())
})