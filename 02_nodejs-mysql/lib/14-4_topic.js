//* 4. topic.js에서 db와 template 객체를 사용할 수 있게 불러오기
var db = require('./db');//여기
var template = require('./template.js');//여기

exports.home = function () {
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
