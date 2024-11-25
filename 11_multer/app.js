const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

/** 미들웨어 설정 */
// 1. view engine 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. static 폴더 설정
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// 4. multer 설정
const upload = multer({
  dest: "uploads/", // 어디에 저장 될지
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); // 어디에 저장될지 경로 설정!
      // uploads 라는 폴더가 미리 만들어져 있어야 함
    },
    filename: function (req, file, done) {
      // done(null, 우리가 설정 할 파일 이름)
      // const extension = path.extname(파일이름.확장자) -> 확장자만 return을 해주는 함수
      const extension = path.extname(file.originalname);

      //   path.basename(파일이름.확장자, 확장자) -> 파일 이름만 리턴
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
      console.log(path.basename(file.originalname, extension));
      console.log(path.extname(file.originalname));
    },
  }),

  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.body); // 파일 정보는 req.file에서 확인
  console.log(req.file);
  /**
   * {
  fieldname: 'userfile', // 폼 내부에 정의한 name 값
  originalname: 'git ëª\x85ë ¹ì\x96´.png', // 원본 파일 명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'image/png', // 파일 타입
  destination: 'uploads/', // 파일 저장 경로
  filename: '9925eb3c472abe8a89f44774e30a232e', // 저장된 파일명
  path: 'uploads\\9925eb3c472abe8a89f44774e30a232e', //  업로드된 파일 전체 경로
  size: 156889 // 파일 크기 (byte)
}
   */
  res.send("응답");
});

// 하나의 input에 여러개 파일
app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  //   console.log(req.file); // undefined
  console.log(req.files); // 파일 여러개 일때
  /** 배열 형태로 들어온다.
   * [
  {
    fieldname: 'multifiles',
    originalname: 'hachi.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    destination: 'uploads/',
    filename: 'hachi1732518372784.jpg',
    path: 'uploads\\hachi1732518372784.jpg',
    size: 27487
  },
  {
    fieldname: 'multifiles',
    originalname: 'hachiwarae.png',
    encoding: '7bit',
    mimetype: 'image/png',
    destination: 'uploads/',
    filename: 'hachiwarae1732518372788.png',
    path: 'uploads\\hachiwarae1732518372788.png',
    size: 199533
  }
]
   */
  console.log(req.body);
  res.send("업로드 완료");
});

// 여러개의 input에 파일 업로드
// .fields() 사용
// fields의 매개 변수는 배열[{name:'name값1'},...]
app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    // upload.fields() 로 받아주는 req.files 객체 형태로 들어옴
    console.log(req.files);
    /**
     * {filename1: [{업로드 파일 정보}], filename2:[{업로드 파일 정보}], filename3:[{업로드 파일 정보}]} // 객체 형태로 들어온다.
     */
    console.log(req.body);
    res.send("업로드 완료");
  }
);

// 동적 폼 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
