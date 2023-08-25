//* 3. pathname에 따라 다르게 처리(화면을 출력하거나 에러를 출력)
var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname; //여기
    var title = queryData.id;

    if(pathname === '/') { //여기
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
            response.writeHead(200);
            response.end(template);
        });
    } else { //여기
        response.writeHead(404); //여기
        response.end('Not found');//여기
    }
});
app.listen(3000);
