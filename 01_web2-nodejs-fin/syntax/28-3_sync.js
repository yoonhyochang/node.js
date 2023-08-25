//* 3. 비동기 처리 방식으로 동작하는 readFile  
var fs = require('fs');

/*
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result) {//여기부터
    console.log(result);
});//여기까지
console.log('C');
