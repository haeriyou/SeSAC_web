// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "SSAC",
  password: "1111",
  detabase: "sesac1",
});

// 새로운 회원 등록
// user 테이블에 데이터 삽입
exports.postUser = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUE(NULL,"${data.userid}","${data.name}","${data.pw}")`,
    (err, rows) => {
      if (err) throw err;
      console.log("test", rows);

      cb(rows);
    }
  );
};

// 로그인 데이터 확인 // id pw를 AND로 동시에 일치하는지 확인
