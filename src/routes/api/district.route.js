const express = require('express');
const { districtController } = require("../../controllers");

const router = express.Router();

router.post('/add', districtController.createDistrict);
router.get('/', districtController.queryDistrict);


module.exports = router;
