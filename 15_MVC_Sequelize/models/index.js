"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.js")["development"];
console.log("config", config);
config = config["development"];
console.log("config", config);
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 설정 정보를 sequelize라는 키 안에 넣어주는 중
db.sequelize = sequelize;
// {
//   sequelize: sequelize
// }

// 시퀄라이즈 모듈을 Sequelize라는 key안에 넣어주는 중
db.Sequelize = Sequelize;
// {
//   sequelize: sequelize,
//   Sequelize: Sequelize
// }

db.Visitor = require("./Visitor")(sequelize, Sequelize); // 함수를 호출해서 model의 Visitor.js에 return값을 넣어주는 중
// {
//   sequelize:sequelize,
//   Sequelize:Sequelize,
//   Visitor: visitor의 model
// }

module.exports = db;
