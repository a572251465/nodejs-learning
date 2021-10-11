## 练习 http 模块

```
 1. http.createServer 来创建服务
```

### req 返回值

```
 1. 服务端特有的属性：url
 2. 客户端特有的属性：statusCode statusMessage
 3. req.headers 获取请求的头部
 4. req.httpVersion 获取http请求的版本
 5. req.url 获取请求url
 6. req.method 表示请求方法
```

#### get 方式获取参数

```
 1. 通过req.url来获取get请求的参数。
 2. const query = url.parse(path).query； querystring.parse(query)
```

#### post 方式获取参数

```
  1. 通过req订阅来获取数据，参考文件<postReq.js>
```
