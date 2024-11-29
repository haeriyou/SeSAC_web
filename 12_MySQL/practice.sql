-- Active: 1732688614188@@127.0.0.1@3306@sesac1
-- 실습1
CREATE DATABASE practice CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE practice;
show tables;

CREATE TABLE member(
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT DEFAULT NULL,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50) DEFAULT NULL,
    promotion VARCHAR(2) DEFAULT 'x'
);

DESC member;

-- 실습2
ALTER TABLE member MODIFY id VARCHAR(10);
ALTER Table member DROP age;
ALTER TABLE member ADD interest VARCHAR(100);

-- 실습3
CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

DESC user;

-- 실습4
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
INSERT INTO user(id, pw, name, gender, birthday, age) VALUES ('jungkrat', '4ifha7', '정크랫', 'M', '1999-11-11', 24);
SELECT * FROM user;

-- 실습5
-- 1. 모든 회원 목록을 가져오는데, birthday 컬럼의 값을 기준으로 오름차순으로 정렬
SELECT * FROM user ORDER BY birthday ASC;
-- 2. 회원 목록 중 gender 값이 "M" 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬
SELECT * FROM user WHERE gender="M" ORDER BY name DESC;
-- 3. 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록
SELECT id, name FROM user WHERE birthday LIKE "199%";
-- 4. 6월생 회원 목록을 birthday 기준으로 오름차순 정렬
SELECT * FROM user WHERE birthday LIKE "%-06-%" ORDER BY birthday ASC;
-- 5. gender="M", 1970년대에 태어난 회원
SELECT * FROM user WHERE gender="M" AND birthday LIKE "197%";
-- 6. 모든 회원 age 기준 내림차순 정렬, 처음 3개의 기록만
SELECT * FROM user ORDER BY age DESC LIMIT 3;
-- 7. 모든 회원 중 나이가 25이상 50이하
SELECT * FROM user WHERE age BETWEEN 25 AND 50;
-- 8. id 값이 hong1234의 pw값을 12345678 로 변경
UPDATE user set pw="12345678" WHERE id="hong1234";
-- 9. id 값이 jungkrat의 기록 삭제
DELETE from user WHERE id="jungkrat";

SELECT * FROM user;