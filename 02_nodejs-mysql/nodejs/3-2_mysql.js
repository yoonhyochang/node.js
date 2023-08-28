//* mysql 모듈의 기본 사용법
//* 1. mysql 모듈 설치 npm install --save mysql
//* 2. mysql.js 파일 생성 후 예제 코드 작성
//* 3. node 3-2_mysql 입력으로 확인
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'opentutorials'
});

connection.connect();

connection.query('SELECT * from topic', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();

//* ER_ACCESS_DENIED_ERROR 발생시
//* 1. 데이터베이스 서버(콘솔) 이동 후 SELECT Host,User From mysql.user; 입력 
//* 2. 사용자 목록에 맞춰 connection함수 수정

//* MYSQL 사용자를 추가하는 방법
//* 1. 사용자 추가 CREATE USER 'nodejs'@'&' IDENTIFIED BY '111111'; 입력
//* 2. 권한 부여 GRANT ALL PRIVILEGES ON opentutorials.* TO 'nodejs'@'%'; d입력
//* 3. connection함수에 접속정보 수정