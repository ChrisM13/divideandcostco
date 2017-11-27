var User = require('./../models/user');
var Product = require('./../models/product');

function index(req, res) {
    User.find({}, (err, users) => {
        if (err) return res.status(err.statusCode || 500).json(err);
        res.json(users);
    });
}

function show(req, res) {
    User.findById(req.params.id, (err, user) => {
        res.render('users/show', { user })
    });
}

function getUserLists(req, res) {
    User.findById(req.params.id, (err, user) => {
        Product.find({}, (err, products) => {
            res.render('lists/index', { user, products })
        });
    })
}

module.exports = {
    index,
    show,
    getUserLists
};