const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;
const SECRET = "NfRm61RdplwlGsVu"; // .env에 저장해서 사용

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB 정보
const userInfo = {
  id: "cocoa",
  pw: "1234",
  name: "코코아",
  age: 29,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// POST /login
app.post("/login", (req, res) => {
  try {
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo; // DB에 저장되어있는 데이터

    // DB 데이터와 비교
    if (id === realId && pw === realPw) {
      // 로그인 성공
      // jwt 발급
      const token = jwt.sign({ id: id }, SECRET); // sign:(payload, signature)
      console.log("토큰>>>", token);
      res.send({ result: true, token }); // {result: true, token: 'eyJhbGciOi(중략)'}
      // jwt token은 클라이언트에서 관리하기 때문에 클라이언트에게 토큰을 보내주어야 함
    } else {
      // 로그인 실패
      res.send({ message: "로그인 정보가 올바르지 않습니다.", result: false });
      // {message: '로그인 정보가 올바르지 않습니다.', result: false}
    }
  } catch (err) {
    console.log("post /login err", err);
    res.status(500).send({ message: "서버에러" });
  }
});

app.post("/token", (req, res) => {
  try {
    console.log("req.headers >>>>", req.headers);
    console.log("req.headers authorization >>>>", req.headers.authorization); // Bearer
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      console.log("token>>>", token);
      try {
        // 토큰 검증 작업
        const auth = jwt.verify(token, SECRET);
        console.log("auth", auth); // auth { id: 'cocoa', iat: 1733894752 } // iat=issued at

        // auth에 있는 id와 DB의 id비교
        if (auth.id === userInfo.id) {
          res.send({ result: true, name: userInfo.name });
        }
      } catch (err) {
        console.log("토큰 인증 에러");
        res
          .status(401)
          .send({ result: false, message: "인증된 회원이 아닙니다." });
      }
    } else {
      // 인증 정보 없을 때
      res.redirect("/login");
    }
  } catch (err) {
    console.log("post /login err", err);
    res.status(500).send({ message: "서버에러" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
