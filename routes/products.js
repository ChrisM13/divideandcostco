var express = require('express');
var router = express.Router();
var product = require('./../models/product');
var productCtrl = require('./../controllers/productsController');

router.get('/', (req, res) => {
    console.log(res);
    res.render('products');
});

module.exports = router;