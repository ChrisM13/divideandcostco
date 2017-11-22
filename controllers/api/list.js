var User = require('./../../models/user');

function index(req, res) {
    User.find({}, (err, list) => {
        res.status(200).json(list);
    });
}

module.exports = {
    index
}