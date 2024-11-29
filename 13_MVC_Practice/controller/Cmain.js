const realAcc = require("../model/Muser");

exports.main = (req, res) => {
  res.render("index");
};

exports.userCheck = (req, res) => {
  console.log(realAcc.userInfo());
  if (
    realAcc.userInfo().realId === req.body.userId &&
    realAcc.userInfo().realPw === req.body.userPw
  ) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
};
