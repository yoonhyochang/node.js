//* 2. lib 디렉터리에 db.js 파일을 생성한 후 데이터 베이스 접속 코드 작성
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'opentutorials'
});
db.connect();
