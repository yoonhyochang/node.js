//* 3. 저자를 추가하는 요청을 처리
var db = require('./db');
var template = require('./template.js');
var qs = require('querystring');//여기

exports.home = function(request, response) {//여기
    db.query(`SELECT * FROM topic`, function(error, topics) {
        db.query(`SELECT * FROM author`, function(error2, authors) {
            var title = 'author';
            var list = template.list(topics);
            var html = template.HTML(title, list,
                `
                ${template.authorTable(authors)}
                <style>
                    table {
                        border-collapse: collapse;
                    }
                    td {
                        border: 1px solid black;
                    }
                </style>
                <form action="/author/create_process" method="post">
                    <p>
                        <input type="text" name="name" placeholder="name">
                    </p>
                    <p>
                        <textarea name="profile" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
                `,
                ``
            );
            response.writeHead(200);
            response.end(html);
        });
    });
}

exports.create_process = function(request, response) {//여기
    var body = '';//여기
    request.on('data', function(data) {//여기
        body = body + data;
    });
    request.on('end', function() {
        var post = qs.parse(body);
        db.query(`
            INSERT INTO author (name, profile)
                VALUES(?, ?)`,//여기
            [post.name, post.profile],
            function(error, result) {
                if(error) {
                    throw error;
                }
                response.writeHead(302, {Location: `/author`});//여기
                response.end();
            }
        );
    });
}
