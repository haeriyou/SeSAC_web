const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET /visitor => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors);
// router.get("/visitor/:id", controller.getVisitor);

// router.post("/visitor", controller.postVisitor);
// router.delete("/visitor", controller.deleteVisitor);
// router.patch("/visitor", controller.patchVisitor);
module.exports = router;
