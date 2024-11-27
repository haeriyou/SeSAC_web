const express = require("express");
const multer = require("multer");
const { userInfo } = require("os");
const path = require("path");
const app = express();
const PORT = 8080;

// 미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// body parper
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// static 폴더
app.use("/static", express.static(__dirname + "/static"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// multer 설정
const multerUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname); // 확장자
      done(null, req.body.userId + Date.now() + extension);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1021 },
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post(
  "/fileUpload",
  uploadSetting.single("profileImg"),
  function (req, res) {
    // res.render("result", {
    //   userInfo: req.body,
    //   src: req.file.path,
    // });
    res.render("result", {
      ...req.body,
      src: req.file.path,
    });
  }
);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
