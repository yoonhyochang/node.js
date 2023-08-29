//* 4. author 페이지에서 저자 목록 표시
var db = require('./db');
var template = require('./template.js');

exports.home = function(request, response) {
    db.query(`SELECT * FROM topic`, function(error, topics) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics);
        var html = template.HTML(title, list,
            `
            <table>//여기부터
                <tr>
                    <td>egoing</td>
                    <td>developer</td>
                    <td>update</td>
                    <td>delete</td>
                <tr>
                <tr>
                    <td>egoing</td>
                    <td>developer</td>
                    <td>update</td>
                    <td>delete</td>
                <tr>
            <table>//여기까지
            `,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}
