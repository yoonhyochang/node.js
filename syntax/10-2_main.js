//* 2.추가를 통한 URL에서 쿼리 스트링 추출
var http = require('http');
var fs = require('fs');
//추가
var url = require('url');

var app = http.createServer(function(request, response) {
    var url = request.url;
    console.log(url);
    if(url == '/') {
        url = '/index.html';
    }
    if(url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
