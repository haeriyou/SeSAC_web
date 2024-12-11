const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(cookieParser("secret"));

// TODO: 쿠키 미들웨어 설정

app.get("/", (req, res) => {
  res.render("index", { popup: req.signedCookies.popup });
  //   res.render("index",{popup:쿠키값});
  // cookie 접근
  // - req.cookies: 암호화 되지 않은 쿠키
  // -req.signedCookies: 암호화 된 쿠키
  // TODO: 쿠키 값 가져오기 및 index.ejs에 보내기
  console.log("쿠키", req.signedCookies); // { popup: 'hide' }
  console.log("쿠키", req.signedCookies.popup);
});

app.post("/setCookie", (req, res) => {
  res.cookie("popup", "hide", {
    maxAge: 1000 * 60 * 60 * 24,
    signed: true,
  });
  res.send("생성 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
