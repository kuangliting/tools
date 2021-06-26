const express = require('express');
const path = require('path');
const request = require('request');
// 配置静态文件服务中间件
// server地址
const app = express();
// 请求的IP
let serverUrl = 'http://192.168.1.101:18080';
app.use(express.static(path.join(__dirname, './')));
app.use('/', function (req, res) {
  
  res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
  // //允许的header类型
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  // //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // 可以带cookies
  res.header("Access-Control-Allow-Credentials", true);
  //console.log(req.url)
  let url = serverUrl + req.url;
  req.pipe(request(url)).pipe(res);
});
app.listen(9001, 'localhost', function () {
  console.log('server is running at port 9001');
});
