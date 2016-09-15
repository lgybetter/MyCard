//引入express框架
var express = require('express');
var app = express();

//服务端创建
var server = require('http').createServer(app);
//使用socket.io进行通信
var port = process.env.POST || 8000;

//服务开启
server.listen(port,function() {
	console.log("Running at port: " + port);
});

//使用静态文件目录
app.use(express.static(__dirname + '/public'));