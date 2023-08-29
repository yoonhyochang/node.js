//* 7. 데이터베이스에서 테이블에 출력할 데이터 가져오기
var db = require('./db');
var template = require('./template.js');

exports.home = function(request, response) {
    db.query(`SELECT * FROM topic`, function(error, topics) {
        db.query(`SELECT * FROM author`, function(error2, authors) {//여기
            var title = 'author';
            var list = template.list(topics);
            var html = template.HTML(title, list,
                `
                <table>
                    <tr>
                        <td>egoing<td>
                        <td>developer<td>
                        <td>update<td>
                        <td>delete<td>
                    <tr>
                    <tr>
                        <td>egoing<td>
                        <td>developer<td>
                        <td>update<td>
                        <td>delete<td>
                    <tr>
                </table>
                <style>
                    table {
                        border-collapse: collapse;
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
    });
}
