var User = require('./../models/user');


function createList(req, res) {
    req.User.lists.create({products: req.})
}

module.exports = {
    createList
};