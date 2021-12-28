const { spawn } = require('child_process')

const cp = spawn('node', ['son.js'], {
  cwd: __dirname,
  // 进程之间的通信 是基于流来实现的
  stdio: ['pipe', 'pipe', 'pipe']
})

// 订阅子类给父类 基于流传递的数据
cp.stdout.on('data', (e) => {
  console.log(e.toString())
})

// 订阅错误信息
cp.on('error', (e) => {
  console.log('error: ', e.toString())
})

// 基于流 给子类写数据
cp.stdin.write('父给子类数据')

// 订阅进程关闭
cp.on('close', () => {
  console.log('子进程关闭了')
})

// 订阅进程退出
cp.on('exit', () => {
  console.log('子进程退出了')
})
