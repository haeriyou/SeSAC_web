const Comment = require("../model/Comment");

// GET / (GET 요청)
exports.main = (req, res) => {
  res.render("index");
};

// GET /comments
exports.comments = (req, res) => {
  //   console.log(comments);
  res.render("comments", { commentInfos: Comment.commentInfos() });
};

// GET /comment/:id
exports.comment = (req, res) => {
  const comments = Comment.commentInfos();
  console.log(Comment.commentInfos());

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
};
