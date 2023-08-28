//* 3. home 함수를 외부에서 사용할 수 있게 공유
exports.home = function () { //여기
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
