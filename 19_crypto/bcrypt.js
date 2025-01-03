const bcrypt = require("bcrypt");

const saltRounds = 10; // 반복 할 숫자

function hashPw(pw) {
  return bcrypt.hashSync(pw, saltRounds);
}

// 비밀번호 일치 여부 확인
function comparePw(inputPw, hashedPw) {
  return bcrypt.compareSync(inputPw, hashedPw); // true, false 값을 반환
}

const originalPw = "1234";
const hashedPw = hashPw(originalPw);
console.log("암호화 된 비밀번호: ", hashedPw);

// 비밀번호 일치 여부 확인
const isMatch = comparePw("1234", hashedPw);
const isMatch2 = comparePw("123421", hashedPw);
console.log("비밀번호 일치: ", isMatch);
console.log("비밀번호 불일치: ", isMatch2);
