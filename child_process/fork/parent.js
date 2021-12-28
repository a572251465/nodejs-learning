const { fork } = require('child_process')

const cp = fork('son.js', {
  cwd: __dirname
})

cp.on('message', (e) => {
  console.log(e)
})

cp.send('子类你好啊', function () {})

cp.on('close', function () {
  console.log('子进程关闭了')
})

cp.on('exit', function () {
  console.log('子进程退出了')
})
