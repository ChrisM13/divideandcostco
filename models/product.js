var mongoose = require('mongoose');

var productSchema = new mongoose.Schema (
    {
        name: String,
        quantity: Number,
        price: Number,
        category: {
            type: String,
            enum: ['Grocery', 'Home/Kitchen', 'Bath', 'Misc']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);