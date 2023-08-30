//* 세션과 인증
//* 쿠키옵션(Path와 Domain)
//* 1. Path 옵션을 가진 쿠키 생성
//특정 디렉터리를 지정하면 해당 디렉터리와 해당 디렉터리의 하위 디렉터리에서만 쿠키가 활성화됨
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
            'HttpOnly=HttpOnly; HttpOnly',
            'Path=Path; Path=/cookie'//durl
        ]
    });
    response.end('Cookie!!');
}).listen(3000);
