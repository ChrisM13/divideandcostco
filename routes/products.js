var express = require('express');
var router = express.Router();
var product = require('./../models/product');

router.get('/', (req, res) => {
    console.log(res);
    res.render('/views/products');
});

