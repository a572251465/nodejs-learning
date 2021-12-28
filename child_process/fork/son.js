let sum = 0,
  i = 0
for (; i < 100 * 3000 * 300; i++) sum += i

process.send('计算结果是：' + sum)
process.on('message', function (e) {
  console.log(e)

  process.exit()
})
