## DNS 解析

```
  1. dns.lookup 通过域名来解析ip, 通过指定参数all: true来实现一个域名对应多个ip
  2. dns.resolve4 通过域名来解析ip地址
```

### lookup 以及 resolve4 区别

```
  1. 如果本地host配置域名映射的ip的时候，lookup会有影响，但是resolve4没有影响
```
