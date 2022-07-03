const express = require('express');
const { cityController } = require("../../controllers");

const router = express.Router();

router.post('/add', cityController.createCity);
router.get('/', cityController.queryCity);
router.get('/:cityId', cityController.cityById);

module.exports = router;
