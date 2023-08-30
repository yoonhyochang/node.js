//* 5. 쿠키값이 undefined인지 확인하는 조건문을 추가
var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    var cookies = {};
    if(request.headers.cookie !== undefined) {//여기
        cookies = cookie.parse(request.headers.cookie);//여기
    }
    console.log(cookies.yummy_cookie);//여기
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    });
    response.end('Cookie!!');
}).listen(3000);
