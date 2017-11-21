var request = require('request-promise-native');
var rootURL = 'https://api.yelp.com/v3/businesses/search';

function findCostco(zip) {
    var options = {
        url: `${rootURL}?term=costco&location=${zip}&limit=3`,
        headers: {
            'Authorization': `Bearer ${process.env.YELP_TOKEN}`
        }
    };
    return request(options).then(function(json) {
        return JSON.parse(json);
    });
}

module.exports = {
    findCostco
}