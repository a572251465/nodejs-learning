## Zlib 模块 进行文件压缩

```
1. 头部设置<Accept-Encoding: gzip, deflate> 表示需要压缩文件
2. 服务器端进行状态返回的同时设置<Content-Encoding: gzip> 表示进行文件压缩
3. 文件压缩的实例参照<gzip.js>
4. 文件解压的实例参照<gunZip.js>
```
