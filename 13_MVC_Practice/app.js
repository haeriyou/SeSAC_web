const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Router
const routerIndex = require("./routes/Rindex");
// const routerIndex = require("./routes"); index가 default이므로 routes까지만 적어도 된다.
app.use("/", routerIndex);

// 404
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
