//* 4. 한 번에 여러 SQL 문이 실행되게 수정
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'opentutorials',
    multipleStatements: true //여기
});
db.connect();
module.exports = db;
