//* 4. mysql 모듈을 불러오는 코드 추가
var mysql = require('mysql');//여기
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'opentutorials'
});
db.connect();
