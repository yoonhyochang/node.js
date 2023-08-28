//* 7.객체의 속성 중 id에 담긴 데이터를 가져오게 수정
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
            list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;//여기
            i = i + 1;
        }
        list = list+'</ul>';
        return list;
    }
}
