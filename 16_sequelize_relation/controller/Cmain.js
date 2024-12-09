// const models = require("../models"); // models = {Player:.., Profile:..} // models라는 것은 객체
const { Player } = require("../models"); // models의 Player만 가지고 오는 중
const { Profile } = require("../models");
const { param } = require("../routes");

exports.main = (req, res) => {
  res.render("index");
};

// GET /players
exports.getAllPlayers = async (req, res) => {
  try {
    // SQL: 조회하는 select문
    // SELECT * FROM player;
    const players = await Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// 특정 선수 조회
// GET /players/:playerId
// player, profile 정보 조회 -> join이 필요 함
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params); // {playerId: '2'}
    const { playerId } = req.params; // 문자열 2가 담겨있음

    const player = await Player.findOne({
      where: { player_id: playerId },
      include: [{ model: Profile, attributes: ["position", "salary"] }],
      /**
       * "profile": {
        "position": "2B",
        "salary": 150
         }
       */
      // [{ model: Profile,attributes:['column 이름'] }] // attr: 특정 col만 보고 싶을 때
      // attributes의 배열은 profile 테이블의 컬럼명과 일치해야 함
    });
    res.send(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// POST 요청 보내기
// POST /players // 선수 추가
/**
 * {
 *  name: '손흥민',
 *  age: 30,
 *  team_id: 1 // api.http에서 미리 선언 해 둔 team_id
 * }
 */
exports.postPlayer = async (req, res) => {
  try {
    console.log(req.body);
    // { name: '손흥민', age: 30, teamid: 1 }
    // const newPlayer = await Player.create(
    // 컬럼명: 넣을 데이터
    // { name: req.body.name,
    // age: req.body.age,
    // teamid: req.body.teamid,}랑 req.body가 같다! = req.body만 넣어도 충분
    //   req.body
    // );
    const newPlayer = await Player.create(req.body);
    res.send("response");
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// Patch /players/:playerId/team
// 데이터를 변경하는 작업이므로 async를 쓴다
exports.patchPlayer = async (req, res) => {
  try {
    console.log(req.body);
    // { teamId: 1 }
    console.log(req.params);
    // { playerId: '2' }

    // updatedPlayer는 배열 형태
    const updatedPlayer = await Player.update(
      {
        // 첫번째 객체: 어떤 컬럼을 어떻게 바꿀지
        teamid: req.body.teamId,
      },
      {
        // 두번째 객체: where 조건 작성
        where: {
          player_id: req.params.playerId,
        },
      }
    );
    res.send(updatedPlayer);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
