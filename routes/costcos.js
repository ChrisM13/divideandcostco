var express = require('express');
var router = express.Router();
// var yelpCtrl = require('./../controllers/api/yelpController');
// var costcosCtrl = require('./../controllers/costcosController');
// var request = require('request')

router.get('/', (req, res) => {
    res.render('costcos/index');
});

router.get('/:zip', (req, res) => {
    res.render('costcos/show');
});

module.exports = router;    
