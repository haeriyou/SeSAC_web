const MUser = require("../model/User");
// TODO: 컨트롤러 코드

exports.main = (req, res) => {
  res.render("index");
};

// getSignin
exports.getSignin = (req, res) => {
  res.render("signin");
};

// getSignup
exports.getSignup = (req, res) => {
  res.render("signup");
};

exports.postSignup = (req, res) => {
  console.log("req.body", req.body);
  MUser.postUser(req.body, (result) => {});
  res.render("signin");
};
