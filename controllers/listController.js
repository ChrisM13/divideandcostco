var User = require('./../models/user');
var Product = require('./../models/product');

function show(req, res) {
    Product.find({}, (err, products) => {
        res.render('lists/show', {user: req.user, products});
    });
};

function createList(req, res) {
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
};

module.exports = {
    show,
    createList
};