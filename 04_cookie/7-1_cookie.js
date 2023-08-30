//* 쿠키옵션(Secure와 HttpOnly)
//* 1. Secure 옵션을 가진 쿠키 생성
//HTTPS 프로토콜로 통신하는 경우에만 쿠키 생성
var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    var cookies = {};
    if(request.headers.cookie !== undefined) {
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    response.writeHead(200, {
        'Set-Cookie':[
            'yummy_cookie=choco',
            'tasty_cookie=strawberry',
            `Permanent=cookies; Max-Age=${60*60*24*30}`,
            'Secure=Secure; Secure'//여기
        ]
    });
    response.end('Cookie!!');
}).listen(3000);
