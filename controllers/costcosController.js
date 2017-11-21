var yelpCtrl = require('./api/yelpController');
var User = require('../models/user');

function show(req, res) {
    console.log('cats');
    console.log(req.params);
    User.find({'lists.zipCode': req.params.zip, isActive: true}, (err, users) => {
        console.log(users);
        var lists = users.map(user => ({
            name: user.name,
            list: user.currentList()
        }));
        res.render('costcos/show', {lists, users});
    });
};

module.exports = {
    show
};

User.find({'lists.zipCode': '91007', isActive: true}, (err, users) => {
    console.log(users);
});