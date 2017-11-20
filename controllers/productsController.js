var Product = require('../models/product');

function index(req, res) {
    Product.find({}, (err, products) => {
        res.render('products/products', {products});
    });
}

module.exports = {
    index
};