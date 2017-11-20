var Product = require('../models/product');

function index(req, res) {
    // Product.find({}, (err, products) => {
    //     if (err) return res.status(err.statusCode || 500).json(err);
    //     res.json(products);
    // });
}

module.exports = {
    index
};