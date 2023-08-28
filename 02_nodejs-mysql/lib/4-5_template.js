//* 5. 매개변수 이름변경 (filelist 보다 topics 대표성을 눈에뜀)
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
            list = list + `<li><a href="/?id=${topics[i]}">${topics[i]}</a></li>`;//여기
            i = i + 1;
        }
        list = list+'</ul>';
        return list;
    }
}
