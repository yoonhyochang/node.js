//* 2. 쿠키 읽어오기
var http = require('http');
http.createServer(function(request, response) {
    console.log(request.headers.cookie);//여기
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    });
    response.end('Cookie!!');
}).listen(3000);
ㅣ