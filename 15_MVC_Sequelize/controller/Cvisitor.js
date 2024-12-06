// const Visitor = require("../model/Visitor");
const models = require("../models/index");
const { errorlogs } = require("../utils/common");
// console.log(Visitor.getVisitors());

/* / GET */
exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */
exports.getVisitors = (req, res) => {
  // [DB 연결전]
  // res.render("visitors", { data: Visitor.getVisitors() });

  // [DB 연결 후, Sequelize 전]
  // Visitor.getVisitors((result) => {
  //   console.log("전체목록 Cvisitor.js", result);
  //   res.render("visitor", { data: result });
  // });

  // [Sequelize 이후]
  // `SELECT * FROM visitor`
  models.Visitor.findAll()
    .then((result) => {
      console.log("findAll>>>", result);

      // findAll의 결과는 배열
      // res.send(result);

      res.render("visitor", { data: result });
    })
    .catch((err) => {
      console.log("getVisitors Controller Err", err);
      res.status(500).send("server error");
    });
};

/* /visitor/:id GET */
exports.getVisitor = async (req, res) => {
  // Visitor.getVisitor()
  console.log(req.params); // {id:'1'}
  console.log(req.params.id); // '2'
  // [Sequelize 이전]
  // Visitor.getVisitor(req.params.id, (result) => {
  //   console.log("한 개의 데이터 Cvisitor.js", result);
  //   res.send(result);
  // });

  //`SELECT * FROM visitor WHERE id=${req.params.id}`
  // [Sequelize 이후]
  try {
    const result = await models.Visitor.findOne({
      where: {
        id: req.params.id,
      },
    });
    console.log("findOne >> ", result);
    res.send(result);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("internal server error");
  }
};

/* /visitor POST, 등록 */
// INSERT INTO -> CREATE()
exports.postVisitor = (req, res) => {
  console.log("req.body", req.body);

  // [Sequelize 이전]
  // Visitor.postVisitor(req.body, (result) => {
  //   console.log("Cvisitor.js:", result);
  //   res.send({ id: result, comment: req.body.comment, name: req.body.name });
  // });

  // [Sequelize 이후]
  //`INSERT INTO visitor VALUE(NULL, "${data.name}", "${data.comment}")`
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      errorlogs(res, err);
    });
};

/* /visitor DELETE, 삭제 */
// delete from ~~ -> destroy()
exports.deleteVisitor = async (req, res) => {
  console.log(req.body); // { id: '4' }
  console.log(req.body.id); // '4'

  // [Sequelize 이전]
  // Visitor.deleteVisitor(req.body.id, () => {
  //   res.send(req.body.id + "번 id 삭제완료");
  // });

  // [Sequelize 이후]
  // `DELETE FROM visitor WHERE id=${id}`
  try {
    const result = await models.Visitor.destroy({
      where: { id: req.body.id },
    });
    console.log(result);
    // 1(삭제 성공), 0(삭제 실패 - 없는 데이터를 삭제하려고 할 때)
    // true, false
    if (Boolean(result)) {
      // Number to Boolean
      res.send(req.body.id + "번 ID 삭세 완료");
    } else {
      res.send("잘못된 접근입니다.");
    }
  } catch (err) {
    errorlogs(res, err);
  }
};

// /* /visitor PATCH, 수정 */
// update SET ~~ >> update
exports.patchVisitor = async (req, res) => {
  console.log(req.body);
  // [Sequelize 전]
  // Visitor.patchVisitor(req.body, () => {
  //   res.send("수정완료");
  // });

  // [Sequelize 후]
  // `UPDATE visitor SET name="${req.body.name}", comment="${req.body.comment}" WHERE id=${req.body.id}`

  try {
    const [result] = await models.Visitor.update(
      {
        name: req.body.name,
        commment: req.body.comment,
      },
      {
        where: { id: req.body.id },
      }
    );
    console.log(result); // [1], [0]
    const [number] = result;
    console.log(number);

    if (Boolean(result)) {
      res.send("수정완료");
    } else {
      res.send("잘못된 접근입니다");
    }
  } catch (err) {
    errorlogs(res, err, "patch controller 내부");
  }
};
