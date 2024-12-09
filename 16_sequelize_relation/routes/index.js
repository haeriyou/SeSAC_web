const express = require("express");
const router = express.Router();

const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.get("/players", controller.getAllPlayers);
router.get("/players/:playerId", controller.getPlayer);

router.post("/players", controller.postPlayer);
router.patch("/players/:playerId/team", controller.patchPlayer);
module.exports = router;
