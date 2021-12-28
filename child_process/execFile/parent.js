const { execFile } = require('child_process')

// 直接执行文件
const cp = execFile('node', ['son.js'], {
  cwd: __dirname
}, function(err, stdout, stderr) {
  // 通过回调来触发结果
  console.log(stdout)
})

cp.on('close', function() {
  console.log('子进程关闭了')
})

cp.on('exit', function() {
  console.log('子进程退出了')
})
