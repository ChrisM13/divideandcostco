// Require the database
require('./config/db');
// require Product model
var Product = require('./models/product');
// Destroy all data
var seed = Promise.all([Product.remove({})]);
// Create products
seed.then( () => {
    return Product.create([
        {name: "Kirkland Toilet Paper", quantity: 36, price: 25.99, category: "Bath"},
        {name: "Kirkland Dining Napkins", quantity: 12, price: 32.99, category: "Home/Kitchen"},
        {name: "Kirkland Paper Towels", quantity: 12, price: 34.99, category: "Home/Kitchen"},
        {name: "Kleenex Tissues", quantity: 10, price: 21.59, category: "Bath"},
        {name: "Reynolds Heavy Duty Foil-150 Ft", quantity: 2, price: 22.49, category: "Home/Kitchen"},
        {name: "Kirkland Plastic Wrap-750 Ft", quantity: 2, price: 11.29, category: "Home/Kitchen"},
        {name: "Lysol Disinfectant Spray", quantity: 4, price: 17.99, category: "Bath"},
        {name: "Lysol Toilet Bowl Cleaner", quantity: 4, price: 11.99, category: "Home/Kitchen"},
        {name: "Kirkland Fabric Softener", quantity: 2, price: 9.49, category: "Home/Kitchen"},
        {name: "Kirkland Mediterranean Oil-3 Liter", quantity: 2, price: 27.99, category: "Home/Kitchen"},
        {name: "Nonghim Gourmet Noodles", quantity: 16, price: 14.99, category: "Grocery"},
        {name: "Nutella Hazelnut", quantity: 2, price: 13.99, category: "Grocery"},
        {name: "Hidden Valley Rnach Dressing", quantity: 2, price: 11.79, category: "Grocery"},
        {name: "Skippy Peanut Butter Creamy-48oz", quantity: 2, price: 11.49, category: "Grocery"},
        {name: "A.1. Steak Sauce", quantity: 4, price: 32.99, category: "Grocery"},
        {name: "Starbucks Coffee House Blend K-Cups", quantity: 128, price: 79.99, category: "Grocery"},
        {name: "Greenland Mountain Coffee French Vallina K-Cups", quantity: 180, price: 74.99, category: "Grocery"},
        {name: "Red Bull Energy Drink", quantity: 24, price: 40.99, category: "Grocery"},
        {name: "5 Hour Energy ", quantity: 24, price: 35.99, category: "Grocery"},
        {name: "Mobil 1 Motor Oil-10W-30", quantity: 6, price: 36.99, category: "Misc"},
        {name: "Luminous LED 60W Light Bulbs", quantity: 24, price: 44.99, category: "Misc"},
        {name: "Kirkland AA Batteries", quantity: 72, price: 39.99, category: "Misc"},
        {name: "Kirkland AAA Batteries", quantity: 64, price: 39.99, category: "Misc"},
    ]);
});
