//* 5. db 모듈을 외부에서 사용할 수 있게 export
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'opentutorials'
});
db.connect();
module.exports = db;//여기
