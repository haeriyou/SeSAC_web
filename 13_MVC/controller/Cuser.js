const User = require("../model/User"); // model에서 가져오는 중

// GET /user
exports.getUser = (req, res) => {
  console.log(User.userInfo()); // model의 함수를 불러옴 // {} (객체값: realId, realPw, etc.)
  // res.send("응답완료");
  res.render("user", { userInfo: User.userInfo() }); // user.ejs에서 정보를 쓸 수 있게 함
  // res.render("user",{...User.userInfo()});
  /**
     * {...User.userInfo()} << 는
     * {
    realId: "cocoa",
    realPw: "qwer1234*",
    name: "홍길동",
    age: 20,
  }; << 와 같다
     */
  /**
     * { userInfo: User.userInfo() } << 는
     * {userInfo:{
     *  realId: "cocoa",
        realPw: "qwer1234*",
        name: "홍길동",
        age: 20
     * }} << 와 같다
     */
  // (user.ejs,{user.ejs에서 사용 할 객체})
};
