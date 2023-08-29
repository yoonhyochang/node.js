//* Express 실습 준비
//* 1. pm2를 이용해 웹 애플리케이션을 실행 pm2 start main --watch(콘솔창)
//* 2. pm2 로그 활성화 pm2 log(콘솔창)
//* 3. '사이트에 연결할 수 없음' 오류 발생
//* 4. sanitize-html을 찾을 수 없다는 오류 메시지(콘솔창)
//* 5. npm install 명령어로 모듈 설치 npm install
//* 6. package.json 파일에서 dependencies 항목에 있는 모듈을 자동으로 설치됨
//* 7. pm2 stop main(콘솔창)
//* 8. pm2 start main --watch(콘솔창)
//* 9. pm2 log
//실습 준비완료
console.log('Hello no deamon');
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    if(pathname === '/') {
        if(queryData.id === undefined) {
            fs.readdir('./data', function(error, filelist) {
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                    `<h2>${title}</h2><p>${description}</p>`,
                    `<a href="/create">create</a>`
                );
                response.writeHead(200);
                response.end(html);
            });
        } else {
            fs.readdir('./data', function(error, filelist) {
                var filteredId = path.parse(queryData.id).base;
                fs.readFile(`data/${filteredId}`, 'utf8', function(err, description) {
                    var title = queryData.id;
                    var sanitizedTitle = sanitizeHtml(title);
                    var sanitizedDescription = sanitizeHtml(description, {
                        allowedTags:['h1']
                    });
                    var list = template.list(filelist);
                    var html = template.HTML(sanitizedTitle, list,
                        `<h2>${sanitizedTitle}</h2><p>${sanitizedDescription}</p>`,
                        `<a href="/create">create</a>
                        <a href="/update?id=${sanitizedTitle}">update</a>
                        <form action="delete_process" method="post">
                            <input type="hidden" name="id" value="${sanitizedTitle}">
                            <input type="submit" value="delete">
                        </form>`
                    );
                    response.writeHead(200);
                    response.end(html);
                });
            });
        }
    } else if(pathname === '/create') {
        fs.readdir('./data', function(error, filelist) {
            var title = 'WEB - create';
            var list = template.list(filelist);
            var html = template.HTML(title, list, `
                <form action="/create_process" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                    <p>
                        <textarea name="description" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
            `, '');
            response.writeHead(200);
            response.end(html);
        });
    } else if(pathname === '/create_process') {
        var body = '';
        request.on('data', function(data) {
            body = body + data;
        });
        request.on('end', function() {
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end();
            });
        });
    } else if(pathname === '/update') {
        fs.readdir('./data', function(error, filelist) {
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, description) {
                var title = queryData.id;
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                    `
                    <form action="/update_process" method="post">
                        <input type="hidden" name="id" value="${title}">
                        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                        <p>
                            <textarea name="description" placeholder="description">${description}</textarea>
                        </p>
                        <p>
                            <input type="submit">
                        </p>
                    </form>
                    `,
                    `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
                );
                response.writeHead(200);
                response.end(html);
            });
        });
    } else if(pathname === '/update_process') {
        var body = '';
        request.on('data', function(data) {
            body = body + data;
        });
        request.on('end', function() {
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`data/${id}`, `data/${title}`, function(error) {
                fs.writeFile(`data/${title}`, description, 'utf8', function(err) {
                    response.writeHead(302, {Location: `/?id=${title}`});
                    response.end();
                });
            });
        });
    } else if(pathname === '/delete_process') {
        var body = '';
        request.on('data', function(data) {
            body = body + data;
        });
        request.on('end', function() {
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, function(error) {
                response.writeHead(302, {Location: `/`});
                response.end();
            });
        });
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
});
app.listen(3000);
