//* 3.파일을 제대로 읽어올 수 있게 수정
var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err, data) {
    console.log(data);
});

// 공식 문서 https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsreadfilepath-options-callback