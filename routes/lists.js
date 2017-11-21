var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var listCtrl = require('../controllers/listController');

router.get('/new/:zip', listCtrl.show)

router.post('/:zip', listCtrl.createList)

module.exports = router;
