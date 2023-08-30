//* cookie 모듈 설치 npm install cookie
//* 3. 쿠키 모듈 사용하기
var http = require('http');
var cookie = require('cookie');//여기
http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    var cookies = cookie.parse(request.headers.cookie); //여기
    console.log(cookies);//여기
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    });
    response.end('Cookie!!');
}).listen(3000);
