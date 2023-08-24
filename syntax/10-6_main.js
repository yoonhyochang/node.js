//* 요청 값에 따라 다르게 응답하기
//* 1. 쿼리 스트링에서 입려받은 id 값을 웹페이지로 출력
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/') {
        _url = '/index.html';
    }
    if(_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);//여기
});
app.listen(3000);
