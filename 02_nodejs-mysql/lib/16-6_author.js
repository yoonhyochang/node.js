//* 6. 테이블에 테드리를 표시 하도록 CSS 추가
var db = require('./db');
var template = require('./template.js');

exports.home = function(request, response) {
    db.query(`SELECT * FROM topic`, function(error, topics) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var list = template.list(topics);
        var html = template.HTML(title, list,
            `
            <table>
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
            </table>
            <style>
                table {
                    border-collapse: collapse; //여기
                }
                td {
                    border: 1px solid black;
                }
            </style>
            `,
            `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}
