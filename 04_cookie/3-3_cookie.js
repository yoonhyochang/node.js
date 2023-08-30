//* 3. 더 이상 쿠키값을 전송하지 안게 주석으로 처리
var http = require('http');
http.createServer(function(request, response) {
    // response.writeHead(200, {
    //     'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    // });
    response.end('Cookie!!');
}).listen(3000);

//<img src='./2023-08-30-18-31-39.png'> Request Headers 에 추가된 쿠키값</img>
//<img src='./2023-08-30-18-35-05.png'> 쿠키값 지우기</img>