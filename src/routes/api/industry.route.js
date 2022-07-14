const express = require("express");
const { industryController } = require("../../controllers");

const router = express.Router();

router.post("/add", industryController.createIndustry);
router.get("/", industryController.queryIndustry);
router.post("/list", industryController.listDataIndustry);
router.get("/title", industryController.getIndustryID);
module.exports = router;
