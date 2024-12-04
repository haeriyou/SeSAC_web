const Visitor = require("../model/Visitor");
console.log(Visitor.getVisitors());

// GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // [DB 연결 전]
  console.log(Visitor.getVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() });

  // [DB 연결 후]
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  });
};
