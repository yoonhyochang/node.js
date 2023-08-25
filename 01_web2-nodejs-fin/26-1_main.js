//* App-함수를 이용해 코드 정리하기
//* 1. 중복되는 코드를 templateHTML 함수로 만들기

var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body) {//여기부터
    return `
    <!doctype html>
    <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${body}
        </body>
    </html>
    `;
}//여기까지


var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/') {
        if(queryData.id === undefined) {
            fs.readdir('./data', function(error, filelist) {
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = '<ul>';
                var i = 0;
                while(i < filelist.length) {
                    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i = i + 1;
                }
                list = list+'</ul>';
                var template = `
                <!doctype html>
                <html>
                    <head>
                        <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1><a href="/">WEB</a></h1>
                        ${list}
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </body>
                </html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readdir('./data', function(error, filelist) {
                var list = '<ul>';
                var i = 0;
                while(i < filelist.length) {
                    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i = i + 1;
                }
                list = list+'</ul>';
                fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
                    var title = queryData.id;
                    var template = `
                    <!doctype html>
                    <html>
                        <head>
                            <title>WEB1 - ${title}</title>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1><a href="/">WEB</a></h1>
                            ${list}
                            <h2>${title}</h2>
                            <p>${description}</p>
                        </body>
                    </html>
                    `;
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
