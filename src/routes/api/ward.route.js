const express = require("express");
const { wardController } = require("../../controllers");

const router = express.Router();

router.post("/add", wardController.createWard);
router.get("/", wardController.queryWards);


module.exports = router;
