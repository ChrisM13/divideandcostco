var yelpCtrl = require('./../util/yelp');
var User = require('../models/user');

function index(req, res) {
    yelpCtrl.findCostco(req, res).then(function(data) {
        res.render('costcos/index', {costcoData: data});
    });
}

function show(req, res) {
    User.find({'lists.zipCode': req.params.zip, isActive: true}, (err, users) => {
        var lists = users.map(user => ({
            name: user.name,
            list: user.currentList()
        }));
        console.log(lists);
        res.render('costcos/show', {lists, users});
    });
};

module.exports = {
    index,
    show
};
