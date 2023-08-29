//* 테이블에 출력할 <td> 태그 추가
var db = require('./db');
var template = require('./template.js');

exports.home = function(request, response) {
    db.query(`SELECT * FROM topic`, function(error, topics) {
        db.query(`SELECT * FROM author`, function(error2, authors) {
            var tag = '<table>';//여기
            var i = 0;
            while(i < authors.length) {
                tag += `
                    <tr>
                        <td>${authors[i].name}</td>
                        <td>${authors[i].profile}</td>//여기
                        <td>update</td>//여기
                        <td>delete</td>//여기
                    </tr>
                `;
                i++;
            }
            tag += '</table>';//여기

            var title = 'author';
            var list = template.list(topics);
            var html = template.HTML(title, list,
                `
                ${tag}//여기
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
