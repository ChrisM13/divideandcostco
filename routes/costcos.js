var express = require('express');
var router = express.Router();
var yelpCtrl = require('./../controllers/api/yelpController');
<<<<<<< HEAD
var costcoCtrl = require('./../controllers/costcosController');

router.get('/', function(req, res, next) {
    res.render('costcos/index');
});

module.exports = router;
=======
var costcosCtrl = require('./../controllers/costcosController');
var request = require('request')

router.get('/', (req, res) => {
    res.render('costcos/index');
});

module.exports = router;    
>>>>>>> master
