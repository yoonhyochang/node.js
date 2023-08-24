//* Node.js-파일 읽기
//* 1. sample.txt 파일을 만들어 샘플 텍스트 준비
//* 2. fileread.js 파일을 생성한 후 코드를 작성 
var fs = require('fs');
fs.readFile('sample.txt', function(err, data) {
    console.log(data);
});
