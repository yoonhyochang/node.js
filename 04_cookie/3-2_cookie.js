//* 2. response.writeHead()를 이용해 쿠키값을 전송
var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, {//여기
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']//여기
    });//여기
    response.end('Cookie!!');
}).listen(3000);
//<img src='./2023-08-30-18-23-31.png'> Response의 Headers에 추가 된 두 개의 쿠키</img>
// Request headers 에는 아직없음