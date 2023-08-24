//* 1. 사용자가 요청한 URL 구분

var http = require('http'); // HTTP 모듈을 불러옴
var fs = require('fs'); // 파일 시스템 모듈을 불러옴

// 서버 생성
var app = http.createServer(function(request, response) {
    var url = request.url; // 클라이언트 요청 URL을 가져옴
    console.log(url); // URL을 콘솔에 로깅

    if(url == '/') {
        url = '/index.html'; // 루트 URL이면 index.html 파일을 제공
    }
    if(url == '/favicon.ico') {
        return response.writeHead(404); // 파비콘 요청에는 404 응답을 보냄
    }

    response.writeHead(200); // 정상 응답 코드 설정
    response.end(fs.readFileSync(__dirname + url)); // 파일을 읽고 클라이언트에 응답
});

app.listen(3000); // 3000 포트에서 서버 실행


// 에러는 맞지만 콘솔에 나옴