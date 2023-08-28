//* 데이터베이스 정보유출 방지 방법
//* 1. db.template.js 파일 생성
//* 2. db.js 파일 코드 붙여넣고 새부 정보 삭제
//* 3. 버전관리는 db.template.js 저장 후 사용 하기
//* 4. 개발환경을 설정시 db.js 사용
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
});
db.connect();
module.exports = db;
