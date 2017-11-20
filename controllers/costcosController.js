var yelpCtrl = require('./api/yelpController');
var User = require('../models/user');

function show(req, res) {
    User.find({'lists.zipCode': req.params.zip, isActive: true}, (err, users) => {
        var lists = users.map(user => ({
            name: user.name,
            list: user.currentList()
        }));
        res.render('costcos/show', {lists, user});
    });
};

module.exports = {
    show
};