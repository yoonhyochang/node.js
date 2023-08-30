//* 24. 홈 부분의 코드를 index.js 파일로 이전
app.get('/', function(request, response) {//여기부터
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
        `<h2>${title}</h2>${description}
        <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
        `,
        `<a href="/topic/create">create</a>`
    );
    response.send(html);//여기까지
});
