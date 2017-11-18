var request = require('request');
var rootURL = 'https://api.yelp.com/v3/businesses/search';



function findCostco(req, res, next) {
    var options = {
        url: `${rootURL}?term=costco&location=${req.body.zipCode}`,
        headers: {
            'Authorization': `Bearer ${process.env.YELP_TOKEN}`
        }
    };
    request(options, function(err, response, body) {
        var costcoData = JSON.parse(body);
        console.log('made it to Costco')
        res.render('index', { user: req.user, costcoData });
        console.log('this is costcoData', costcoData)
    });
}


module.exports = {
    findCostco
}


// var zipCode = parseInt(req.body.businesses.location.zip_code);