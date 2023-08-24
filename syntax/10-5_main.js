//* 5. 쿼리 스트링에서 ID 값만 추출
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);//여기
    if(_url == '/') {
        _url = '/index.html';
    }
    if(_url == '/favicon.ico') {
        return response.writeHead(404);0
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000);
