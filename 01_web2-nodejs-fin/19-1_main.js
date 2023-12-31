//* App-오류페이지와 홈페이지 구현
//* Not found 오류 구현
//* 1.기존 main.js 파일 수정
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
        var template = `
        <!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                <ul>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>
        </html>
        `;
        response.writeHead(200); //조건문 지우고 여기 변경
        response.end(template);
    });
});
app.listen(3000);
