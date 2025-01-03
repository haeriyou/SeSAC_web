const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("test");
});

app.get("/copy", (req, res) => {
  res.render("Copytest");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
