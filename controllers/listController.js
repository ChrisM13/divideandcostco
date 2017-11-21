var User = require('./../models/user');
var Product = require('./../models/product');

function show(req, res) {
    Product.find({}, (err, products) => {
        res.render('lists/show', {user: req.user, products});
    });
};

function createList(req, res) {
    var list = req.user.currentList();
    var zip = req.params.zip;
    console.log('ZIP', zip);
    if (!list) {
        req.user.lists.push({zipCode: req.params.zip});
        list = req.user.currentList();
    }
    list.products = req.body.products;
    req.user.save();
    console.log('USER', req.user);
    Product.find({}, (err, products) => {
        res.render(`costcos/index`, {user: req.user, products});
    });
};

module.exports = {
    show,
    createList
};