// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// GET user
router.get("/", controller.main);

// GET /user /signup
router.get("/signup", controller.getSignup);
router.post("/signup", controller.postSignup);

router.get("/signin", controller.getSignin);
router.get("/signin", controller.getUsers);

module.exports = router;
