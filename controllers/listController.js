var User = require('./../models/user');
var Product = require('./../models/product');

function show(req, res) {
    Product.find({}, (err, products) => {
        res.render('lists/show', {user: req.user, products, zip: req.params.zip});
    });
};

function createList(req, res) {
    var list = req.user.currentList();
    var zip = req.params.zip;
    // if user has a current list => set isActive to false
    if (list) list.isActive = false;
    // if no list
    req.user.lists.push({zipCode: zip});
    list = req.user.currentList();
    list.products = req.body.products;
    req.user.save();
    res.redirect(`/costcos/${zip}`);
};

function update(req, res) {
    if (!req.user) return res.redirect('/'); // TODO - put this as middleware in routes

    var list = req.user.currentList();
    list.products = req.body.products;
    req.user.save();
    res.redirect(`/costcos/${list.zipCode}`);
}

function destroy(req, res) {
    var list = req.user.currentList();
    list.products.remove(req.params.productId);
    req.user.save();
    res.redirect(`/costcos/${list.zipCode}`);
}

module.exports = {
    show,
    createList,
    update,
    destroy
};