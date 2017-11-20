var User = require('./../models/user');

function index(req, res) {
    User.find({}, function(err, users) {
        if (err) return res.status(err.statusCode || 500).json(err);
        res.json(users);
    });
}

function show(req, res) {
    User.findById(req.params.id, function(err, user) {
        res.render('users/show', { user })
    });
}

function getUserLists(req, res) {
    User.findById(req.params.id, function(err, user) {
        res.render('lists/index', { user })
    })
}

module.exports = {
    index,
    show,
    getUserLists
};