const express = require("express");
const app = express();
const PORT = 8080;
const { sequelize } = require("./models");
// db={squelize:~~, Sequelize:~~}
// const {sequelize} =db;

// set middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router 설정
const indexRouter = require("./routes");
app.use("/", indexRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("db connection err");
    console.log(err);
  });

// sync()
app;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
