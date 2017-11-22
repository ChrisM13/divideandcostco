var User = require('./../../models/user');

function index(req, res) {
    User.find({}).populate('lists.products').exec((err, users) => {
        var lists = [];
        users.forEach(user => {
            lists.push(...user.lists);
        });
        res.json(lists);
    });
}

module.exports = {
    index
};