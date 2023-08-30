//* 2. 쿠키를 생성하는 코드를 주석 처리
var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response) {
    console.log(request.headers.cookie);
    var cookies = {};
    if(request.headers.cookie !== undefined) {
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    // response.writeHead(200, {
    //     'Set-Cookie':[
    //         'yummy_cookie=choco',
    //         'tasty_cookie=strawberry',
    //         `Permanent=cookies; Max-Age=${60*60*24*30}`,
    //         'Secure=Secure; Secure',
    //         'HttpOnly=HttpOnly; HttpOnly',
    //         'Path=Path; Path=/cookie'
    //     ]
    // });
    response.end('Cookie!!');
}).listen(3000);
//<img src='./2023-08-30-21-00-53.png' >http://localhost:3000/cookie 로 접속하면 PATH 쿠키가 아직 살아 있음</img>