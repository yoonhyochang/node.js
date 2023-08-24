//* 3._url겹침 방지를 위한 _url 로 변수명 수정
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    console.log(_url);
    if(_url == '/') {
        _url = '/index.html';   
    }
    if(_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000);
