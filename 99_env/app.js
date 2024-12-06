const express = require("express");
const app = express();
// console.log(process.env);
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
console.log("port number", PORT);
console.log("db pw", process.env.DB_PASSWORD); // config() 위에서는 env정보를 읽을 수 없다.
console.log("db name", process.env.DB_DATABASE);

app.get("/", (req, res) => {
  res.send("GET 요청 입니다");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
