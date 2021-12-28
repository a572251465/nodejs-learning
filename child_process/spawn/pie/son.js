let sum = 0,
  i = 0

for (; i < 100 * 2020 * 2300; i++) sum += i

process.stdout.write(String(sum))

// 订阅父类给子类的数据
process.stdin.on('data', (e) => {
  console.log(e.toString())
  process.nextTick(() => {
    process.kill()
  })
})
