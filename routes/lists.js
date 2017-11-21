var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var listCtrl = require('../controllers/listController');

router.get('/new/:zip', listCtrl.show)

router.post('/', function(req, res) {
    console.log(req.body);
    var list = req.user.currentList();
    if (!list) {
        req.user.lists.push({zipCode: req.body.zipCode});
        list = req.user.currentList();
    }
    list.products = req.body.products;
    req.user.save();
    Product.find({}, (err, products) => {
        res.render('lists/show', {user: req.user, products});
    });
});







module.exports = router;
