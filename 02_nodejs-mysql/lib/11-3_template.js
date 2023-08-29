//* 3. authorSelect 함수에 두 번째 인수를 처리하는 코드 추가
module.exports = {
    HTML:function(title, list, body, control) {
        return `
        <!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                ${control}
                ${body}
            </body>
        </html>
        `;
    },list:function(topics) {
        var list = '<ul>';
        var i = 0;
        while(i < topics.length) {
            list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
            i = i + 1;
        }
        list = list+'</ul>';
        return list;
    },authorSelect:function(authors, author_id) { //여기
        var tag = '';
        var i = 0;
        while(i < authors.length) {//여기부터
            var selected = '';
            if(authors[i].id === author_id) {
                selected = ' selected';
            }//여기까지
            tag += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;//여기
            i++;
        }
        return `
            <select name="author">
                ${tag}
            </select>
        `
    }
}
