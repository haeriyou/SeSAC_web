const express = require("express");
const app = express();
const PORT = 8080;

// socket.io 의 소켓이 http모듈로 생성된 서버에만 동작
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

// 미들웨어 설정
app.set("view engine", "ejs");

// api
app.get("/", (req, res) => {
  res.render("client");
});

// socket 코드 작성
io.on("connection", (socket) => {
  // console.log(socket);
  console.log("socket.id>> ", socket.id);
  // ----
  // [on과 emit 사용 해 보기]
  // 1. client -> server -> client
  socket.on("event_name", (arg1, arg2, arg3, cb) => {
    console.log("[event_name]::", arg1, arg2, arg3);
    cb(arg1, arg2, arg3); // emit에게 다시 데이터 전달
  });

  // 2. client -> server
  socket.on("cb_test", (arg, cb) => {
    console.log("[cb_test]:: ", arg); // 안녕하세요~
    console.log("cb!!", cb); // undefined
  });

  // 3-1. server -> client, 클라이언트 전체에게
  io.emit("entire_client", "전체에게 보냅니다!");

  // 3-2. server -> client, 클라이언트 하나에게
  socket.emit("one_client", "하나의 클라이언트에게 보냅니다!");

  // ------- 채팅 만들기! -------
  // ver1. 나의 메세지가 나에게만 보임
  socket.on("new_message1", (arg, cb) => {
    console.log("[new_message1]::", arg);
    cb(arg); // 나에게만 데이터를 전달
  });

  // ver2. 나의 메세지가 모두에게 보이도록
  socket.on("new_message2", (arg) => {
    console.log("[new_message2]::", arg);
    io.emit("message_render", arg);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
