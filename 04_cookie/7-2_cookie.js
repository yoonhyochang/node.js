//* 2. HttpOnly 옵션을 가진 쿠키 생성
// HTTP 프로토콜로 통신하는 경우 쿠키 전송O,자바스크립트로 쿠키값 못가져옴
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
            'Secure=Secure; Secure',
            'HttpOnly=HttpOnly; HttpOnly'//여기
        ]
    });
    response.end('Cookie!!');
}).listen(3000);
