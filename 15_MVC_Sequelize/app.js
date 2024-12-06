const express = require("express");
const db = require("./models/index");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우터 분리
const indexRouter = require("./routes"); // index 생략 가능
app.use("/", indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

// 404
app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize
  .sync({ force: false })
  .then((result) => {
    // console.log(result);
    console.log("DB연결성공");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch();
