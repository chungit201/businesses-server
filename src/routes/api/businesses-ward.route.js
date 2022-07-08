const express = require('express');
const {businessesWardController} = require("../../controllers");

const router = express.Router();

router.post('/add', businessesWardController.createBusinesses);
router.get('/', businessesWardController.queryBusinesses);
router.get('/:districtID', businessesWardController.businessesId);
module.exports = router;

