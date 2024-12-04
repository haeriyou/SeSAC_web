const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "SSAC",
  password: "1111",
  database: "sesac1",
});

exports.getVisitors = (cb) => {
  // [DB 연결 전]
  // return [
  //   { id: 1, name: "홍길동", comment: "내가왔다" },
  //   { id: 2, name: "이찬혁", comment: "으라차차" },
  // ];

  // [DB 연결 후]
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("visitor 테이블의 전체 조회", rows);
    cb(rows);
  });
};
