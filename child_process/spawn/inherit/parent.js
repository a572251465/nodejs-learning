const { spawn } = require('child_process')

const cp = spawn('node', ['son.js'], {
  cwd: __dirname,
  // 表示子类的输入以及输出跟父类共享
  stdio: [process.stdin, process.stdout, process.stderr]
})

// 监听子进程的关闭状态
cp.on('close', () => {
  console.log('子进程关闭了')
})

// 监听子进程关闭状态
cp.on('exit', () => {
  console.log('子进程退出了')
})
