// 6. multipleStatements 설정 삭제
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'opentutorials'
});
db.connect();
module.exports = db;
