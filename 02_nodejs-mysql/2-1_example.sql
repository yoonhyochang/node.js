-- //* 실습 준비
-- //* 1. mysql 설치 및 환경변수 설정 https://m.blog.naver.com/ameeam/220167411336
-- //* 2. 콘솔창에 mysql -u root -p 입력후 로그인
-- //* 3. CREATE DATABASE opentutorials; 데이터베이스 만듬
-- //* 4. show databases; 입력 후 목록에서 opentutorials 확인
-- //* 5. use opentutorials; 데이터베이스 사용
-- //* 6. 아래코드 전체 복사후 콘솔에 붙여 넣기
------- 명령어 
------- 테이블 목록을 조회 show tables;
------- topic 테이블의 모든 레코드를 조회 select*from topic;
------- author 테이블의 모든 레코드를 조회 select*from author;
-- //* 7. package.json 파일 의존성 설정 (dependencies 부분)
-- //* 8. 일반 cmd에서 npm install 의존성 라이브러리설치 
-- //* 9. node main 입력 후 서버 실행
-- //* 10. pm2 start main.js --watch 입력으로 pm2 사용

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    `profile` varchar(200) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

--
-- Dumping data for table `author`
--

INSERT INTO `author` VALUES (1,'egoing','developer');
INSERT INTO `author` VALUES (2,'duru','database administrator');
INSERT INTO `author` VALUES (3,'taeho','data scientist, developer');

--
-- Table structure for table `topic`
--

CREATE TABLE `topic` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(30) NOT NULL,
    `description` text,
    `created` datetime NOT NULL,
    `author_id` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

--
-- Dumping data for table `topic`
--

INSERT INTO `topic` VALUES (1,'MySQL','MySQL is...','2018-01-01 12:10:11',1);
INSERT INTO `topic` VALUES (2,'Oracle','Oracle is ...','2018-01-03 13:01:10',1);
INSERT INTO `topic` VALUES (3,'SQL Server','SQL Server is ...','2018-01-20 11:01:10',2);
INSERT INTO `topic` VALUES (4,'PostgreSQL','PostgreSQL is ...','2018-01-23 01:03:03',3);
INSERT INTO `topic` VALUES (5,'MongoDB','MongoDB is ...','2018-01-30 12:31:03',1);


