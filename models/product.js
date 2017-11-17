var mongoose = require('mongoose');

var productSchema = new mongoose.Schema (
    {
        name: String,
        quantity: Number,
        price: Number,
        enum: ['Grocery', 'Home/Kitchen', 'Bath', 'Misc']
    }
);

module.exports = mongoose.model('Product', productSchema);