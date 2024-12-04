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

exports.login2 = (req, res) => {
  console.log(Muser.user);
  const users = [];
  const userIds = [];
  const userData = Muser.user.split("\n");
  userData.forEach((user) => {
    // user='banana//4321//바나나나나'
    const userInfoArr = user.split("//");
    const userObj = {
      realId: userInfoArr[0],
      realPw: userInfoArr[1],
      name: userInfoArr[2],
    };
    users.push(userObj);
    userIds.push(userInfoArr[0]);
  });
  // --- 요청 정보를 바탕으로 회원이 맞는지 확인
  const idx = userIds.indexOf(req.body.userId);
  // idx >=0 userIds에 있는 회원
  // idx가 음수(-)라면 userIds에 없는 회원

  if (idx >= 0) {
    console.log("아이디가 있는 회원");
    if (req.body.userPw === users[idx].realPw) {
      console.log("비밀번호 일치");
      res.sned({ isSuccess: true, userName: users[idx].name });
    } else {
      console.log("비밀번호 불일치");
      res.send({ isSuccess: false });
    }
  } else {
    console.log("아이디가 없는 회원");
    res.send({ isSuccess: false });
  }
  // res.send("response!");
};
