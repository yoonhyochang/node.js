//* 25. 필요한 모듈 불러오기 및 모듈로 정의
var express = require('express');//여기
var router = express.Router();//여기
var template = require('../lib/template.js');//여기

router.get('/', function(request, response) {
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
        `<h2>${title}</h2>${description}
        <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px;">
        `,
        `<a href="/topic/create">create</a>`
    );
    response.send(html);
});

module.exports = router; //여기
