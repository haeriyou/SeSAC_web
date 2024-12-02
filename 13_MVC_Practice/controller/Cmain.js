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

// POST '/login'
/*exports.userCheck = (req, res) => {
  // console.log(req.body);
  // { userId: 'ddd', userPw: 'ddd' }
  // console.log("model>>> ", User.getUserInfo());
  // { realId: 'banana', realPw: '1234' }

  // 객체 구조 분해 추가
  const { realId, realPw } = User.getUserInfo(); //{ realId: 'banana', realPw: '1234' }
  // console.log("-----");
  // console.log(realId, realPw);
  const { userId, userPw } = req.body;
  if (realId === userId && realPw === userPw) {
    res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
}; */
