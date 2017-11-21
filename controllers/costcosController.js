var yelp = require('./../util/yelp');
var User = require('../models/user');

function index(req, res) {
    yelp.findCostco(req.body.zipCode).then(function(costcos) {
        res.render('costcos/index', {costcoData: costcos, user: req.user});
    });
}

function show(req, res) {
    User.find({'lists.zipCode': req.params.zip, 'lists.isActive': true}, (err, users) => {
        var lists = users.map(user => ({
            name: user.name,
            list: user.currentList()
        }));

        yelp.findCostco(req.params.zip).then(function(costcos) {
            res.render('costcos/show', { lists, users, user: req.user, costcoData: costcos });
        });
})};


module.exports = {
    index,
    show
};
