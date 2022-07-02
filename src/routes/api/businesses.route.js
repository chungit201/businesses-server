const express = require('express');
const {businessesController } = require("../../controllers");

const router = express.Router();

router.post('/add', businessesController.createBusinesses);
router.get('/', businessesController.queryBusinesses);
router.get('/:businessesId', businessesController.businessesId);
module.exports = router;
