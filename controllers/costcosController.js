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
    if (!req.user) return res.redirect('/');  
    var oList = [];
    var uList = [];
    var otherList;
    var userList = req.user.currentList();
    req.user.lists = [req.user.lists.find(list => list._id.equals(userList._id))];
    req.user.populate({path: 'lists.products'}, (err) => {
        User.findOne({'lists._id': userList.connectedList}).populate('lists.products').exec((err, user) => {
            otherList = user.lists.id(userList.connectedList);
            var matched = commonProducts(userList.products, otherList.products);
            res.render('costcos/connection', {userList, otherList, user: req.user, matched});
        });
    });
}

function commonProducts(userProducts, otherProducts) {
    return userProducts.filter(p => otherProducts.some(product => product._id.equals(p._id)));
};

module.exports = {
    index,
    show,
    connection
};
