## http response

```
1. 通过res返回的值包括：状态代码/状态描述信息 响应头部 相应主体
2. 设置状态代码，以及状态描述信息。res.writeHead/ res.statusCode/ res.statusMessage
  1. res.writeHead 可以提供额外的功能
  2. 当响应头部发送出去后，res.statusCode/res.statusMessage 会被设置成已发送出去的 状态代码/状态描述信息
3. 设置响应头部的，res.writeHead/ res.setHeader
  1. res.writeHead 不单单能设置header
  2. res.writeHead 会覆盖 res.setHeader的同名设置，反之会报错
4. 方法
  1. res.removeHeader,
  2. res.getHeader (key使用小写)
  3. res.setHeader
```

### 设置响应主体

```
1. 使用res.write 来说设置响应体，可以多次调用
2. 使用res.end 来设置响应体，表示响应已经结束了
3. 以上两种情况无论如何都会调用res.end表示响应结束
```
