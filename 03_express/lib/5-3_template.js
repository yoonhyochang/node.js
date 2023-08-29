//* 3. 글 목록을 선택 했을 때 쿼리 스트링이 아닌 시멘틱 URL을 전달하게 수정
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
    },
    list:function(filelist) {
        var list = '<ul>';
        var i = 0;
        while(i < filelist.length) {
            list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;//여기
            i = i + 1;
        }
        list = list+'</ul>';
        return list;
    }
}
