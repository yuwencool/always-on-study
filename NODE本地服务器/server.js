var http = require("http");

http.createServer(function(require, response) {
    //发送HTTP头部
    //HTTP状态码 200 OK
    //内容类型：text/plain
    response.writeHead(200, {'content-type': 'text/plain'});

    //发送响应数据
    response.end("Hi");
}).listen(8888);

//在终端打印如下信息
console.log("Server running at http://127.0.0.1:8888/");