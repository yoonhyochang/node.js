//* 3. 더 이상 쿠키값을 전송하지 안게 주석으로 처리
var http = require('http');
http.createServer(function(request, response) {
    // response.writeHead(200, {
    //     'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    // });
    response.end('Cookie!!');
}).listen(3000);
