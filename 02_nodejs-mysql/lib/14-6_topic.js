//* 6. 전달한 인수를 받아 처리할 수 있게 home 함수에 매개변수를 선언
var db = require('./db');
var template = require('./template.js');

exports.home = function(request, response) { //여기
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
