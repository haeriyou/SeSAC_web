-- Active: 1733118747278@@127.0.0.1@3306@sesac1
SHOW DATABASES;
USE SESAC1;
CREATE TABLE visitor(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

DESC visitor;
SHOW TABLES;

-- data 삽입
INSERT INTO visitor(name, comment) VALUES ('홍길동','내가왔다');
INSERT INTO visitor VALUES(NULL, '이찬혁','으라차차');
INSERT INTO visitor VALUES(NULL, '삭제예정','으라차차');

-- data 조회
SELECT * FROM visitor;

-- data 수정
UPDATE visitor SET comment="야호~" WHERE id=2;

-- data 삭제
DELETE FROM visitor WHERE id=3;

######### DCL
-- MySQL 사용자 생성
CREATE USER 'SSAC'@'%' IDENTIFIED BY '1111';

-- 권한 부여
GRANT ALL PRIVILEGES ON *.* TO 'SSAC'@'%' WITH GRANT OPTION;
ALTER USER 'SSAC'@'%' IDENTIFIED WITH mysql_native_password BY '1111';
FLUSH PRIVILEGES;
SELECT * FROM mysql.user;
SHOW GRANTS for 'SSAC'@'%';