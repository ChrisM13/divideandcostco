var express = require('express');
var router = express.Router();
var yelpCtrl = require('./../controllers/api/yelpController');
var costcoCtrl = require('./../controllers/costcosController');

router.get('/', function(req, res, next) {
    res.render('costcos/index');
});

module.exports = router;