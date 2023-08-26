//* Node.js-패키지 매니저와 PM2
// 패키지 매니저: 패키지(소프트웨어)를 설치, 업데이트 ,삭제 등 관리
// PM2 프로세스를 관리해주는 프로그램
//* 1. PM2 설치 npm install pm2 -g 명렁
//* 2. PM2 실행pm2 start 29-1_main.js

//* 프로세스 감시 pm2 monit

//* 프로세스 강제종료시 바탕화면에서 Ctrl+Shift_Esc 키보드 누름>세부 정보탭이동>node.exe 오른쪽 클릭 후 프로세스 종료

//* 프로세스 목록 확인과 중단 
//* 1. 프로세스 목록 확인 pm2 list
//* 2. 프레세스 중단 pm2 stop 29-1_main

//* 소스파일 감시 (소스를 고치고 프로그램을 재시동 했던 방식을 자동화 할 수 있음)
//* 1. pm2 start 29-1_main.js --watch

//* 문제를 확인하는데 도움을 주는 명령 pm2 log



var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body) {
    return `
    <!doctype html>
    <html>
        <head>
            <title>WEB2 - ${title}</title> 
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB3</a></h1> <!-- 여기 -->
            ${list}
            ${body}
        </body>
    </html>
    `;
}

function templateList(filelist) {
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i = i + 1;
    }
    list = list+'</ul>';
    return list;
}

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/') {
        if(queryData.id === undefined) {
            fs.readdir('./data', function(error, filelist) {
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = templateList(filelist);
                var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readdir('./data', function(error, filelist) {
                fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
                    var title = queryData.id;
                    var list = templateList(filelist);
                    var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
                    response.writeHead(200);
                    response.end(template);
                });
            });
        }
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);
