var yelpCtrl = require('./api/yelpController');
var User = require('../models/user');

function index(req, res) {
    res.render('costcos/index');
};

function show(req, res) {
    console.log('cats');
    console.log(req.params);
    User.find({'lists.zipCode': req.params.zip, 'lists.isActive': true}, (err, users) => {
        // console.log(users);
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