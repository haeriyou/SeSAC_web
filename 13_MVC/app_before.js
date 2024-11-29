const express = require("express");
const app = express();
const PORT = 8080;

// 뷰 폴더
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const comments = [
  { id: 1, userId: "apple", date: "2024-10-23", comment: "안녕하세요!" },
  { id: 2, userId: "banana", date: "2024-10-24", comment: "방가방가" },
  { id: 3, userId: "cocoa", date: "2024-11-21", comment: "반갑습니다" },
  { id: 4, userId: "donut", date: "2024-11-22", comment: "하이하이" },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments", { commentInfos: comments });
});

app.get("/comment/:id", (req, res) => {
  console.log(req.params);
  //   console.log(req.query);

  // 몇번 댓글을 눌렀는지 처리
  const commentId = req.params.id; // id값: "/comment/:id"에서 가져옴
  console.log("commentID", commentId); // 댓글 한개의 정보를 보내기 위해서 따로 저장
  console.log(comments[commentId - 1]); // 댓글의 실제 정보
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }
  if (isNaN(commentId)) {
    res.render("404");
  }
  res.render("comment", { commentInfo: comments[commentId - 1] });
});

// [404 error]
// 반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
