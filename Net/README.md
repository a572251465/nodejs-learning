## net 模块

```
  1. 服务端
    1. 通过net.createServer来建立通信， listen来监听端口，订阅data, close事件流
  2. 客户端
    1. 通过net.createConnection 来建立通信，end()来结束通信，订阅data, close事件流
```

### net.Server

```
  1. server.address() 返回服务端的信息，必须ip，端口等
  2. server.close(callback) 关闭服务器
  3. server.ref()/ server.unref() 主要用于将server 加入事件循环/从事件循环里面剔除，影响就在于会不会影响进程的退出
  4. 事件 listening/connection/close/error
    1. listening: 调用 server.listen()，正式开始监听请求的时候触发
    2. connection: 当有新的请求进来时触发，参数为请求相关的 socket
    3. close：服务端关闭的时候触发
    4. error：服务出错的时候触发，比如监听了已经被占用的端口
```

#### net.Socket

```
  1. 连接相关
    1. socket.connect() 有3中不同的参数，用于不同的场景
    2. socket.setTimeout() 用来进行连接超时设置
    3. socket.setKeepAlive() 用来设置长连接
    4. socket.destroy(）、socket.destroyed：当错误发生时，用来销毁socket，确保这个socket上不会再有其他的IO操作
  2. 数据读写相关
    1. socket.write()、socket.end()、socket.pause()、socket.resume()、socket.setEncoding()、socket.setNoDelay()
  3. 数据属性相关
    1. socket.bufferSize、socket.bytesRead、socket.bytesWritten
  4. 事件循环相关
    1. socket.ref()、socket.unref()
  5. 地址相关
    1. socket.address()
```

### 发布订阅流

```
  1. data：当收到另一侧传来的数据时触发
  2. connect：当连接建立时触发
  3. close：连接断开时触发。如果是因为传输错误导致的连接断开，则参数为error
  4. end：当连接另一侧发送了 FIN 包的时候触发（读者可以回顾下HTTP如何断开连接的）。默认情况下（allowHalfOpen == false），socket会完成自我销毁操作。但你也可以把 allowHalfOpen 设置为 true，这样就可以继续往socket里写数据。当然，最后你需要手动调用 socket.end()
  5. error：当有错误发生时，就会触发，参数为error
  6. timeout：提示用户，socket 已经超时，需要手动关闭连接
```
