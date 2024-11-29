const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);

router.post("/index", controller.userCheck);

module.exports = router;
