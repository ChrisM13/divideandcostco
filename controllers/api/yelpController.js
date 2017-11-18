var request = require('request');
var rootURL = 'https://api.yelp.com/v3/businesses/search';

function findCostco(req, res, next) {
    var options = {
        url: `${rootURL}?term=costco&location=${req.body.zipCode}&limit=1`,
        headers: {
            'Authorization': `Bearer ${process.env.YELP_TOKEN}`
        }
    };
    request(options, function(err, response, body) {
        var costcoData = JSON.parse(body);
        res.render('costcos/index', { user: req.user, costcoData });
    });
}

module.exports = {
    findCostco
}