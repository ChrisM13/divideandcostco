var express = require('express');
var router = express.Router();

var yelpCtrl = require('./../controllers/api/yelpController');
// var costcosCtrl = require('./../controllers/costcosController');
var request = require('request')

router.get('./products', (req, res) => {
    res.render('./products');
});