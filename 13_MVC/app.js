const express = require("express");
const app = express();
const PORT = 8080;

// 뷰 폴더
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter); // /user 요청으로 들어오는 것은 userRouter에서 처리 할 것이다.

// [404 error]
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
