//* 상세 보기와 글 생성 코드 정리
//* 7. 상세 보기 페이지의 코드를 topic.js 파일로 분리
var db = require('./db');
var template = require('./template.js');
var url = require('url'); //여기

exports.home = function(request, response) {
    db.query(`SELECT * FROM topic`, function(error,topics) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics);
        var html = template.HTML(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}

exports.page = function(request, response) {//여기부터   //의존성 추가
    var _url = request.url;//의존성 추가
    var queryData = url.parse(_url, true).query;//의존성 추가
    db.query(`SELECT * FROM topic`, function(error, topics) {
        if(error) {
            throw error;
        }
        db.query(`SELECT * FROM topic LEFT JOIN author ON topic.author_id=author.id WHERE
                 topic.id=?`,[queryData.id], function(error2, topic) {
            if(error2) {
                throw error2;
            }
            console.log(topic);
            var title = topic[0].title;
            var description = topic[0].description;
            var list = template.list(topics);
            var html = template.HTML(title, list,
                `<h2>${title}</h2>
                ${description}
                <p>by ${topic[0].name}</p>
                `,
                ` <a href="/create">create</a>
                    <a href="/update?id=${queryData.id}">update</a>
                    <form action="delete_process" method="post">
                        <input type="hidden" name="id" value="${queryData.id}">
                        <input type="submit" value="delete">
                    </form>`
            );
            response.writeHead(200);
            response.end(html);
        });
    });
}//여기까지
