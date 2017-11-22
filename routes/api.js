var express = require('express');
var router = express.Router();
var api = require('../controllers/api/list');

router.get('/lists', api.index)

module.exports = router;