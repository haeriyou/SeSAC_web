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
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// (3) 모델간 관계 설정
// 모델 불러오는것 따로, 추가하는것 따로 해야 함.

// 3-1) Player:Profile = 1:1 관계
PlayerModel.hasOne(ProfileModel, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(ProfileModel, {
  foreignKey: "player_id", // 내가 정해주는 이름
});

// 3-2) Team:Player = 1:N 관계
TeamModel.hasMany(PlayerModel, {
  foreignKey: "teamid", // 내가 정해주는 이름
  sourceKey: "team_id", // 실제로 참조할 이름
});

PlayerModel.belongsTo(TeamModel, {
  foreignKey: "teamid",
  targetKey: "team_id", // 실제로 참조할 이름
  // 실제 team model의 컬럼명과 일치해야 함
  // models/Team.js의 primary Key
});

// 3-3) Team:Game = N:N 관계
// 중개 테이블 TeamGameModel을 활용해야 함
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id", // 내가 정해주는 이름 for team model
});

GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id", // 내가 정해주는 이름
});

// (4) db 객체에 모델 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGame = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
