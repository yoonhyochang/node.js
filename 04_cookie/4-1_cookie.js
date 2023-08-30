//* 쿠키 읽기
// 참조 https://stackoverflow.com/questions/3393854/get-and-set-a-single-cookie-with-node-js-http-server
//* 1. 쿠키 생성하기(주석 해제)
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {//여기
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']//여기
    });//여기
    response.end('Cookie!!');
}).listen(3000);
