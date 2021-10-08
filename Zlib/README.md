## Zlib 模块 进行文件压缩

```
1. 头部设置<Accept-Encoding: gzip, deflate> 表示文件是压缩文件
2. 服务器端进行状态返回的同时设置<content-encoding: gzip>
3. 文件压缩的实例参照<gzip.js>
4. 文件解压的实例参照<gunZip.js>
```
