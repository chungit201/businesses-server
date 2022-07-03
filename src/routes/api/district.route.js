const express = require('express');
const { districtController, cityController } = require("../../controllers");

const router = express.Router();

router.post('/add', districtController.createDistrict);
router.get('/', districtController.queryDistrict);
router.get('/:districtId', districtController.districtById);

module.exports = router;
