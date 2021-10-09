## fs 文件模块

```
  1. fs.readFileSync 通过同步函数来读取文件内容
    1. 缺点：如果内容太大，可能会淹没内存
  2. fs.readFile 通过异步来读取文件内容
  3. fs.createReadStream 通过文件流来读取文件，能够监听文件的open, data, end, close等
  4. fs.writeFile 通过异步来进行文件内容写入
  5. fs.writeFileSync 通过同步进行文件内容写入
  6. fs.createWriteStream 使用流的形式对文件进行写入，包括write函数，同时需要手动调用end()函数进行关闭
  7. fs.access 通过异步的形式判断文件是否存在 API[exists]已经被废弃
  8. fs.accessSync 通过同步的形式判断文件是否存在
  9. fs.mkdir 使用异步的形式创建目录，如果目录已经存在，直接报错
  10. fs.mkdirSync 使用同步的方式创建目录，如果目录已存在，直接报错
  11. fs.unlink 使用异步的形式来删除文件，如果文件不存在，直接报错
  12. fs.unlinkSync 使用同步的形式来删除文件，如果文件不存在，直接报错
  13. fs.readdirSync 使用同步来读取目录，只能读一层
  14. fs.renameSync 使用同步的方式进行文件重命名
  15. fs.watchFile 异步监听文件变化
  16. fs.chmod 使用异步的方式修改权限
  17. fs.statSync 已同步方式判断文件的状态 结果有函数isFile  isDirectory等
  18. fs.appendFile 已异步的方式进行文件内容的追加
  19. fs.rmdir 已异步的形式删除文件夹
```
