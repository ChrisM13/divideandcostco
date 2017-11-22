var express = require('express');
var router = express.Router();
var api = require('../controllers/api/list');

router.get('/', api.index)

module.exports = router;