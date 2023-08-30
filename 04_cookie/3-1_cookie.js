//* 쿠키의 생성
//* 1. cookie.js 파일에  간단한 웹 서버를 구현 
//<img src='./2023-08-30-17-59-58.png.png'></img>
//브라우저에서 오른쪽 클릭> 검사 클릭>네트워크 탭 클릭>브라우저 새로고침
// 참조문서 https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies
var http = require('http');
http.createServer(function(request, response) {
    response.end('Cookie!!');
}).listen(3000);
