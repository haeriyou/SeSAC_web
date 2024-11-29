-- Active: 1732688614188@@127.0.0.1@3306@practice
show databases;

USE sesac1;

CREATE DATABASE mydatabase DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;

DROP DATABASE mydatabase;

---- 테이블 관련 명령어
/*
CREATE TABLE 테이블이름(
        속성이름1 데이터타입 제약조건,
        속성이름2 데이터타입 제약조건
    );
*/

-- 제약조건
-- NOT NULL: NULL 허용 X
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본 키 설정 (중복 허용X, NULL 허용X)
-- DEFAULT: 기본 값 설정
-- UNIQUE: 중복 허용X, NULL 허용X, 한 테이블에 여러 개 설정 가능

CREATE TABLE PRODUCTS(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);


-- 테이블 목록 확인
show tables;

-- 테이블 구조 확인
desc products;

DROP TABLE products;

-- 테이블 속성 수정
ALTER TABLE PRODUCTS ADD new_column VARCHAR(20);

ALTER Table products MODIFY new_column INT;

ALTER Table products DROP new_column; 

########### [DML] ##########
-- 데이터 조작어
-- 데이터 CRUD를 위해 사용하는 SQL문

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- create -> INSERT INTO

INSERT INTO user(name, age, address) VALUES('김민정', 20, '서울특별시 마포구');
INSERT INTO user(name, age, address) VALUES('최승철', 30, '대구광역시 유성구');
INSERT INTO user(name, age, address) VALUES('윤정한', 30, '서울특별시 강북구');
INSERT INTO user(name, age, address) VALUES('홍지수',30, '서울특별시 강남구');
INSERT INTO user(name, age, address) VALUES('문준휘', 29, '서울특별시 노원구');
INSERT INTO user(name, age, address) VALUES('권순영', 29, '경기도 남양주시');
INSERT INTO user(name, age, address) VALUES('전원우', 29, '부산광역시 해운대구');
INSERT INTO user(name, age, address) VALUES('이지훈', 29, '부산광역시 해운대구');
INSERT INTO user(name, age, address) VALUES('서명호', 28, '서울특별시 마포구');
INSERT INTO user(name, age, address) VALUES('김민규', 28, '서울특별시 마포구');
INSERT INTO user(name, age, address) VALUES('이석민', 28, '서울특별시 마포구');
INSERT INTO user(name, age, address) VALUES('최한솔', 27, '서울특별시 마포구');
INSERT INTO user(name, age, address) VALUES('부승관', 27, '제주특별자치도 제주시');
INSERT INTO user(name, age, address) VALUES('이찬', 26, '광주광역시 마포구');

-- Read -> SELECT [컬럼이름] FROM [테이블 이름] (WHERE 조건)

SELECT * FROM user; -- 전체 컬럼 전체 조회

SELECT name FROM user; -- 특정 컬럼 전체 조회

SELECT age, name FROM user; -- 특정 컬럼 2개 전체 조회

-- where 절을 이용해서 조건 걸기
SELECT * FROM user WHERE age >=28; -- 이상 비교
SELECT * FROM user WHERE id=3; -- 일치 비교

SELECT id, age FROM user WHERE name='권순영';

-- LIKE 패턴 조회
SELECT * FROM user WHERE address LIKE '서울%'; -- 서울로 시작하는 주소 값

SELECT * FROM user WHERE name LIKE '__수'; -- 마지막 글자가 '수'인 사람
SELECT * FROM user WHERE name LIKE '%승%'; -- 이름에 '승'이 들어가는 사람

-- 광역시 주소인 사람들
SELECT * FROM user where address LIKE '%광역시%'; -- 광역시 주소인 사람들

-- IN (list)
SELECT * FROM user WHERE age IN(20,26,28); -- 나이가 ,20, 26, 28살 중 하나

-- BETWEEN a AND B, a와 b는 포함
SELECT * FROM user WHERE age BETWEEN 25 AND 30;

INSERT INTO user(name, age) VALUES('서현승', 29);

-- 주소가 null인 사람 조회
SELECT * FROM user WHERE address IS NULL;
-- 주소가 null이 아닌 사람 조회
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리 연산자
-- 주소가 null이 아니면서, age가 25 초과인 전체 속성
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;

-- 이씨이고, 나이가 26인 사람 (AND)
SELECT * FROM user WHERE name LIKE '이%' AND age=26;

-- 서울에 살거나 김씨인 사람 (OR)
SELECT * FROM user WHERE address LIKE '%서울%' OR name LIKE '김%';

-- order by, distinct, limit
SELECT * FROM user ORDER BY age DESC; -- age 기준으로 내림차순 정렬
-- id가 6보다 큰 것을 조회하고 난 후, age 기준으로 오름차순 정렬
SELECT * FROM user WHERE id > 6 ORDER BY age ASC;

-- distinct
SELECT age FROM user ORDER BY age ASC;

SELECT DISTINCT age from user ORDER BY age ASC;

-- 서울시에 사는 사람의 이름만, 2개만 불러오기

-- order by 먼저, 그 다음 limit (순서가 중요하다)
SELECT name, address from user WHERE address LIKE '서울%' ORDER BY name asc LIMIT 3;

SELECT * FROM user;

-- update 문
-- UPDATE 테이블 이름
-- SET 컬럼명 ="바꿀 데이터"
-- WHERE ID=1

UPDATE user SET address="서울특별시 도봉구" WHERE id=1;
UPDATE user SET address="제주특별자치도 제주시", name="이지현" WHERE id=2;

-- delete문
/*
DELETE FROM 테이블 이름
WHERE 조건
*/
DELETE FROM user WHERE id=11;
DELETE FROM user WHERE id>8;

CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL DEFAULT '홍길동',
    hobby VARCHAR(20)
);
DESC student;
INSERT INTO student(hobby) VALUES('등산');
INSERT INTO student(hobby, name) VALUES('등산', '박상우');
SELECT * FROM student;

-- HAVING 과 GROUP BY
DROP TABLE IF EXISTS user; -- user 테이블이 존재할 경우 삭제
SHOW TABLES;
CREATE TABLE user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구','야구','클라이밍','배드민턴') NOT NULL,
    gender ENUM('남','여') NOT NULL,
    career_year INT NOT NULL
);
DESC user;
INSERT INTO user VALUES(NULL, '김판곤', '축구', '남', 40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);
SELECT * FROM user;

-- 집계함수 사용해보기
-- count, sum, avg, min, max
SELECT COUNT(specialize) FROM user WHERE specialize="축구"; -- specialize가 축구인 튜플의 갯수
SELECT SUM(career_year) FROM user; -- 전체 선수의 경력 합
SELECT SUM(career_year) FROM user WHERE specialize='축구'; -- 축구 선수의 경력 합
SELECT AVG(career_year) FROM user WHERE specialize='축구'; -- 축구 선수의 경력의 평균
SELECT MIN(career_year) FROM user WHERE specialize='축구'; -- 축구 선수 중 경력이 가장 작은 사람
SELECT MAX(career_year) FROM user WHERE specialize='축구'; -- 축구 선수 중 경력이 가장 많은 사람

-- group by (같은 그룹끼리 묶어서 조회)
SELECT specialize FROM user GROUP BY specialize;
SELECT specialize, COUNT(specialize) FROM user GROUP BY specialize;

-- having
SELECT specialize, COUNT(specialize) FROM user WHERE gender="여" GROUP BY specialize HAVING COUNT(specialize) >=2; 
-- having 은 group에 대한 조건