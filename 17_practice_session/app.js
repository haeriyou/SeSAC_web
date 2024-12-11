const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 세션 설정, 10분 뒤 세션 종료하도록
app.use(
  session({
    secret: "secretKey",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
    },
  })
);

app.get("/", (req, res) => {
  // 로그인이 안된 유저 -> {isLogin:false}
  // 로그인이 된 유저 -> {isLogin:true, user:유저}
  console.log("GET / ", req.session);
  const user = req.session.user;
  /**
   * GET /  Session {
    cookie: {
    path: '/',
    _expires: 2024-12-11T02:42:18.441Z,
    originalMaxAge: 600000,
    httpOnly: true
    },
     user: 'cocoa'
    } 
   */

  if (req.session.user) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

app.get("/login", (req, res) => {
  const user = req.session.user;
  if (user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
});

// DB
const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};

// POST /login
// 실제 로그인 진행
app.post("/login", (req, res) => {
  // 로그인 여부 판단
  console.log(req.body);
  //  { id: 'cocoa', pw: '1234' }

  if (userInfo.userId === req.body.id && userInfo.userPw === req.body.pw) {
    // console.log("able to login");
    req.session.user = req.body.id;
    console.log(req.session);
    res.redirect("/");
  } else {
    // console.log("unable to login");
    res.send(`
      <script>
      alert("아이디 또는 비밀번호가 틀렸어요. 다시 시도하세요.);
      document.location.href="/login";
      </script>
      `);
  }

  // 세션 연결
  // 세션의 user라는 키를 추가하여 userId값을 value로 전달
});

// GET /logout
// 실제 로그아웃 진행
app.get("/logout", (req, res) => {
  // 세션 삭제
  console.log("GET /logout", req.session);
  const user = req.session.user;
  if (user) {
    // 로그인된 유저라면 -> 로그아웃 시켜주기
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect("/"); // 로그아웃 후 메인 페이지로
    });
  } else {
    // 로그인 안된 유저 (세션이 만료된 유저, 10분 후)
    res.send(`
      <script>
      alert("이미 세션이 만료되었습니다.");
      document.location.href="/";
      </script>
      `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
