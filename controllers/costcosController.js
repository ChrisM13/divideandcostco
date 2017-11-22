var yelp = require('./../util/yelp');
var User = require('../models/user');
var Product = require('../models/product');

function index(req, res) {
    yelp.findCostco(req.body.zipCode).then(function(costcos) {
        if (costcos.businesses.length < 3) return res.redirect('/');
        res.render('costcos/index', {costcoData: costcos, user: req.user});
    });
}

function show(req, res) {
    if (!req.user) return res.redirect('/');
    User.find({'lists.zipCode': req.params.zip, 'lists.isActive': true}).populate('lists.products').exec((err, users) => {
        var lists = users.map(user => ({
            name: user.name,
            avatar: user.avatar,
            list: user.currentList()
        }));
        Product.find({}, (err, products) => {
            yelp.findCostco(req.params.zip).then(function(costcos) {
                res.render('costcos/show', { allLists: lists, user: req.user, costcoData: costcos, products });
            });
        });
})};

function connection(req, res) {
    res.send('connection made');
}

module.exports = {
    index,
    show,
    connection
};
