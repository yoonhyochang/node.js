//* 4. 쿠키 모듈을 사용해 yummy_cookie 가져오기
var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    var cookies = cookie.parse(request.headers.cookie);
    console.log(cookies.yummy_cookie);//여기
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    });
    response.end('Cookie!!');
}).listen(3000);
