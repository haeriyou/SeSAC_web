const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(cookieParser());

// TODO: 쿠키 미들웨어 설정
const cookieConfig = {
  maxAge: 1000 * 60 * 60 * 24,
  httpOnly: true,
  signed: false,
};

app.get("/", (req, res) => {
  res.render("index", { popup: req.cookies.popup });
  var cookies = cookie.parse(req.cookies.popup);
  console.log(cookies);
  //   res.render("index",{popup:쿠키값});
  // TODO: 쿠키 값 가져오기 및 index.ejs에 보내기
});

app.post("set-cookie", (req, res) => {
  // TODO: 쿠키 생성하기
  res.cookie("popup", "hide", cookieConfig);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
