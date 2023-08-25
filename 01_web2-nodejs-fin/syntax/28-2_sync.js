//* node.js-동기와 비동기 그리고 콜백  
//* 동기와 비동기
//* 1. sample.txt 파일 생성
//* 2. 동기 처리 방식으로 동작하는 readFileSync
var fs = require('fs');

//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
