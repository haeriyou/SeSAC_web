const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

// ver1. 암호화 되지 않은 쿠키
// app.use(cookieParser());

// ver2. 암호화된 쿠키
// 실제로 암호화 쿠키를 사용한다면 비밀키도 .env로 관리하는 것이 좋다. 문자열은 아무거나 상관 없음
app.use(cookieParser("password"));

app.set("view engine", "ejs");

// 쿠키 설정 객체
const cookieConfig = {
  // maxAge: 쿠키의 수명, 1000이 1초인 밀리초 단위로 설정 ex) 1000*60*5 = 5분
  // expires: 만료 날짜, GMT 시간 설정 ex) new Date(2024, 11, 9)
  // httpOnly: 프론트에서 document.cookie로 접속하는 것을 차단, http 통신으로만 접근 가능 (true/false)
  // path: '/', '/abc' 등 원하는 경로에서 쿠키 설정 가능
  // secure: 웹 브라우저와 웹 서버가 https로 통신할 경우에만 쿠키 전송 (true/false)
  // signed: 쿠키 암호와 여부 (true/false)
  maxAge: 10 * 60 * 1000, // 수명 10분
  httpOnly: true, // 프론트에서 쿠키 접근 막기
  // signed: false, //ver1.
  signed: true, // ver2. 암호화된 쿠키
};

const cookieConfig2 = {
  maxAge: 10 * 60 * 1000,
  httpOnly: true,
  path: "/abc",
};

app.get("/abc", (req, res) => {
  res.cookie("abc-page", "abc-page cookie", cookieConfig2);
  res.render("cookie-another");
});

app.get("/", (req, res) => {
  res.render("cookie");
});

app.get("/getCookie", (req, res) => {
  console.log(req.cookies); // {쿠키: 쿠키 값, ...}
  console.log("암호화된 쿠키", res.signedCookies);
  // res.send(req.cookies); // ver1. 암호화 되지 않은 쿠키
  res.send(req.signedCookies); // ver2. 암호화 된 쿠키
});

// 쿠키 설정
app.get("/setCookie", (req, res) => {
  // res.cookie(쿠키이름, 쿠키값, 쿠키 옵션)
  res.cookie("myCookie", "내가구운쿠키~~~~", cookieConfig);
  // 암호화된 쿠키 / 암호화 되지 않은 쿠키
  // 모두 res.cookie()로 쿠키 설정
  res.send("set cookie 완료, 응답 종료!");
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie", "내가구운쿠키~~~~", cookieConfig);
  res.send("clear cookie, 응답 종료!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/**
 * ver1. 암호화 하지 않았을 때
 * - middleware -> app.use(cookieParser())
 * - 쿠키설정 -> res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션 객체)
 * - 쿠키 확인 -> req.cookies 객체에서 확인
 * - 쿠키 삭제 -> res.clearCookie(쿠키 이름, 쿠키 값, 쿠키 옵션 객체)
 * - clearCookie(), cookie()는 응답 완료를 하지 않음 -> 이후에 render, send, redirect, end, etc. 등으로 응답 완료 작업을 해야 함
 *          -> 삭제할 때는 이름, 값, 옵션이 일치해야 삭제 가능.
 *
 *  ver2. 암호화 했을 때
 * - middleware -> app.use(cookieParser('임의의 문자열'))
 * - 쿠키설정 -> res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션 객체) // ver1.과 동일
 *          -> 단, 쿠키 옵션 객체의 signed 값이 true여야 함.
 * - 쿠키 확인 -> req.signedCookies 객체에서 확인
 * - 쿠키 삭제 -> res.clearCookie(쿠키 이름, 쿠키 값, 쿠키 옵션 객체) // ver1.과 동일
 *
 */
