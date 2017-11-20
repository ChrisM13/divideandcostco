var Products = require('./../models/product');

module.exports = {
    destroy
    createProducts
}


function createProducts(req, res) {
    products.create([
        {
            name: "Kirkland Toilet Paper",
            quantity: 36,
            price: 25.99,
            enum: "Bath"
        },
        {
            name: "Kirkland Dining Napkins",
            quantity: 12,
            price: 32.99,
        enum: "Home/Kitchen"
    },
    {
        name: "Kirkland Paper Towels",
        quantity: 12,
        price: 34.99,
        enum: "Home/Kitchen"
    },
    {
        name: "Kleenex Tissues",
        quantity: 10,
        price: 21.59,
        enum: "Bath"
    },
    {
        name: "Reynolds Heavy Duty Foil-150 Ft",
        quantity: 2,
        price: 22.49,
        enum: "Home/Kitchen"
    },
    {
        name: "Kirkland Plastic Wrap-750 Ft",
        quantity: 2,
        price: 11.29,
        enum: "Home/Kitchen"
    },
    {
        name: "Lysol Disinfectant Spray",
        quantity: 4,
        price: 17.99,
        enum: "Bath"
    },
    {
        name: "Lysol Toiler Bowl Cleaner",
        quantity: 4,
        price: 11.99,
        enum: "Bath"
    },
    {
        name: "Kirkland Fabric Softener",
        quantity: 2,
        price: 9.49,
        enum: "Home/Kitchen"
    },
    {
        name: "Kirkland Mediterranean Oil-3 Liters",
        quantity: 2,
        price: 27.99,
        enum: "Home/Kitchen"
    },
    {
        name: "Nonghim Gourmet Noodles",
        quantity: 16,
        price: 14.99,
        enum: "Grocery"
    },
    {
        name: "Nutella Hazelnut",
        quantity: 2,
        price: 13.99,
        enum: "Grocery"
    },
    {
        name: "Hidden Valley Ranch Dressing",
        quantity: 2,
        price: 11.79,
        enum: "Grocery"
    },
    {
        name: "Skippy Peanut Butter Creamy-48oz",
        quantity: 2,
        price: 11.49,
        enum: "Grocery"
    },
    {
        name: "A.1. Steak Sauce",
        quantity: 4,
        price: 10.49,
        enum: "Grocery"
    },
    {
        name: "Starbucks Coffe House Blend K-Cups",
        quantity: 128,
        price: 79.99,
        enum: "Grocery"
    },
    {
        name: "Green Mountain Coffee French Vanilla K-Cups",
        quantity: 180,
        price: 74.99,
        enum: "Grocery"
    },
    {
        name: "Nonghim Gourmet Noodles",
        quantity: 16,
        price: 14.99,
        enum: "Grocery"
    },
    {
        name: "Red Bull Energy Drink",
        quantity: 24,
        price: 40.99,
        enum: "Grocery"
    },
    {
        name: "5 Hour Energy Shot",
        quantity: 24,
        price: 35.99,
        enum: "Grocery"
    },
    {
        name: "Mobil 1 Motor Oil- 10W-30",
        quantity: 6,
        price: 36.99,
        enum: "Misc"
    },
    {
        name: "Luminous LED 60W Light Bulbs",
        quantity: 24,
        price: 44.99,
        enum: "Misc"
    },
    {
        name: "Kirkland AA Batteries",
        quantity: 72,
        price: 39.99,
        enum: "Misc"
    },
    {
        name: "Kirkland AAA Batteries",
        quantity: 64,
        price: 39.99,
        enum: "Misc"
    }
]);
    function(err, body) {
        console.log('Database Seeded');
};
}





// function destroy(req, res) {
//     products.find({}).remove()
//     doc.save()
//     res.render('/products')
// }