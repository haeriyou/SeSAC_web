"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.js")["devel"];
const db = {};

// (1) Sequelize 클래스를 통해서 sequelize 객체를 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// (2) 모델을 불러오면서 인자로 정보 전달
const PlayerModel = require("./Player")(sequelize, Sequelize); // 첫번째는 객체, 두번째는 모듈
const Profile = require("./Profile")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// (3) 모델간 관계 설정

// (4) db 객체에 모델 추가
db.Player = PlayerModel;
db.Player = Profile;
db.Player = GameModel;
db.Player = TeamModel;
db.Player = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
