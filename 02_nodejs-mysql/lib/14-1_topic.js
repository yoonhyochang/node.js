//* Node.js 코드 정리
//* 글 목록 보여주기 코드 정리
//* 1. 글 목록을 가져와 보여주는 코드를 topic.js로 분리
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
