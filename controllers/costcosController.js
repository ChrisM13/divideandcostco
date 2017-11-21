var yelp = require('./../util/yelp');
var User = require('../models/user');

function index(req, res) {
    yelp.findCostco(req.body.zipCode).then(function(costcos) {
        res.render('costcos/index', {costcoData: costcos, user: req.user});
    });
}

function show(req, res) {
    User.find({'lists.zipCode': req.params.zip, isActive: true}, (err, users) => {
        var lists = users.map(user => ({
            name: user.name,
            list: user.currentList()
        }));
        console.log(lists);
        res.render('costcos/show', {lists, users, user: req.user});
    });
};

module.exports = {
    index,
    show
};
